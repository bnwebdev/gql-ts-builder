export const createVirtualObject = <
  VirtualObjectType extends Record<PropertyKey, unknown>,
  Field extends keyof VirtualObjectType = keyof VirtualObjectType,
>(
  resolve: (field: Field) => VirtualObjectType[Field],
): VirtualObjectType => {
  return new Proxy({} as VirtualObjectType, {
    get(_target, field) {
      return resolve(field as Field);
    },
  });
};
