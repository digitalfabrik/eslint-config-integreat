"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: ["standard"],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  rules: {
    "prefer-object-spread/prefer-object-spread": "error",
    "arrow-parens": ["error", "as-needed"],
    "no-extra-bind": "error",
    "prefer-template": "error",
    "no-loop-func": "error",
    curly: ["error", "all"],
    "prefer-const": "error",
    "jsx-quotes": "error",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["JSXElement *"]
      }
    ],
    "flowtype/boolean-style": [2, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [2, "never"],
    "flowtype/generic-spacing": [2, "never"],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 2,
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
        annotateUndefined: "never"
      }
    ],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [2, "never"],
    "flowtype/space-after-type-colon": [2, "always"],
    "flowtype/space-before-generic-bracket": [2, "never"],
    "flowtype/space-before-type-colon": [2, "never"],
    "flowtype/type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
    "flowtype/union-intersection-spacing": [2, "always"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: ["*.spec.js", "**/__mocks__/*.js"],
      rules: {
        "no-magic-numbers": [
          "error",
          {
            ignore: [-1, 0, 1, 2],
            ignoreArrayIndexes: true
          }
        ]
      }
    }
  ],
  plugins: ["prefer-object-spread", "flowtype"]
};
