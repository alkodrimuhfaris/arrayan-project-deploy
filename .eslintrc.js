module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        bracketSpacing: false,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    indent: 'off',
    'global-require': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-curly-newline': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'react/destructuring-assignment': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-nested-ternary': 'off',
    'prefer-destructuring': 'off',
    semi: 'warn',
  },
};
