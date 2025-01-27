import React from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

//components
import Widget from "../../../Widget";
import { Typography, Button } from "../../../Wrappers";
import Code from "../../../Code";

const Pages = props => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Typography variant={"h6"}>Auth</Typography>
            <Typography style={{ marginBottom: 16 }}>
              User authorization is build via{" "}
              <Code row inline>
                React Hooks and React Router Dom
              </Code>{" "}
              to redirect. We're using <Code inline row>{`localStorage`}</Code>{" "}
              to keep that the user is login. When a user is coming in{" "}
              <Code row inline>
                token
              </Code>{" "}
              value is recorded with the number key. You can see a logic
              specified in <Code row inline>{`/src/components/App.js`}</Code>
            </Typography>
            <Code>{`
  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
            `}</Code>
            <Typography variant={"h6"}>Dashboard</Typography>
            <Typography>
              We have build a dynamic dashboard that visualized via{" "}
              <Code row inline>
                Recharts and Apexcharts
              </Code>
              . You can see a couple of tables that can help you to collect
              user's info, such as Support Requests, Payments, New
              registrations.{" "}
            </Typography>
            <Typography style={{ margin: "16px 0" }}>
              You can switch between timesteps to view the info all the time.
            </Typography>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => props.history.push("/app/dashboard")}
            >
              Demo
            </Button>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(Pages);
