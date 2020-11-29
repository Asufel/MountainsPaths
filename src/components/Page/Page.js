import React from "react";

import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ExperiencePage from "../../pages/ExperiencePage";
import ContactPage from "../../pages/ContactPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </>
  );
};

export default Page;
