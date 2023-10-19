import { InferSelection } from "../../src";
import { createUserQuery } from "../queryBuilders/createUserQuery";

export const QUERY = createUserQuery({
  id: true,
  profile: {
    firstName: true,
    lastName: true,
  },
});

export type Payload = InferSelection<typeof QUERY>;
