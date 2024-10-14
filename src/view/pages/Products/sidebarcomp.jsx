import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useProducts from "../../../hooks/useProducts";

const SidebarComp = () => {
  // Use the useProducts hook
  const { products, isLoading } = useProducts();

  // Set the default value to 30 (which corresponds to "Price (a-z)")
  const [selectedValue, setSelectedValue] = useState(30);

  // Handle dropdown value change
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Extract unique categories using a Set if products is defined
  const uniqueCategories = products ? [...new Set(products.map((product) => product?.category))] : [];

  return (
    <>
      {/* Search Box */}
      <Stack gap={2} p={1}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
        {/* Search Box Ends */}

        <Typography fontWeight="bold">Category</Typography>
        {uniqueCategories.map((category, index) => (
          <Typography key={index} fontSize={"16px"}>{category}</Typography>
        ))}

        <Typography fontWeight="bold">Company</Typography>
        <Select
          labelId="product-select-label"
          id="product-select"
          value={selectedValue}
          onChange={handleSelectChange}
          fullWidth
          size="small"
        >
          <MenuItem value={10}>Apple</MenuItem>
          <MenuItem value={20}>Samsung</MenuItem>
          <MenuItem value={30}>All</MenuItem>
          <MenuItem value={40}>Asus</MenuItem>
        </Select>

        <Typography fontWeight="bold">Colors</Typography>
        <Typography>All</Typography>

        <Typography fontWeight="bold">Price</Typography>

        <Button variant="contained">Clear Filters</Button>
      </Stack>
    </>
  );
};

export default SidebarComp;
