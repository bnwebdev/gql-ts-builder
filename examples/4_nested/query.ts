import { InferSelection } from "../../src";
import { createUserQuery } from "../queryBuilders/createUserQuery";

export const QUERY = createUserQuery({
  id: true,
  profile: {
    firstName: true,
    lastName: true,
  },
  sellerProfile: {
    company: {
      id: true,
      name: true,
    },
  },
});

export type Payload = InferSelection<typeof QUERY>;
