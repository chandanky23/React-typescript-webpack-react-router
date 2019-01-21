import Home from '../pages/home/routes';
import AboutUs from '../pages/aboutus/routes';
import { RouteConfig } from 'react-router-config';



const mainRoutes: RouteConfig[] = [...Home,... AboutUs ]
//TODO: Create a error page
const errorRoutes: RouteConfig[] = [];

const allRoutes: RouteConfig[] = [...mainRoutes, ...errorRoutes]

export default allRoutes;