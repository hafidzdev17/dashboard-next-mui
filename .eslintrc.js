module.exports = {
  // extends: ['wesbos'],
  extends: "next/core-web-vitals",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: [".", "components", "styles"],
        extensions: [".js", ".jsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  root: true,
};
