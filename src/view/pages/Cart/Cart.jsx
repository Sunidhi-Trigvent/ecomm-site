import React from "react";
import CartTable from "./Cart_Table";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/cartSice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("dispatch..");
    dispatch(clearCart()); // Clear the cart when button is clicked
  };

  return (
    <>
      <CartTable />
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2} // Add padding for spacing
        py={1} // Add padding for spacing
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#EE82EE",
            color: "white",
            ml: 40,
          }}
        >
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF7043",
            color: "white",
            mr: 40,
          }}
          onClick={handleClearCart}
        >
          Clear Cart
        </Button>
      </Stack>

      <Box
        sx={{
          bgcolor: "#f5f5f5", // Light grey background color
          padding: 2, // Add some padding
          borderRadius: 1, // Rounded corners
          width: "250px", // Reduced width
          position: "relative", // Necessary for absolute positioning
          right: 0, // Align to the right
          marginLeft: "auto", // Pushes the box to the right
          mt: 4,
          mr: 24,
        }}
      >
        <Typography variant="body1">SubTotal:</Typography>
        <Typography variant="body1">Shipping Fee:</Typography>
        <Divider />
        <Typography variant="body1">Order Total:</Typography>
      </Box>
    </>
  );
};

export default Cart;
