import { createGraphqlBuilder } from "../../src";
import { User } from "../types";

export const createUserQuery = createGraphqlBuilder<User, string>(
  (selection) => `
    query User {
        user {
            ${selection}
        }
    }
`
);
