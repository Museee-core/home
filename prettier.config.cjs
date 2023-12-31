/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: true,
  semi: false,
  singleAttributePerLine: true,
  trailingComma: "all",
};

module.exports = config;
