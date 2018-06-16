import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import configureStore from "./store";
import Routes from "./routes";

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const AdminApp = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);
ReactDOM.render(AdminApp, document.getElementById("root"));
