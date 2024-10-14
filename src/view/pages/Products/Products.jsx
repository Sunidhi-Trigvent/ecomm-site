import React, { useState } from 'react';
import useProducts from "../../../hooks/useProducts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarComp from './sidebarcomp';
import ListView from './ListView';

function Products() {
  // Use the useProducts hook
  const { products } = useProducts();

  // Set the default value to 30 (which corresponds to "Price (a-z)")
  const [selectedValue, setSelectedValue] = useState(30);
  
  // Handle dropdown value change
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [activeButton, setActiveButton] = useState('grid'); // Default to grid view

  const handleButtonClick = (view) => {
    setActiveButton(view);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={2}></Grid>
        <Grid item size={{ sm: 2 }}>
          {/* Sidebar Grid Starts */}
          <SidebarComp />
          {/* Sidebar ends */}
        </Grid>
        <Grid item size={{ sm: 6 }} mt={1}>
          <Grid item size={{ sm: 12 }}>
            <Grid container spacing={2} alignItems={"center"}>
              {/* Icons Display */}
              <Grid item size={2}>
                <IconButton
                  onClick={() => handleButtonClick('grid')}
                  sx={{
                    bgcolor: activeButton === 'grid' ? 'black' : 'transparent',
                    color: activeButton === 'grid' ? 'white' : 'inherit',
                    '&:hover': {
                      bgcolor: activeButton === 'grid' ? 'black' : 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <GridViewIcon />
                </IconButton>

                <IconButton
                  onClick={() => handleButtonClick('menu')}
                  sx={{
                    bgcolor: activeButton === 'menu' ? 'black' : 'transparent',
                    color: activeButton === 'menu' ? 'white' : 'inherit',
                    '&:hover': {
                      bgcolor: activeButton === 'menu' ? 'black' : 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>

              {/* Products Counting */}
              <Grid item size={6}>
                <Typography width={200} sx={{ float: "right" }}>
                  Total Products
                </Typography>
              </Grid>

              {/* Select Box */}
              <Grid item size={4}>
                <Select
                  labelId="product-select-label"
                  id="product-select"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={10}>Price(lowest)</MenuItem>
                  <MenuItem value={20}>Price(highest)</MenuItem>
                  <MenuItem value={30}>Price(a-z)</MenuItem>
                  <MenuItem value={40}>Price(z-a)</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>

          {/* Conditionally render ListView or Grid View based on the button clicked */}
          {activeButton === 'menu' ? (
            <ListView />
          ) : (
            <Grid container mt={2} size={{ sm: 12 }} spacing={1}>
              {products?.map((product) => (
                <Grid
                  item
                  bgcolor={"WhiteSmoke"}
                  size={{ md: 4 }}
                  textAlign={"center"}
                  p={1}
                  borderRadius={2}
                  key={product.id} // Ensure you have a unique key for each item
                >
                  <Box
                    component={"img"}
                    src={product?.image}
                    alt={product?.name}
                    width={198}
                    height={150}
                  />
                  <Stack
                    direction={"row"}
                    width={200}
                    justifyContent={"space-between"}
                  >
                    <Typography fontSize={"16px"}>{product?.name}</Typography>
                    <Typography fontSize={"14px"}>${product?.price}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item size={2}></Grid>
      </Grid>
    </>
  );
}

export default Products;
