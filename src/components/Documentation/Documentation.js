import React from "react";
import {
  Switch,
  Route,
  useParams,
  Redirect,
  useRouteMatch
} from "react-router-dom";

//pages
import Overview from "./pages/overview";

//components
import Header from "./components/Header";

const Documentation = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <Header />
      <Switch>
        <Route path={path} exact>
          <Redirect to={`${path}/getting-started/overview`} />
        </Route>
        <Route path={`${path}/getting-started/overview`}>
          <Overview />
        </Route>
      </Switch>
    </div>
  );
};

export default Documentation;
