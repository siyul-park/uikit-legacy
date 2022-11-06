const { BABEL_ENV } = process.env;

const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';
const isTest = BABEL_ENV !== undefined && BABEL_ENV === 'test';

module.exports = (api) => {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', isTest ? undefined : {
            loose: false,
            modules: isCommonJS ? 'commonjs' : false,
            targets: {
                esmodules: isESM ? true : undefined,
            },
        }],
        ['@babel/preset-react'],
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    ];
    const plugins = [
        ['@babel/transform-runtime'],
        ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ["@babel/plugin-proposal-private-methods", { loose: false }]
    ];

    return {
        presets,
        plugins,
    };
};
