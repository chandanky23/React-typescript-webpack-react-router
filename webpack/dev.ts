import * as express from 'express';
import webpackConfig from './webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'

/**
 * webpack dev server
 * @param  {express.Application} app express app
 */
export function devServer (app: express.Application) {

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: false,
    watchOptions: {
      poll: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

export default devServer;