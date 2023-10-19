import { InferSelection } from "../../src";
import { createUserQuery } from "../queryBuilders/createUserQuery";

export const QUERY = createUserQuery({
  id: true,
  deals: {
    description: true,
  },
});

export type Payload = InferSelection<typeof QUERY>;
