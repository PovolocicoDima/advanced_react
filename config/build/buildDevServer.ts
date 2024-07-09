import { Configuration as DevConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevConfiguration {
    return {
        port: options.port,
        historyApiFallback: true,
    };
}
