module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jquery': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'google',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'babel',
    'jquery',
  ],
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'semi': [
      'warn',
      'always',
    ],
    'max-len': [
      2,
      {
        'code': 120,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignorePattern': '=\\s*require\\s*\\(',
        'ignoreComments': true,
        'ignoreTemplateLiterals': true,
      },
    ],
    'babel/semi': 1,
    'no-invalid-this': 0,
    'babel/no-invalid-this': 1,
    'react/react-in-jsx-scope': 'off',
  },
  'settings': {
    'react': {
      'version': '15.3',
    },
  },
  'globals': {
    'React': 'writable',
  },
};
