import React from "react";
import { Box, Grid, TextField as Input } from "@material-ui/core";

//components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

const MyComponent = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget title="New product" disableWidgetMenu>
            <Box display={"flex"} flexDirection="column">
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Title</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Subtitle</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Price</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                    value={0.01}
                    type={"number"}
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Discount</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                    value={0}
                    type={"number"}
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Description</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Code</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Hashtag</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Technology</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                    placeholder={"Add Tag"}
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={300}>
                  <Typography variant={"h6"}>Rating</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Input
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                    type={"number"}
                    value={5}
                  />
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  variant={"contained"}
                  color={"success"}
                  style={{ marginRight: 8 }}
                >
                  Save
                </Button>
                <Button variant={"contained"}>Back</Button>
              </Box>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default MyComponent;
