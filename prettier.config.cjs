/** @typedef  {import("prettier").Config} PrettierConfig */
/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  printWidth: 180,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrderTypeScriptVersion: "4.4.0",
  importOrder: ["^(react/(.)$)|^(react$)", "", "^(next/(.)$)|^(next$)", "<THIRD_PARTY_MODULES>", "", "^@/(.)$", "", "^/(.)$", "", "^~/(.)$", "^[./]"],
  proseWrap: "always",
  "--experimental-ternaries": true,
};

module.exports = config;
