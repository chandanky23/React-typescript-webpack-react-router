import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';

const Routes = () => {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

export default Routes;