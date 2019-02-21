module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/src/**/*.steps.ts',
    '<rootDir>/src/**/*.spec.ts',
    '<rootDir>/src/**/*.spec.js',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
}
