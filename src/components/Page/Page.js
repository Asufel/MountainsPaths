import React from "react";

import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ExperiencePage from "../../pages/ExperiencePage";
import ContactPage from "../../pages/ContactPage";
import ErrorPage from "../../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={HomePage} />
        <Route
          path={`${process.env.PUBLIC_URL}/experience`}
          component={ExperiencePage}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          component={ContactPage}
        />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
