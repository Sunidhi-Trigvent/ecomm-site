import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, logout } from "../../../redux/userSlice";
import { clearCart } from "../../../redux/cartSice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";

export default function CartTable() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // // Clear cart and user data on logout
  // const handleLogoutClick = () => {
  //   dispatch(logout());
  //   dispatch(clearCart());
  // };

  useEffect(() => {
    // Log cart items to verify they are cleared on logout
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Total</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      {isLoggedIn && cartItems.length > 0 ? ( // Conditional render based on login state and items in cart
        <TableBody>
          {cartItems.map((row) => (
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
      ) : (
        <TableBody>
          <TableRow>
            <TableCell colSpan={5} align="center">
              {isLoggedIn ? "No items in cart" : "Please log in to view cart"}
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}
