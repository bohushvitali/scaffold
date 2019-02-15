module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/*.steps.ts"
  ],
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ]
};