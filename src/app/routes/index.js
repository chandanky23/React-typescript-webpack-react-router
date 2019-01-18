import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routesConfig';

const Routes = () => {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

export default Routes;