const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'abatech',
    projectName: 'boilerplate',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new Dotenv({
        path: '.env',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },
    module: {
      rules: [
        // test: /\.(c|sc|sa)ss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { test: /\.m?js/, resolve: { fullySpecified: false } },

        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' }, // to inject the result into the DOM as a style block
            { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: `${process.env.REACT_APP_NAME}__[local]__[hash:base64:5]`,
                },
              },
            }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
            { loader: 'sass-loader' }, // to convert SASS to CSS
            // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
          ],
        },

        ,
      ],
    },
  });
};
