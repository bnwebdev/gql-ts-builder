import { $ElementType, $Keys, Primitive } from "utility-types";

export type Booleanize<Type> = Type extends unknown[]
  ? Booleanize<$ElementType<Type, number>>
  : Type extends Record<string, unknown>
  ? { [Key in $Keys<Type>]: Booleanize<NonNullable<Type[Key]>> }
  : Type extends Primitive
  ? true
  : never;
