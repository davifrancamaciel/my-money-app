//9
import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import AuthOrApp from './authOrApp';
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    // <Router history={hashHistory}>
    //     <Route path='/' component={Dashboard}></Route>
    //     <Route path='/billingCycles' component={BillingCycle}></Route>
    //     <Redirect from='*' to='/'></Redirect>
    // </Router>

    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
    // <Router history={hashHistory}>
    //     <Route path='/' component={AuthOrApp}>
    //         <IndexRoute component={Dashboard} />
    //         <Route path='billingCycles' component={BillingCycle} />
    //     </Route>
    //     <Redirect from='*' to='/'></Redirect>
    // </Router>
)

