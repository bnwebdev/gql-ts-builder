import { createGraphqlBuilder } from "../../src";
import { DeliveryAddress } from "../types";

export const createDeliveryAddressQuery = createGraphqlBuilder<
  DeliveryAddress,
  string
>(
  (select) => `
  ... on DeliveryAddress {
    ${select}
  }
`
);
