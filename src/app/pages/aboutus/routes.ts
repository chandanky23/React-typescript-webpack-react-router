

// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// });
import AboutUs from './index'
import { RouteConfig } from 'react-router-config';

const AboutPageRoute: RouteConfig[] = [
  {
    path: '/about',
    component: AboutUs,
    exact: true,
  }
];

export default AboutPageRoute;