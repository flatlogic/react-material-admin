import React from "react";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  TableHead,
  IconButton,
} from "@material-ui/core";
import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage as LastPageIcon,
  Star as StarIcon,
} from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";
import { useTheme } from "@material-ui/styles";
import PropTypes from "prop-types";
import useStyles from "./styles";
import { rows } from "./Products";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button, Input } from "../../components/Wrappers";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function EcommercePage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <PageTitle title="Typography" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="List of Products" disableWidgetMenu>
            <Box display={"flex"} flexDirection="column">
              <Box display={"flex"} flexDirection={"column"} my={1}>
                <Button variant={"contained"} color={"success"}>
                  Create Product
                </Button>
              </Box>
              <Box display={"flex"} flexDirection="column" my={1}>
                <Input label="Search query" variant="outlined" />
              </Box>
              <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow className={classes.tableFooter}>
                      <TableCell>ID</TableCell>
                      <TableCell>IMG</TableCell>
                      <TableCell>TITLE</TableCell>
                      <TableCell>SUBTITLE</TableCell>
                      <TableCell>PRICE</TableCell>
                      <TableCell>RATING</TableCell>
                      <TableCell>API</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map(row => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <img
                              src={row.img}
                              alt={row.title}
                              style={{ width: 100 }}
                            />
                          </TableCell>
                          <TableCell>
                            <Link to={`/app/ecommerce/product/${row.id}`}>
                              {row.title}
                            </Link>
                          </TableCell>
                          <TableCell>{row.subtitle}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <TableCell>
                            <Typography
                              style={{ color: yellow[700] }}
                              display={"inline"}
                            >
                              {row.rating}
                            </Typography>{" "}
                            <StarIcon
                              style={{ color: yellow[700], marginTop: -5 }}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              color="success"
                              size="small"
                              className="mr-2"
                              variant="contained"
                            >
                              Edit
                            </Button>
                            <Button
                              color="secondary"
                              size="small"
                              variant="contained"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 48 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow className={classes.tableFooter}>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={7}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: { "aria-label": "rows per page" },
                          native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
