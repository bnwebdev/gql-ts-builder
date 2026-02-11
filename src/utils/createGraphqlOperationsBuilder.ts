import {
  GraphqlOperationsBuilder,
  GraphqlRoot,
  GraphqlRootOperation,
  DecorateSelection,
} from "../types";
import { createGraphqlOperationBuilder } from "./createGraphqlOperationBuilder";
import { createVirtualObject } from "./createVirtualObject";

export const createGraphqlOperationsBuilder = <
  GraphqlRootType extends GraphqlRoot,
  Operation extends GraphqlRootOperation,
  ReturnType,
>(
  operation: Operation,
  decorateSelection: DecorateSelection<GraphqlRootType, Operation, ReturnType>,
) =>
  createVirtualObject<
    GraphqlOperationsBuilder<GraphqlRootType, Operation, ReturnType>
  >((field) =>
    createGraphqlOperationBuilder<
      GraphqlRootType[Operation][typeof field],
      ReturnType
    >((select) => decorateSelection(operation, field, select)),
  );
