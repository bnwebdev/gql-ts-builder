import { stringifySelection } from "./utils";
import { Brand, DeepIntersection, GraphqlSelection } from "./types";

export const createGraphqlBuilder =
  <Entity extends Record<string, unknown>, ReturnType>(
    decorateSelection: (select: string) => ReturnType
  ) =>
  <Selection extends GraphqlSelection<Entity>>(
    selection: Selection
  ): Brand<ReturnType, DeepIntersection<Entity, Selection>> => {
    const stringifiedSelection =
      typeof selection === "string" ? selection : stringifySelection(selection);

    return decorateSelection(stringifiedSelection) as Brand<
      ReturnType,
      DeepIntersection<Entity, Selection>
    >;
  };
