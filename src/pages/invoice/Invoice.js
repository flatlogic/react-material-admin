import React from "react";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import {
  Print as PrintIcon,
  ArrowForward as RightArrowIcon
} from "@mui/icons-material";
import useStyles from "./styles";

//images
import logo from "../../images/invoice/flatlogic.jpeg";

//components
import { Typography, Link, Button } from "../../components/Wrappers";
import Widget from "../../components/Widget";

const rows = [
  {
    id: 1,
    item: "Brand-new 27 monitor",
    desc: "2,560x1,440-pixel (WQHD) resolution supported!",
    quantity: 2,
    price: 700,
    total: 1400.0
  },
  {
    id: 2,
    item: "Domain: okendoken.com",
    desc: "6-month registration",
    quantity: 1,
    price: 10.99,
    total: 21.88
  },
  {
    id: 3,
    item: "Atlas Shrugged",
    desc: "Novel by Ayn Rand, first published in 1957 in the United States",
    quantity: 5,
    price: 35,
    total: 175.0
  },
  {
    id: 4,
    item: "New Song by Dr. Pre",
    desc: "Lyrics: praesent blandit augue non sapien ornare imperdiet",
    quantity: 1,
    price: 2,
    total: 2.0
  }
];

const windowPrint = () => {
  window.print();
};

const Invoice = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Box display="flex" justifyContent="space-between" mb={3}>
              <img
                src={logo}
                alt="Flatlogic"
                style={{ maxHeight: 100, borderRadius: 10, marginRight: 24 }}
              />
              <Box>
                <Typography weight="bold" display="inline">
                  #9.45613 /
                </Typography>{" "}
                <Typography display="inline">17 May 2014</Typography>
                <Typography>
                  Some Invoice number description or whatever
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <Box>
                <Typography variant="h4" style={{ marginBottom: 16 }}>
                  Company Information
                </Typography>
                <Typography variant="h6">Flatlogic LLC</Typography>
                <Typography weight="bold">2 Infinite Loop</Typography>
                <Typography>Minsk, Belarus 220004</Typography>
                <Typography>088.253.5345</Typography>
                <Typography>
                  <abbr title="Work Email">e-mail:</abbr>
                  <Link color="primary"> email@example.com</Link>
                </Typography>
                <Typography>
                  <abbr title="Work Phone">phone:</abbr> (012) 345-678-901
                </Typography>
                <Typography>
                  <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                </Typography>
              </Box>
              <Box
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-end"
              >
                <Typography variant="h4" style={{ marginBottom: 16 }}>
                  Client Information
                </Typography>
                <Typography variant="h6">Veronica Niasvizhskaja</Typography>
                <Typography display="inline" weight="bold" block>
                  Consultant
                  <Typography display="inline">
                    {" "}
                    at <Link color="primary">Allspana</Link>
                  </Typography>
                </Typography>
                <Typography>
                  <abbr title="Work Email">e-mail:</abbr>{" "}
                  <Link color="primary"> maryna@allspana.by</Link>
                </Typography>
                <Typography>
                  <abbr title="Work Phone">phone:</abbr> (012) 345-678-901
                </Typography>
                <Typography>
                  <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                </Typography>
                <Typography weight="bold">Note:</Typography>
                <Typography variant="body2">
                  Some nights I stay up cashing in my bad luck. Some nights I
                  call it a draw
                </Typography>
              </Box>
              <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow className={classes.tableFooter}>
                      <TableCell>#</TableCell>
                      <TableCell>ITEM</TableCell>
                      <TableCell>DESCRIPTION</TableCell>
                      <TableCell>QUANTITY</TableCell>
                      <TableCell>PRICE PER UNIT</TableCell>
                      <TableCell>TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(c => (
                      <TableRow key={c.id}>
                        <TableCell>{c.id}</TableCell>
                        <TableCell>{c.item}</TableCell>
                        <TableCell>{c.desc}</TableCell>
                        <TableCell>{c.quantity}</TableCell>
                        <TableCell>{c.price}</TableCell>
                        <TableCell>{c.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                mt={3}
                flexWrap="wrap"
              >
                <Typography block style={{ marginBottom: 16 }}>
                  <Typography weight="bold" display="inline">
                    Note:
                  </Typography>
                  Thank you for your business. Keep in mind, sometimes bad
                  things happen. But it's just sometimes.
                </Typography>
                <Box display="flex" flexDirection="column">
                  <Box display="flex" justifyContent="space-between">
                    <Box mr={2} mb={2}>
                      Subtotal
                    </Box>
                    <Box>1,598.88</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box mr={2} mb={2}>
                      Tax(10%)
                    </Box>
                    <Box>159.89</Box>
                  </Box>
                  <Typography weight="bold" block>
                    <Box display="flex" justifyContent="space-between">
                      <Box mr={2} mb={2}>
                        Total
                      </Box>
                      <Box>1,758.77</Box>
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              mt={3}
            >
              <Typography block style={{ marginBottom: 16 }}>
                Marketing Consultant
                <Typography weight="bold">Bob Smith</Typography>{" "}
              </Typography>
              <Box display="flex">
                <Button
                  variant="contained"
                  style={{ marginRight: 8 }}
                  aria-label="Print"
                  onClick={windowPrint}
                >
                  <PrintIcon className={classes.iconButton} />
                  Print
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  aria-label="Proceed"
                >
                  <RightArrowIcon className={classes.iconButton} />
                  Proceed with Payment
                </Button>
              </Box>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Invoice;
