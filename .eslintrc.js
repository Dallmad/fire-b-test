module.exports = {
  env: {
    jest: true,
    es2021: true,
    browser: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier', 'react-hooks', '@typescript-eslint'],
  overrides: [
    {
      files: [
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '**/*.spec.js',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.tsx',
      ],
    },
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
      },
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'no-console': 'off',
    'no-shadow': 'off',
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'self'],
      },
    ],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 'ignore',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      { handlers: ['onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'] },
    ],
    'jsx-a11y/click-events-have-key-events': ['warn'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
