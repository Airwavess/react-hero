module.exports = {
  roots: ["<rootDir>/src/__tests__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "/__tests__/.*.test.tsx?",
  collectCoverageFrom: [
    "src/**/*.{ts, tsx}",
    "!**/__tests__/**",
  ],
};
