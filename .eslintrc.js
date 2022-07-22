module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommend',
    'plugin:@typescript-eslint/recommend',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType:'module'
  },
  plugins: [
    '@typescript-eslint','import','prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-console': 'off',
    'import/order':[
      'error',
      {
        'newlines-between': 'never',
        group:  [
          ['builtin','external'],
          ['internal','parent','sibling','index']
        ]
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser':['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.ts',
      }
    }
  }
};
