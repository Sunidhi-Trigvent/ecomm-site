import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useCart from "../../../hooks/useCart"; // Import useCart to fetch cart data

export default function CartTable() {
  const { getFromCart, isUserLoading, isUserError } = useCart();

  if (isUserLoading) {
    return <p>Loading cart data...</p>;
  }

  if (isUserError) {
    return <p>Error loading cart data.</p>;
  }

  const rows = getFromCart?.cartItems || []; // Use cart data
  console.log(rows);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="30vh"
    >
      <TableContainer component={Paper} sx={{ width: "50%" }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">SubTotal</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row?.productId?._id} // Ensure to access productId's id
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.productId?.name}{" "}
                  {/* Use the product name from populated data */}
                </TableCell>
                <TableCell align="right">{row?.productId?.price}</TableCell>{" "}
                {/* Ensure to access price from productId */}
                <TableCell align="right">{row?.productQuantity}</TableCell>
                <TableCell align="right">
                  {row?.productId?.price * row?.productQuantity}
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    // onClick={() => handleRemoveFromCart(row.productId)}
                    sx={{ cursor: "pointer", color: "red" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
