import airbnbBase from 'eslint-config-airbnb-base';
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  airbnbBase,
  {
    plugins: ['jest'],
    extends: ['plugin:jest/all'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    },
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
