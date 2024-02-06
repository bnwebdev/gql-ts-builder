import { Brand } from "./Brand";

export type InferBrand<Type> = Type extends Brand<unknown, infer BrandType>
  ? BrandType
  : never;
