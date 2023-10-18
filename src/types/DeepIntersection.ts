import {
  Intersection,
  OmitByValue,
  PickByValue,
  Primitive,
} from "utility-types";

export type DeepIntersection<T, U> = T extends Record<string, unknown>
  ? U extends Record<string, unknown>
    ? Intersection<PickByValue<T, Primitive>, U> & {
        [Key in keyof OmitByValue<
          Intersection<T, U>,
          Primitive
        >]: DeepIntersection<T[Key], U[Key]>;
      }
    : never
  : never;
