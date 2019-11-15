import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TableHead,
  IconButton,
  Checkbox,
  TableSortLabel,
  Tooltip,
  Toolbar,
  LinearProgress,
  Box
} from "@material-ui/core";

// Material UI icons
import {
  Star as StarIcon,
  Delete as DeleteIcon,
  FilterList as FilterListIcon
} from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";
import { lighten, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import cn from "classnames";

// components
import Widget from "../../components/Widget";
import Dot from "../../components/Sidebar/components/Dot";
import { Typography, Button } from "../../components/Wrappers";
import { rows } from "./Products";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID"
  },
  { id: "image", numeric: true, disablePadding: false, label: "Image" },
  { id: "title", numeric: true, disablePadding: false, label: "Title" },
  { id: "subtitle", numeric: true, disablePadding: false, label: "Subtitle" },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  { id: "rating", numeric: true, disablePadding: false, label: "Rating" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "actions", numeric: true, disablePadding: false, label: "Actions" }
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all rows" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "right"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={cn(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Products
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function EcommercePage() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("price");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget
            title="List of Products"
            subtitle={"321 total"}
            disableWidgetMenu
            searchField
          >
            <Button
              variant={"contained"}
              component={Link}
              to={"/app/ecommerce/management/create"}
              color={"success"}
            >
              Create Product
            </Button>
            <EnhancedTableToolbar numSelected={selected.length} />
            <div className={classes.tableWrapper}>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={event => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.id}
                          </TableCell>
                          <TableCell>
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
                          <TableCell>${row.price}</TableCell>
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
                            <Box display={"flex"}>
                              <Box mr={1} alignSelf={"center"}>
                                <Dot color={row.color} size={"medium"} />
                              </Box>
                              <Box mr={1}>
                                <Typography variant={"subtitle2"}>
                                  {row.status}
                                </Typography>
                                <LinearProgress
                                  variant="determinate"
                                  value={+row.process.split("%")[0]}
                                />
                              </Box>
                              <Box display={"flex"} alignSelf={"flex-end"}>
                                <Typography
                                  color={"text"}
                                  colorBrightness={"hint"}
                                >
                                  {row.process}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Button
                              color="success"
                              size="small"
                              className={"mr-2"}
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
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "previous page"
              }}
              nextIconButtonProps={{
                "aria-label": "next page"
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
