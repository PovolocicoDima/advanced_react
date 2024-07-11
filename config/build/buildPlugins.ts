import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ isDev, paths }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            chunkFilename: 'css/[name].[contenthash:8].css',
            filename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        // new ReactRefreshWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
