export const normalizeQuery = (query: string) => {
  return query.replace(/\s+/gi, " ").trim();
};
