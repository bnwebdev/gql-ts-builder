import { InferSelection, createGraphqlBuilder } from "../src";
import { Deal, DeliveryAddress, DestinationAddress } from "./types";
import { assertEqualQueries } from "./utils";

describe("union", () => {
  const createDealQuery = createGraphqlBuilder<Deal, string>(
    (selection) => `
          query Deal($input: DealInput!) {
              deal(input: $input) {
                  ${selection}
              }
          }
      `
  );

  const createDestinationAddressQuery = createGraphqlBuilder<
    DestinationAddress,
    string
  >(
    (selection) => `
          ... on DestinationAddress {
            ${selection}
          }
  `
  );

  const createDeliveryAddressQuery = createGraphqlBuilder<
    DeliveryAddress,
    string
  >(
    (selection) => `
        ... on DeliveryAddress {
          ${selection}
        }
`
  );

  const destinationQuery = createDestinationAddressQuery({
    type: true,
    target: {
      city: true,
      postcode: true,
    },
  });

  type DestinationAddressPayload = InferSelection<typeof destinationQuery>;

  const deliveryQuery = createDeliveryAddressQuery({
    type: true,
    to: {
      city: true,
      postcode: true,
    },
    from: {
      city: true,
      postcode: true,
    },
  });

  type DeliveryAddressPayload = InferSelection<typeof deliveryQuery>;

  it("should allow put custom string", () => {
    const query = createDealQuery({
      address: [destinationQuery, deliveryQuery].join(" "),
    });

    const expected = `
    query Deal($input: DealInput!) {
        deal(input: $input) {
            address {
                ... on DestinationAddress {
                    type
                    target {
                        city
                        postcode
                    }
                }

                ... on DeliveryAddress {
                    type
                    to {
                        city
                        postcode
                    }
                    from {
                        city
                        postcode
                    }
                }
            }

        }
    }
    `;

    type RawPayload = InferSelection<typeof query>;
    type Payload = Omit<RawPayload, "address"> & {
      address: DestinationAddressPayload | DeliveryAddressPayload;
    };

    // will be ts-error on invalid type
    const object: Payload = {
      address: {
        type: "destination",
        target: {
          city: "Test",
          postcode: "40000",
        },
      },
    };

    expect(object).toBeDefined();
    assertEqualQueries(query, expected);
  });
});
