module.exports = {
    globals: {
        'ts-jest': {
            enableTsDiagnostics: true,
        }
    },
    testMatch: [
        '<rootDir>/tests/**/*Test.(js|ts)?(x)',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
    ],
    modulePaths: [
        '<rootDir>/node_modules',
        '<rootDir>/src',
    ]
};
