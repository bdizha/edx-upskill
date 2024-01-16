export const toCamelCase = (string: string) => {
  return string.replace(
    /(?:^\w|[A-Z]|\b\w|\s+)/g,
    (match: string, index: number) => {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }
  );
};

export const toUpperCaseFirst = (string: string) => {
  return string.replace(/^\w/, (char: string) => char.toUpperCase());
};
