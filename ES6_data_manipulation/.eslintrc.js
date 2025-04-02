import js from "@eslint/js";
import eslintPluginJest from "eslint-plugin-jest";
import airbnbBase from "eslint-config-airbnb-base";

export default [
  js.configs.recommended,
  airbnbBase,
  {
    plugins: { jest: eslintPluginJest },
    rules: {
      "max-classes-per-file": "off",
      "no-underscore-dangle": "off",
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
  },
];
