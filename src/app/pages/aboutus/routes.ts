

// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// });
import AboutUs from './index'

const HomePageRoute = [
  {
    path: '/about',
    component: AboutUs,
    exact: true,
  }
];

export default HomePageRoute;