const development = process.env.STAGE !== "prod";
const devRules = !development ? { "no-console": "warn" } : { "no-console": 0 };
const rules = {
  camelcase: 0,
  "no-use-before-define": 0,
  "@typescript-eslint/no-use-before-define": "error",
  "@typescript-eslint/unbound-method": 0,
  "@typescript-eslint/indent": 0,
  "@typescript-eslint/ban-ts-comment": 0,
  "@typescript-eslint/camelcase": 0,
  "@typescript-eslint/explicit-module-boundary-types": 0,
  "@typescript-eslint/no-unused-vars": 0,
  "@typescript-eslint/no-unused-expressions": ["error"],
  "@typescript-eslint/no-explicit-any": 0,
  "@typescript-eslint/no-misused-promises": 0,
  "@typescript-eslint/no-object-literal-type-assertion": 0,
  "@typescript-eslint/no-this-alias": 0,
  "@typescript-eslint/no-unsafe-assignment": 0,
  "@typescript-eslint/no-unsafe-call": 0,
  "@typescript-eslint/no-unsafe-member-access": 0,
  "@typescript-eslint/no-unsafe-return": 0,
  "@typescript-eslint/require-await": 0,
  "@typescript-eslint/restrict-template-expressions": 0,
  "import/extensions": 0,
  "import/no-cycle": 0,
  "import/no-named-as-default": 2,
  "import/no-anonymous-default-export": 2,
  "import/order": [
    "error",
    {
      alphabetize: { order: "asc", caseInsensitive: false },
      pathGroups: [
        {
          pattern: "@/**",
          group: "external",
          position: "after",
        },
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
    },
  ],
  indent: "off",
  "jsx-a11y/anchor-is-valid": 0,
  "no-plusplus": 0,
  "no-param-reassign": 0,
  "no-throw-literal": 0,
  "no-underscore-dangle": 0,
  "no-unused-expressions": 0,
  "no-unused-vars": 0,
  "no-void": 0,
  "prettier/prettier": "error",
  "require-jsdoc": [
    "error",
    {
      require: {
        ArrowFunctionExpression: false,
        ClassDeclaration: true,
        FunctionDeclaration: false,
        FunctionExpression: false,
        MethodDefinition: false,
      },
    },
  ],
  "react/jsx-filename-extension": [
    2,
    {
      extensions: [".tsx", ".jsx"],
    },
  ],
  "react/jsx-props-no-spreading": 0,
  "react/no-array-index-key": 0,
  "react/prop-types": 0,
  "react-hooks/exhaustive-deps": 0,
  "react/react-in-jsx-scope": "off",
  "react/jsx-one-expression-per-line": 0,
  "react/require-default-props": 0,
  ...devRules,
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  plugins: ["import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      alias: {
        extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
        map: [["@", "./src/"]],
      },
      "eslint-import-resolver-typescript": true,
    },
  },
  rules,
};
