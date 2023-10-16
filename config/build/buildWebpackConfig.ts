import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig({
  paths, mode, port, isDev,
}: BuildOptions): webpack.Configuration {
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths.html, isDev),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths.src),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
}
