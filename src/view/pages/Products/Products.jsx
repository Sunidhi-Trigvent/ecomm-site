import React from "react";
import useProducts from "../../../hooks/useProducts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { IconButton, Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";

function Products() {
  // Use the useProducts hook
  const { products, isLoading } = useProducts();

  // State to manage the selected value from the dropdown
  const [selectedValue, setSelectedValue] = React.useState("");

  // Handle dropdown value change
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={2}></Grid>
        <Grid item size={{ sm: 2 }}>
          {/* Sidebar Grid Starts */}
          {/* Sidebar starts*/}
          {/* Search Box */}
          <Stack gap={2} p={1}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
            />
            {/* Search Box Ends*/}
            <Typography>Catergory</Typography>
          </Stack>
        </Grid>
        {/* Sidebar ends*/}
        {/* Sidebar Grid ends */}

        <Grid item size={{ sm: 6 }} mt={1}>
          {/* Topbar+Center Grid starts */}
          {/* <Grid container border={"1px solid blue"} mt={2}> */}
          <Grid item size={{ sm: 12 }}>
            {/* Top bar of Products Page starts*/}
            <Grid container spacing={2} alignItems={"center"}>
              {/* Icons Display */}
              <Grid item size={2}>
                <IconButton>
                  <GridViewIcon />
                </IconButton>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </Grid>

              {/* Products Counting */}
              <Grid item size={6} justifyContent={"center"}>
                <Typography width={200} sx={{ float: "right" }}>
                  Total Products
                </Typography>
              </Grid>

              {/* Select Box */}
              {/* <Box sx={{ padding: 2 }}   > */}
              {/* <InputLabel id="product-select-label">Select Value</InputLabel> */}
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
              {/* </Box> */}
              {/* Select Box Ends  */}
            </Grid>
          </Grid>
          <Grid container mt={2} size={{ sm: 12 }} spacing={1}>
            {/* Box to display all products */}
            {/* <Grid container spacing={2} border={"1px solid"}> */}
            {products?.map((product) => (
              <Grid
                bgcolor={"WhiteSmoke"}
                size={{ md: 4 }}
                textAlign={"center"}
                p={1}
                borderRadius={2}
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
            {/* </Grid> */}
            {/* </Grid> */}
          </Grid>
          {/* Top bar of Products Page Ends*/}

          {/* Center Box starts */}
          {/* Center Box ends */}

          {/* Topbar+Center Grid ends */}
        </Grid>
        <Grid item size={2}></Grid>
      </Grid>
    </>
  );
}

export default Products;
