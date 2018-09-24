"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:flowtype/recommended"],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "flowtype/boolean-style": [2, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [2, "never"],
    "flowtype/generic-spacing": [2, "never"],
    "flowtype/newline-after-flow-annotation": [
      2,
      "always"
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 1,
    "flowtype/object-type-delimiter": [2, "comma"],
    "flowtype/require-parameter-type": [
      2,
      {
        excludeArrowFunctions: true
      }
    ],
    "flowtype/require-return-type": [
      2,
      "always",
      {
        excludeArrowFunctions: true,
        annotateUndefined: "never",
        excludeMatching: ["^render$"]
      }
    ],
    "flowtype/require-valid-file-annotation": [
      2,
      "always",
      {"annotationStyle": "line"}
    ],
    "flowtype/semi": [2, "never"],
    "flowtype/space-after-type-colon": [2, "always"],
    "flowtype/space-before-generic-bracket": [2, "never"],
    "flowtype/space-before-type-colon": [2, "never"],
    "flowtype/type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
    "flowtype/union-intersection-spacing": [2, "always"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1
  },
  plugins: ["flowtype"]
};
