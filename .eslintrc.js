module.exports = {
  extends: [
    'next',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],

    // React 17+ uses automatic runtime
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // no prop-types with ts
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',

    // allow .tsx file extensions for jsx
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],

    // expect all components to be functional
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // remove missing file extension errors for ts and js files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.styles.ts', 'index.ts'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
}
