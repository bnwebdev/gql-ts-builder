import { Brand } from "./Brand";
import { DeepIntersection } from "./DeepIntersection";
import { GraphqlSelection } from "./GraphqlSelection";

export type GraphqlOperationBuilder<Entity, ReturnType> = <
  Selection extends GraphqlSelection<Entity>,
>(
  selection: Selection,
) => Brand<ReturnType, DeepIntersection<Entity, Selection>>;
