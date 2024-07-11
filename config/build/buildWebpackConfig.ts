import { Configuration } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { isDev, mode, paths } = options;

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : false,
        entry: paths.entry,
        mode,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            clean: true,
            filename: '[name].[contenthash].js',
            path: paths.build,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
    };
}
