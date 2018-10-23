const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postCssPresetEnv = require('postcss-preset-env');
const glob = require('glob');
const chalk = require('chalk');

// Polyfill console.table
require('console.table');

const extractCSS = new ExtractTextPlugin({ filename: '[name].css' });
const isProduction = process.env.NODE_ENV === 'production';
const BUILD_DIR = 'build';

/**
 * Wrapper for console logging error messages in color
 * @param  {...any} args arguments to log
 * @returns {undefined}
 */
function error(...args) {
    args.unshift('\n');
    console.error(chalk.redBright(...args));
}

/**
 * Get entries for modifications & templates for webpack
 * Entries are always ending with ".source.js"
 * @returns {Object} webpack entry object
 * Returns webpack entry object
 * - Each Frosmo modification is an entry
 * - Each Frosmo template is an entry
 */
function getEntries() {
    // Get modification & template entrypoints
    let entryArray = glob.sync('./frosmo_content/+(modifications|templates)/prod/*/*.source.js');
    const entryObject = entryArray.reduce((acc, item) => {
        const name = item.replace('.source.js', '').replace('./', '');
        acc[name] = item;
        return acc;
    }, {});

    if (Object.keys(entryObject).length === 0) {
        error('Nothing to build');
        process.exit();
    }

    return entryObject;
}

module.exports = {
    // entries will be in ./frosmo_content/modifications/prod/XXX/NAME.source.js
    // output will be in ./frosmo_content/modifications/prod/XXX/NAME.js
    entry: getEntries(),
    output: {
        path: process.cwd(),
        filename: '[name].js',
    },
    // react, rectDOM & contentful are available in window
    externals: {
        'react': 'window.React',
        'reactDOM': 'window.ReactDOM',
        'contentful': 'window.contentful',
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        alias: {
            components: path.join(process.cwd(), 'components'),
        }
    },
    module: {
        rules: [
            {
                test: /src\/.+\.js/,
                use: 'imports-loader?site=>window.frosmo.site,easy=>window.frosmo.easy',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|_utils)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        plugins: [
                            'transform-class-properties',
                            ['transform-react-jsx'],

                        ],
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: [
                                        'last 2 versions',
                                        'ie > 10',
                                    ],
                                },
                                useBuiltIns: 'usage',
                            }],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                minimize: isProduction,
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    postCssPresetEnv(),
                                ],
                            },
                        },
                    ],
                }),
            },
        ],
    },
    devtool: !isProduction ? 'inline-source-map' : false,
    plugins: [
        extractCSS,
    ],
};
