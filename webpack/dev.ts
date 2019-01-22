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
    // https://github.com/webpack/webpack-dev-server/issues/143#issuecomment-139705511
    watchOptions: {
      poll: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));

  // Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', () => {
    const cacheModules = Object.keys(require.cache)
      .filter((id) => /client/.test(id) || /ssr/.test(id));

    if (cacheModules.length > 1) {
      console.info('===> Client\'s cache has been removed.', `Find ${cacheModules.length}`);
      cacheModules.forEach((id) => delete require.cache[id]);
    }
  });
}

export default devServer;