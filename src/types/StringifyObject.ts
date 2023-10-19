import { $Keys } from "utility-types";

import { ObjectType } from "./ObjectType";

export type StringifyObject<T> = T extends ObjectType
  ?
      | {
          [Key in $Keys<T>]: Extract<T[Key], ObjectType> extends ObjectType
            ?
                | StringifyObject<Extract<T[Key], ObjectType>>
                | Exclude<T[Key], ObjectType>
            : T[Key];
        }
      | string
  : T;
