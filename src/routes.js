import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Home,
  ContactComponent,
  Error404Page,
  BlogComponent,
  BlogDetailsComponent,
  PortfolioComponent,
} from "./components/pages";
// import { Home } from "./components/pages";
const Routes = () => {
  return (
    <Fragment>
      <Switch>
        {/* GENERAL ROUTE - NONE PROTECTED #########################################*/}

        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Helmet>
                <title>Home✨</title>
              </Helmet>
              <Home />
            </Fragment>
          )}
        />

        {/* GENERAL ROUTE - NONE PROTECTED ############################################*/}
        <Route path="/contact">
          <Helmet>
            <title>Contact☎️</title>
          </Helmet>
          <ContactComponent />
        </Route>

        <Route path="/blogs">
          <Helmet>
            <title>Blog✍️</title>
          </Helmet>
          <BlogComponent />
        </Route>

        <Route path="/blog/:id">
          <Helmet>
            <title>Blog✍️</title>
          </Helmet>
          <BlogDetailsComponent />
        </Route>

        <Route path="/portfolio">
          <Helmet>
            <title>Portofolio📚</title>
          </Helmet>
          <PortfolioComponent />
        </Route>
        {/* PROTECTED ROUTES START HERE #############################################*/}

        {/* PROTECTED ROUTES START HERE #############################################*/}

        {/* 404 ERROR ROUTE ########################################################*/}
        <Route path="*">
          <Helmet>
            <title>404</title>
          </Helmet>
          <Error404Page />
        </Route>
        {/* 404 ERROR ROUTE #######################################################*/}
      </Switch>
    </Fragment>
  );
};

export default Routes;
