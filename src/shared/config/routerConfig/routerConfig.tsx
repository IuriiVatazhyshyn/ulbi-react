import { AboutPageAsync } from 'pages/about-page';
import { MainPageAsync } from 'pages/main-page';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MAIN]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
};
