import { GraphqlOperationBuilder } from "./GraphqlOperationBuilder";

export type CreateGraphqlOperationBuilder<
  Entity extends Record<string, unknown>,
  ReturnType,
> = (
  decorateSelection: (select: string) => ReturnType,
) => GraphqlOperationBuilder<Entity, ReturnType>;
