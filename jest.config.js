const { defaults } = require('jest-config');

module.exports = {
    preset: 'jest-expo',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },

    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};
