import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Box display="flex" alignItems="center">
      <Button onClick={setDecrease}>
        <RemoveIcon />
      </Button>
      <Typography variant="h6" sx={{ mx: 2 }}>
        {amount}
      </Typography>
      <Button onClick={setIncrease}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default CartAmountToggle;
