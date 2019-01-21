

// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// });
import Home from './index'
import { RouteConfig } from 'react-router-config';

const HomePageRoute: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  }
];

export default HomePageRoute;