import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ExperiencePage from "../../pages/ExperiencePage";
import ContactPage from "../../pages/ContactPage";

const Page = () => {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default Page;
