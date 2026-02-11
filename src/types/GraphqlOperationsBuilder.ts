import { GraphqlOperationBuilder } from "./GraphqlOperationBuilder";
import { GraphqlRoot } from "./GraphqlRoot";
import { GraphqlRootOperation } from "./GraphqlRootOperation";

export type GraphqlOperationsBuilder<
  GraphqlRootType extends GraphqlRoot,
  Operation extends GraphqlRootOperation,
  ReturnType,
> = {
  [Key in keyof GraphqlRootType[Operation]]: GraphqlOperationBuilder<
    GraphqlRootType[Operation][Key],
    ReturnType
  >;
};
