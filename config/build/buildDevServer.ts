import { Configuration as DevConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevConfiguration {
    return {
        historyApiFallback: true,
        port: options.port,
    };
}
