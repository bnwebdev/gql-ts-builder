import { Brand } from "./Brand";

export type InferBrand<T> = T extends Brand<unknown, infer U> ? U : never;
