module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // 'import/no-extraneous-dependencies': 'off',
    // 'no-console': 'off',
    // 'import/prefer-default-export': 'off',
    // 'no-underscore-dangle': 'off',
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    // 'no-empty-function': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/unbound-method': 'off',
    // '@typescript-eslint/no-unsafe-call': 'off',
    // '@typescript-eslint/no-unsafe-member-access': 'off',
    // 'no-prototype-builtins': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
  parser: '@typescript-eslint/parser',
  root: true,
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   project: './tsconfig.json',
  //   tsconfigRootDir: __dirname,
  //   createDefaultProgram: true,
  // },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
