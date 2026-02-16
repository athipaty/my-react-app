export const fmt = (n) =>
  Number(n ?? 0)
    .toFixed(2)
    .replace(/\.?0+$/, "");

export const valid = (s) =>
  /^(\d+(\.\d*)?|\.\d+)$/.test(s);

export const strip0 = (s) =>
  s?.startsWith("0.") || s === "" || s === "."
    ? s
    : s?.replace(/^0+(?=\d)/, "") ?? "";
