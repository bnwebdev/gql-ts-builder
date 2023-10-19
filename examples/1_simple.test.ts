import { InferSelection, createGraphqlBuilder } from "../src";
import { User } from "./types";
import { assertEqualQueries } from "./utils";

describe("simple", () => {
  const createUserQuery = createGraphqlBuilder<User, string>(
    (selection) => `
      query User {
          user {
              ${selection}
          }
      }
  `
  );

  it("should handle simple query", () => {
    const query = createUserQuery({
      id: true,
    });

    const expected = `
        query User {
            user {
              id
            }
        }
    `;

    assertEqualQueries(query, expected);
  });

  it("should handle a couple of the fields", () => {
    const query = createUserQuery({
      id: true,
      createdAt: true,
      updatedAt: true,
    });

    const expected = `
        query User {
            user {
              id
              createdAt
              updatedAt
            }
        }
    `;

    assertEqualQueries(query, expected);
  });

  it("should handle a types!", () => {
    const query = createUserQuery({
      id: true,
      createdAt: true,
      updatedAt: true,
    });

    type Payload = InferSelection<typeof query>;

    // will be ts-error on invalid type
    const object: Payload = {
      createdAt: 0,
      id: 0,
      updatedAt: 0,
    };

    expect(object).toBeDefined();
  });

  it("should handle an arrays!", () => {
    const query = createUserQuery({
      id: true,
      deals: {
        description: true,
      },
    });

    type Payload = InferSelection<typeof query>;

    const expected = `
        query User {
            user {
              id
              deals {
                description
              }
            }
        }
    `;

    // will be ts-error on invalid type
    const object: Payload = {
      id: 0,
      deals: [
        {
          description: "hello",
        },
      ],
    };

    expect(object).toBeDefined();
    assertEqualQueries(query, expected);
  });

  it("should handle a very nested fields", () => {
    const query = createUserQuery({
      sellerProfile: {
        company: {
          id: true,
          name: true,
        },
      },
    });

    const expected = `
        query User {
            user {
              sellerProfile {
                company {
                  id
                  name
                }
              }
            }
        }
    `;

    assertEqualQueries(query, expected);
  });
});
