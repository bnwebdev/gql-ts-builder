import {
  $ElementType,
  Intersection,
  OmitByValue,
  PickByValue,
  Primitive,
} from "utility-types";

import { ObjectType } from "./ObjectType";

export type DeepIntersection<Entity, Selection> = Entity extends Primitive
  ? Entity
  : Entity extends unknown[]
  ? DeepIntersection<$ElementType<Entity, number>, Selection>[]
  : Entity extends ObjectType
  ? Selection extends ObjectType
    ? Intersection<PickByValue<Entity, Primitive>, Selection> & {
        [Key in keyof OmitByValue<
          Intersection<Entity, Selection>,
          Primitive
        >]: DeepIntersection<Entity[Key], Selection[Key]>;
      }
    : never
  : never;
