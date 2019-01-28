import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import RouteList from 'components/route-list';
import routes from './routerConfig';

import './index.scss';

ReactDOM.render(
    <Router>
        <RouteList routes={routes} />
    </Router>,
    document.getElementById('root')
);
