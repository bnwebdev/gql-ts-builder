import { Brand, DeepIntersection, GraphqlOperationBuilder } from "../types";

import { stringifySelection } from "./stringifySelection";

export const createGraphqlOperationBuilder =
  <Entity extends Record<string, unknown>, ReturnType>(
    decorateSelection: (select: string) => ReturnType,
  ): GraphqlOperationBuilder<Entity, ReturnType> =>
  (selection) => {
    const stringifiedSelection =
      typeof selection === "string" ? selection : stringifySelection(selection);

    return decorateSelection(stringifiedSelection) as Brand<
      ReturnType,
      DeepIntersection<Entity, Selection>
    >;
  };

/**
 * @deprecated we decided to change naming to more exact
 * since we have new graphql builder concept
 */
export const createGraphqlBuilder = createGraphqlOperationBuilder;
