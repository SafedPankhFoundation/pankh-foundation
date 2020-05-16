import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn";

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/signin" component={SignIn} />
            </Switch>
        </Router>
    )
}

export default Navigation;