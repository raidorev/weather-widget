/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:unicorn/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          fn: true,
          args: true,
          props: true,
          env: true,
        },
      },
    ],
  },
}
