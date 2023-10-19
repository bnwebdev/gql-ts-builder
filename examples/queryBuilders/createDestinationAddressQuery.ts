import { createGraphqlBuilder } from "../../src";
import { DestinationAddress } from "../types";

export const createDestinationAddressQuery = createGraphqlBuilder<
  DestinationAddress,
  string
>(
  (select) => `
  ... on DestinationAddress {
    ${select}
  }
`
);
