import { $Keys } from "utility-types";
import { GraphqlRoot } from "./GraphqlRoot";

export type ExtractAllOperationKeys<GraphqlRootType extends GraphqlRoot> =
  | $Keys<GraphqlRootType["query"]>
  | $Keys<GraphqlRootType["mutation"]>
  | $Keys<GraphqlRootType["subscription"]>;
