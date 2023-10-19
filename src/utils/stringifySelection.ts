export const stringifySelection = <T extends Record<string, unknown>>(
  selection: T
): string => {
  const stringifiedSelectionParts: string[] = [];

  for (const [key, value] of Object.entries(selection)) {
    if (value && typeof value === "object") {
      const internalValue = value as Record<string, unknown>;
      const internalStringifiedSelection = stringifySelection(internalValue);
      const selectionPart = `${key} { ${internalStringifiedSelection} }`;

      stringifiedSelectionParts.push(selectionPart);

      continue;
    }

    if (typeof value === "string") {
      stringifiedSelectionParts.push(`${key} {${value}}`);
    }

    if (value === true) {
      stringifiedSelectionParts.push(key);

      continue;
    }
  }

  return stringifiedSelectionParts.join(" ");
};
