import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Box
} from "@mui/material";

import { Button, Avatar } from "../../../../components/Wrappers";

// components
const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary"
};
export default function TableComponent({ data }) {
  let keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift();
  keys.pop(); // delete "id, colors" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(
          ({ id, name, email, product, price, date, city, status, color }) => (
            <TableRow key={id}>
              <TableCell className="fw-normal">
                <Box display={"flex"} alignItems={"center"}>
                  <Avatar style={{ marginRight: 20 }} color={color}>
                    {name[0]}
                  </Avatar>{" "}
                  {name}
                </Box>
              </TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{product}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{city}</TableCell>
              <TableCell>
                <Button
                  color={states[status.toLowerCase()]}
                  size="small"
                  className="px-2"
                  variant="contained"
                >
                  {status}
                </Button>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}
