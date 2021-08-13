module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-props-no-spreading': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/control-has-associated-label': 0
  }
}
