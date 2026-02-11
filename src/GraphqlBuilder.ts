import {
  DecorateSelection,
  GraphqlOperationsBuilder,
  GraphqlRoot,
  GraphqlRootOperation,
} from "./types";
import { createGraphqlOperationsBuilder } from "./utils";

export class GraphqlBuilder<GraphqlRootType extends GraphqlRoot, ReturnType> {
  public query: GraphqlOperationsBuilder<GraphqlRootType, "query", ReturnType>;

  public mutation: GraphqlOperationsBuilder<
    GraphqlRootType,
    "mutation",
    ReturnType
  >;

  public subscription: GraphqlOperationsBuilder<
    GraphqlRootType,
    "subscription",
    ReturnType
  >;

  constructor(
    decorateSelection: DecorateSelection<
      GraphqlRootType,
      GraphqlRootOperation,
      ReturnType
    >,
  ) {
    this.query = createGraphqlOperationsBuilder("query", decorateSelection);

    this.mutation = createGraphqlOperationsBuilder(
      "mutation",
      decorateSelection,
    );

    this.subscription = createGraphqlOperationsBuilder(
      "subscription",
      decorateSelection,
    );
  }
}
