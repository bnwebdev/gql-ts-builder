import { $ElementType } from "utility-types";

import { InferSelection } from "../../src";
import { createDeliveryAddressQuery } from "../queryBuilders/createDeliveryAddressQuery";
import { createDestinationAddressQuery } from "../queryBuilders/createDestinationAddressQuery";
import { createUserQuery } from "../queryBuilders/createUserQuery";

const DESTINATION = createDestinationAddressQuery({
  type: true,
  target: {
    city: true,
    postcode: true,
  },
});

const DELIVERY = createDeliveryAddressQuery({
  type: true,
  from: {
    city: true,
    postcode: true,
  },
  to: {
    city: true,
    postcode: true,
  },
});

type DestinationPayload = InferSelection<typeof DESTINATION>;
type DeliveryPayload = InferSelection<typeof DELIVERY>;

type AddressPayload = DestinationPayload | DeliveryPayload;

export const QUERY = createUserQuery({
  id: true,
  deals: {
    address: `${DESTINATION} ${DELIVERY}`,
    description: true,
  },
});

type RawPayload = InferSelection<typeof QUERY>;
type RawDealPayload = $ElementType<RawPayload["deals"], number>;

type DealPayload = Omit<RawDealPayload, "address"> & {
  address: AddressPayload;
};

export type Payload = Omit<RawPayload, "deals"> & {
  deals: DealPayload[];
};
