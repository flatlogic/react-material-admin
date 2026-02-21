import React from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
["Joe James", "Example Inc.", "Yonkers", "NY"],
["John Walsh", "Example Inc.", "Hartford", "CT"],
["Bob Herm", "Example Inc.", "Tampa", "FL"],
["James Houston", "Example Inc.", "Dallas", "TX"],
["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
["Meral Elias", "Example Inc.", "Hartford", "CT"],
["Deep Pau", "Example Inc.", "Yonkers", "NY"],
["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
["Avram Sylva", "Example Inc.", "Hartford", "CT"],
["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
["Gaston Festus", "Example Inc.", "Tampa", "FL"]];


const columns = [
{ field: "name", headerName: "Name", flex: 1 },
{ field: "company", headerName: "Company", flex: 1 },
{ field: "city", headerName: "City", flex: 1 },
{ field: "state", headerName: "State", flex: 0.6 }];


const rows = datatableData.map((row, index) => ({
  id: index + 1,
  name: row[0],
  company: row[1],
  city: row[2],
  state: row[3]
}));

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4}>
        <Grid size={12}>
          <div style={{ height: 460, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: { paginationModel: { pageSize: 5, page: 0 } }
              }}
              disableRowSelectionOnClick />
            
          </div>
        </Grid>
        <Grid size={12}>
          <Widget
            title="Material-UI Table"
            noBodyPadding
            bodyClass={classes.tableWrapper}>
            
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>);

}