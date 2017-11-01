module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true,
  },
  extends: 'airbnb-base',
  'rules': {
    'comma-dangle': [1, 'never'],
    'linebreak-style': 0,
    'eol-last': 0,
    'import/no-unresolved': 0
  }
}