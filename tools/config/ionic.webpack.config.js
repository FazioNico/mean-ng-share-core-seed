/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   23-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 26-05-2017
 */

 var webpack = require('../../mobile/node_modules/webpack');
 var config = require('../../mobile/node_modules/@ionic/app-scripts/config/webpack.config.js');
 var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);

 var TsConfigPathsPlugin = require('../../mobile/node_modules/awesome-typescript-loader').TsConfigPathsPlugin;


config.plugins.push(new webpack.EnvironmentPlugin(['IONIC_ENV', 'NODE_ENV']));
config.resolve.plugins = [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)];

module.exports = config;
