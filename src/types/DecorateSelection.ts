import { $Keys } from "utility-types";
import { GraphqlRoot } from "./GraphqlRoot";
import { GraphqlRootOperation } from "./GraphqlRootOperation";

export type DecorateSelection<
  GraphqlRootType extends GraphqlRoot,
  Operation extends GraphqlRootOperation,
  ReturnType,
> = (
  operation: Operation,
  name: $Keys<GraphqlRootType[Operation]>,
  select: string,
) => ReturnType;
