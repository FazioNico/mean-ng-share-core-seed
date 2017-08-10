/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   23-05-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-08-2017
*/

//  var webpack = require('../../mobile/node_modules/webpack');
//  var config = require('../../mobile/node_modules/@ionic/app-scripts/config/webpack.config.js');
//
//  var TsConfigPathsPlugin = require('../../mobile/node_modules/awesome-typescript-loader').TsConfigPathsPlugin;
//
//
// config.plugins.push(new webpack.EnvironmentPlugin(['IONIC_ENV', 'NODE_ENV']));
// config.resolve.plugins = [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)];
//
// module.exports = config;

var path = require('path');
var webpack = require('../../mobile/node_modules/webpack');
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
var ModuleConcatPlugin = require('../../mobile/node_modules/webpack/lib/optimize/ModuleConcatenationPlugin');
var config = require('../../mobile/node_modules/@ionic/app-scripts/config/webpack.config.js')

var TsConfigPathsPlugin = require('../../mobile/node_modules/awesome-typescript-loader').TsConfigPathsPlugin;

/**
* [prodPlugins]
* Removed cause it mek trouble on `$ ionic serve --prod`
*/
var prodPlugins = [];
if (process.env.IONIC_ENV === 'prod') {
  prodPlugins.push(new ModuleConcatPlugin());
}

config.plugins = [
  new webpack.EnvironmentPlugin(['IONIC_ENV', 'NODE_ENV']),
  ionicWebpackFactory.getIonicEnvironmentPlugin(),
  ionicWebpackFactory.getCommonChunksPlugin(),
] //.concat(prodPlugins);
// or other synthax:
// config.plugins.push(new webpack.EnvironmentPlugin(['IONIC_ENV']))
config.resolve.plugins = [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)];

module.exports = config
