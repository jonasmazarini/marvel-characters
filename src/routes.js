import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profiles from "./pages/Profiles/Profiles";
import Characters from "./pages/Characters/Characters";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route path="/character/:characterId" component={Profiles} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
