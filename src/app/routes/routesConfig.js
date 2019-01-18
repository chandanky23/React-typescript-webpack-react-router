import Home from '../pages/home/routes';
import AboutUs from '../pages/aboutus/routes';

const mainRoutes = [].concat(Home, AboutUs);
//TODO: Create a error page
const errorRoutes = [];

export default [].concat(mainRoutes, errorRoutes);