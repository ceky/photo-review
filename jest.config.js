module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/src/mock/CSSStub.js',
  },
};
