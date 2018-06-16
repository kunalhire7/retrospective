import React from 'react';
import { Route } from 'react-router-dom';
import { paths } from '../src/common/constants';
import { ThemeProvider } from 'styled-components';

import Dashboard from './dashboard/containers/dashboard';
import CreateDashboardForm from './home/components/home';

/* eslint-disable */
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/global.scss');
/* eslint-enable */

const routes = () => (
    <ThemeProvider theme={theme}>
        <div>
            <Route path={paths.HOME} component={CreateDashboardForm}/>
            <Route path={paths.DASHBOARD} component={Dashboard}/>
        </div>
    </ThemeProvider>
);

export default routes;
