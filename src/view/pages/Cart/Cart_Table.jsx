import * as React from "react";
import { useDispatch } from "react-redux";
import { setCartItemCount } from "../../../redux/cartSice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useCart from "../../../hooks/useCart";
import BasicList from "../../layout/header/components/ListComp";

export default function CartTable() {
  const dispatch = useDispatch(); // Initialize dispatch
  const { getFromCart, isUserLoading, isUserError } = useCart();

  // Calculate the total item count in the cart
  const rows = getFromCart?.cartItems || [];
  const cartItemCount = rows.reduce(
    (total, item) => total + item.productQuantity,
    0
  );

  // Dispatch cartItemCount to Redux only when cart data is loaded and there's no error
  React.useEffect(() => {
    if (!isUserLoading && !isUserError) {
      dispatch(setCartItemCount(cartItemCount));
    }
  }, [cartItemCount, isUserLoading, isUserError, dispatch]);

  if (isUserLoading) {
    return <p>Loading cart data...</p>;
  }

  if (isUserError) {
    return <p>Error loading cart data.</p>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
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
            {rows.map((row) => (
              <TableRow
                key={row.productId._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.productId?.name}
                </TableCell>
                <TableCell align="right">{row.productId?.price}</TableCell>
                <TableCell align="right">{row.productQuantity}</TableCell>
                <TableCell align="right">
                  {row.productId?.price * row.productQuantity}
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
