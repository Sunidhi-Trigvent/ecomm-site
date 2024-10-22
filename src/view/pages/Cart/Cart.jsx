import React from "react";
import CartTable from "./Cart_Table";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Cart = () => {
  return (
    <>
      <CartTable />
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        // bgcolor="lightgray"
      
        px={2} // Add padding for spacing
        py={1} // Add padding for spacing
      >
        <Button variant="contained" sx={{
            bgcolor: "#EE82EE",
            color: "white", 
            ml:14
          }}>Continue Shopping</Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF7043",
            color: "white", 
            mr:14
          }}
        >
          Clear Cart
        </Button>
      </Stack>

      <Box 
      sx={{ 
        bgcolor: '#f5f5f5', // Light grey background color
        padding: 2, // Optional: Add some padding
        borderRadius: 1 // Optional: Rounded corners
      }}
    >
      <Typography variant="body1">SubTotal:</Typography>
      <Typography variant="body1">Shipping Fee:</Typography>
      <Divider/>
      <Typography variant="body1">Order Total:</Typography>
    </Box>
    </>
  );
};

export default Cart;
