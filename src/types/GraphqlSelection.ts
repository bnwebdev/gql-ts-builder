import { DeepPartial } from "utility-types";

import { Booleanize } from "./Booleanize";
import { StringifyObject } from "./StringifyObject";

export type GraphqlSelection<T> = StringifyObject<Booleanize<DeepPartial<T>>>;
