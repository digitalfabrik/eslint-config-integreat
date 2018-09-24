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
  rules: {
    "max-len": ["warn", { "code": 120 }],
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
    ]
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
  plugins: ["prefer-object-spread"]
};
