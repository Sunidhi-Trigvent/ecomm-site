import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useProducts from "../../../hooks/useProducts";

const SidebarComp = ({ onCategoryClick }) => {
  // Use the useProducts hook
  const { products } = useProducts();

  // State to keep track of the active category
  const [activeCategory, setActiveCategory] = useState("All"); // Default to "All"

  // Handle category click and call the parent function
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set the clicked category as active
    onCategoryClick(category); // Notify parent component of the category change
  };

  // Extract unique categories using a Set if products are defined
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
        {/* Include "All" category */}
        <Typography
          key="all"
          fontSize={"16px"}
          onClick={() => handleCategoryClick("All")} // Handle click for "All"
          sx={{
            cursor: 'pointer',
            color: activeCategory === "All" ? 'pink' : 'black',
            borderBottom: activeCategory === "All" ? '2px solid pink' : 'none',
            width: 'fit-content', // Adjusts underline width to the text length
          }}
        >
          All
        </Typography>

        {/* Render unique categories */}
        {uniqueCategories.map((category, index) => (
          <Typography
            key={index}
            fontSize={"16px"}
            onClick={() => handleCategoryClick(category)}
            sx={{
              cursor: 'pointer',
              color: activeCategory === category ? 'pink' : 'black',
              borderBottom: activeCategory === category ? '2px solid pink' : 'none',
              width: 'fit-content', // Adjusts underline width to the text length
            }}
          >
            {category}
          </Typography>
        ))}

        <Typography fontWeight="bold">Company</Typography>
        <Select
          labelId="product-select-label"
          id="product-select"
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
