export const stringifySelection = <Type extends Record<string, unknown>>(
  selection: Type
): string => {
  const stringifiedSelectionParts: string[] = [];

  Object.entries(selection).forEach(([key, value]) => {
    if (value && typeof value === "object") {
      const internalValue = value as Record<string, unknown>;
      const internalStringifiedSelection = stringifySelection(internalValue);
      const selectionPart = `${key} { ${internalStringifiedSelection} }`;

      stringifiedSelectionParts.push(selectionPart);
    }

    if (typeof value === "string") {
      stringifiedSelectionParts.push(`${key} {${value}}`);
    }

    if (value === true) {
      stringifiedSelectionParts.push(key);
    }
  });

  return stringifiedSelectionParts.join(" ");
};
