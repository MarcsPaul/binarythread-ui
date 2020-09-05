/**react dependencies */
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Auth/login";
import Dashboard from "../Dashboard/dashboard";

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            path={`/dashboard`}
            exact
            render={(props) => <Dashboard {...props} />}
          />
          <Route exact path={`/`} render={(props) => <Login {...props} />} />
          <Redirect to={"/"} />
        </Switch>
      </>
    );
  }
}
