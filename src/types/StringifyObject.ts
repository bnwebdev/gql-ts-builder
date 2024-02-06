import { $Keys } from "utility-types";

import { ObjectType } from "./ObjectType";

export type StringifyObject<Type> = Type extends ObjectType
  ?
      | {
          [Key in $Keys<Type>]: Extract<
            Type[Key],
            ObjectType
          > extends ObjectType
            ?
                | StringifyObject<Extract<Type[Key], ObjectType>>
                | Exclude<Type[Key], ObjectType>
            : Type[Key];
        }
      | string
  : Type;
