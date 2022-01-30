module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:jsdoc/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        augments: {
          message: '@extends is to be used over @augments.',
          replacement: 'extends',
        },
      },
    },
  },
  overrides: [
    {
      files: ['*.test.js'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.d.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-var': 'off',
        'no-redeclare': 'off',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['data/migration/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    curly: ['error'],
    'no-console': ['error'],
    'no-prototype-builtins': ['warn'], // temporary set to warn
    'require-atomic-updates': ['off'],
    'guard-for-in': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-multi-assign': ['error'],
    eqeqeq: ['error'],
    'prefer-rest-params': ['error'],
    'no-negated-condition': ['error'],
    'prefer-object-spread': ['warn'],
    'prefer-destructuring': ['warn'],
    'no-bitwise': ['warn'],
    'no-nested-ternary': ['warn'],
    'no-unneeded-ternary': ['warn'],
    'no-shadow': ['warn'],
    'no-else-return': ['warn'],
    radix: ['warn'],
    'prefer-promise-reject-errors': ['error'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'object-shorthand': ['warn'],

    // nodejs rules
    'callback-return': ['error', ['done']],
    'global-require': ['error'],
    'no-sync': ['error'],

    // force extra lines around if, else, for, while, switch, return etc
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'while', 'switch', 'return'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'for', 'while', 'switch', 'return'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['if', 'for', 'while', 'switch', 'return'],
        next: 'break',
      },
    ],
    'no-invalid-this': ['error'],

    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/check-param-names': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/valid-types': 'off',
    'jsdoc/tag-lines': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/check-property-names': 'off',
    'jsdoc/check-tag-names': [
      'warn',
      {
        definedTags: ['swagger'],
      },
    ],
  },
};
