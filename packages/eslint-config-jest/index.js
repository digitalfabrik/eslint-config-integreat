"use strict";

module.exports = {
  env: {
    jest: true
  },
  rules: {
    "jest/no-disabled-tests": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-to-be-null": "error",
    "jest/valid-expect": "error",
    "jest/valid-describe": "error",
    "jest/no-test-prefixes": "error",
    "jest/consistent-test-it": "error",
  },
  plugins: ["jest"]
};
