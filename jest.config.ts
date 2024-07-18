import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/tests/**/*.spec.tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  rootDir: ".",
};

export default createJestConfig(config);
