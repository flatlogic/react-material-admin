import React from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import Code from "../../../Code";

const Pages = props => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Widget disableWidgetMenu>
                        <Typography variant={"h6"}>Sidebar</Typography>
                        <Typography style={{marginBottom: 16}}>
                            Sidebar contains <Code inline>structure</Code> props. That means you can describe your own Sidebar structure in <Code inline>SidebarStructure.js</Code> file.
                        </Typography>
                        <Typography style={{marginBottom: 8}}>
                            Code:
                        </Typography>
                        <Code inline row>
                            {`<Sidebar structure={sidebarStructure} />`}
                        </Code>
                    </Widget>
                </Grid>
            </Grid>
        </>
    );
};

export default withRouter(Pages);
