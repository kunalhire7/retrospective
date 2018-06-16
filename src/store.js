import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import dashboardReducer from './dashboard/dashboardReducer'

export default function configureStore(initialState, browserHistory) {
    const middleware = routerMiddleware(browserHistory);

    const rootReducer = combineReducers({
        dashboard: dashboardReducer
    });

    const composeEnhancers = composeWithDevTools({});

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, middleware))
    );
}
