import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals", 
      "next/typescript",
      "prettier"
    ],
    plugins: [
      "folders",
      "filenames",
    ],
    rules: { 
      "filenames/match-regex": [2, "^(_)?[a-z-]+$"],   // kebab-case with optional _ prefix for next.js main files like _app.js
      "folders/match-regex": [2, "^(\\u005B)?[a-z-]+(\\u005D)?$", "/front_end/"],  // kebab-case with optional [ ] brackets
    }
  }),
];

export default eslintConfig;
