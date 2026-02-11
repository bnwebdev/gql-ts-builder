import { GraphqlRootOperation } from "./GraphqlRootOperation";

/**
 * @example
 * // You can create GraphqlRoot based on the graphql codegen types.
 * import { Query, Mutation, Subscription } from "@path-to-generated-types"
 *
 * type GraphqlRoot = {
 *  query: Query
 *  mutation: Mutation
 *  subscription: Subscription
 * }
 *
 * @example
 * // Or you could do it manually, if u don't have generated types
 * type User = {
 *  id: string
 *  name: string
 * }
 *
 * type Query {
 *  user: User
 * }
 *
 *
 * type GraphqlRoot = {
 *  query: Query
 *  // ...
 * }
 */
export type GraphqlRoot = Record<
  GraphqlRootOperation,
  Record<string, Record<string, unknown>>
>;
