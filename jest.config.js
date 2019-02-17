module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.steps.ts', '**/*.spec.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
}
