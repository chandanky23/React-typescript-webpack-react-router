import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Routes from './routes'
declare let module: any

ReactDOM.render( <Routes />, document.getElementById('root')
);

if(module.hot)
  module.hot.accept()