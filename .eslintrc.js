module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['react', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    },
    env: {
        browser: true,
        node: true
    }
};
