import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Box
} from "@material-ui/core";
import { Add as PlusIcon, Remove as MinusIcon } from "@material-ui/icons";
import useStyles from "./styles";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";

// structure
const rows = [
  {
    advantage: "Hundreds unique components",
    single: "plus",
    extended: "plus"
  },
  {
    advantage: "All pages",
    single: "plus",
    extended: "plus"
  },
  {
    advantage: "Free Updates",
    single: "3 months",
    extended: "6 months"
  },
  {
    advantage: "Paying users allowed",
    single: "no",
    extended: "plus"
  }
];

const Licences = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Typography variant={"h6"}>
              A license grants you a non-exclusive and non-transferable right to
              use and incorporate the item in your personal or commercial
              projects. If your end product including an item is going to be
              free to the end user then a Single License is what you need. An
              Extended License is required if the end user must pay to use the
              end product.
            </Typography>
            <Table aria-label="licences table" style={{ marginTop: 48 }}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Single</TableCell>
                  <TableCell>Extended</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.advantage}>
                    <TableCell component="th" scope="row">
                      {row.advantage}
                    </TableCell>
                    <TableCell>
                      {row.extended === "plus" ? (
                        <PlusIcon className={classes.successIcon} />
                      ) : (
                        <MinusIcon className={classes.failIcon} />
                      )}
                    </TableCell>
                    <TableCell>
                      {row.extended === "plus" ? (
                        <PlusIcon className={classes.successIcon} />
                      ) : (
                        <MinusIcon className={classes.failIcon} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box mt={6}>
              <Typography variant={"h6"} block>
                <Typography weight={"medium"} variant={"h6"}>
                  Single Application License
                </Typography>
                Your use of the item is restricted to a single application. You
                may use the item in work which you are creating for your own
                purposes or for your client. You must not incorporate the item
                in a work which is created for redistribution or resale by you
                or your client. The item may not be redistributed or resold. You
                may not charge users for using your application.
              </Typography>
            </Box>
            <Box mt={6}>
              <Typography variant={"h6"} block>
                <Typography weight={"medium"} variant={"h6"}>
                  Extended Application License
                </Typography>
                Your use of the item is restricted to a single application. You
                may use the item in work which you are creating for your own
                purposes or for your clients. You are licensed to use the Item
                to create one single End Product for yourself or for one client
                (a “single application”), and the End Product may be Sold and
                users may be charged for using it (e.g. you are building SAAS
                application).
              </Typography>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Licences;
