import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
    // must be last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath.about,
    },
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath.main,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFound />,
        path: RoutePath.not_found,
    },
};
