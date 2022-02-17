module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.(ts|tsx)?$',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/mock/SVGStub.js',
  },
  testEnvironment: 'jsdom',
};
