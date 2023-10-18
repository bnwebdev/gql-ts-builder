import { $ElementType, $Keys, Primitive } from "utility-types";

export type Booleanize<T> = T extends unknown[]
  ? Booleanize<$ElementType<T, number>>
  : T extends Record<string, unknown>
  ? { [Key in $Keys<T>]: Booleanize<NonNullable<T[Key]>> }
  : T extends Primitive
  ? true
  : never;
