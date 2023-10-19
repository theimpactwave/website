module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      "jsx": true
    },
    project: "./tsconfig.json",
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"]
      }
    }
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  plugins: [
    "prettier",
    "react",
    "react-hooks",
    "react-refresh",
    "@typescript-eslint",
    "autofix",
    "import-alias",
    "simple-import-sort"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
      }
    ],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-imports": ["error", {"prefer": "type-imports"}],
    "react-hooks/exhaustive-deps": "error",
    "no-empty-function": "off",
    "react/self-closing-comp": ["error", {"component": true, "html": true}],
    "autofix/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": true,
      "destructuredArrayIgnorePattern": "^_"
    }],
    "import/no-named-as-default": "off",
    "import/extensions": [
      "error",
      "never",
      {"ignorePackages": true}
    ],
    "import-alias/import-alias": [
      "error",
      {
        "relativeDepth": 0,
        "aliases": [
          {"alias": "@/", "matcher": "^src"}
        ]
      }
    ],
    "import/order": "off",
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["../"]
      }
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser"
    }
  ]
}
