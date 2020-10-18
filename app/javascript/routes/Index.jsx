import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import TestMe from "../components/TestMe";
import Results from "../components/Results";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/testme" exact component={TestMe} />
            <Route path="/results" exact component={Results} />
            {/*<Route path="/leaderboard" exact component={Leaderboard} />*/}
        </Switch>
    </Router>
);