import { normalizeQuery } from "./normalizeQuery";

export const assertEqualQueries = (lhs: string, rhs: string) => {
  expect(normalizeQuery(lhs)).toEqual(normalizeQuery(rhs));
};
