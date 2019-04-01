import React from 'react';
import { Table, TableRow, TableHead, TableBody, TableCell, Button } from '@material-ui/core';


const states = {
  sent: 'primary',
  pending: 'default',
  declined: 'secondary',
};

const TableComponent = ({ data }) => {
  const keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key
  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map((key) => <TableCell>{key}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map(({ name, email, product, price, date, city, status }) => (
            <TableRow>
              <TableCell className="pl-3 fw-normal">{name}</TableCell>
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
          ))
        }
      </TableBody>
    </Table>
  );
}

export default TableComponent;
