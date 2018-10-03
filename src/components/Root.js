import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Application from "./Application";
import Main from "./Main";

import PropTypes from "prop-types";
import React from "react";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Application} />
    </Router>
  </Provider>
);

export default Root;
