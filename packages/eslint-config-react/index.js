"use strict";

module.exports = {
  extends: ["standard-react"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/prop-types": "error",
    "react/jsx-tag-spacing": "error",
    "react/no-unused-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-typos": "error"
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: ["*.spec.js", "**/__mocks__/*.js"],
      rules: {
        "react/jsx-no-bind": [
          "error",
          {
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false
          }
        ]
      }
    }
  ],
  plugins: ["react"]
};
