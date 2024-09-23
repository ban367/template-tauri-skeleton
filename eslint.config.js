import svelteParser from "svelte-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tsRecommended from "@typescript-eslint/eslint-plugin";
import svelteRecommended from "eslint-plugin-svelte";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.svelte"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      "@typescript-eslint": tsRecommended,
      svelte: svelteRecommended,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsRecommended.configs.recommended.rules,
      ...svelteRecommended.configs.recommended.rules,
      ...prettierConfig.rules,
      ...prettierPlugin.configs.recommended.rules,
    },
    ignores: [".svelte-kit/**", "src-tauri/**"],
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
];
