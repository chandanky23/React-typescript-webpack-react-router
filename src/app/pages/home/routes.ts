

// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// });
import Home from './index'

const HomePageRoute = [
  {
    path: '/',
    component: Home,
    exact: true,
  }
];

export default HomePageRoute;