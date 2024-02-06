export type Brand<Type, BrandType> = Type & {
  __brand?: BrandType;
};
