import React from "react";
import useProducts from "../../../hooks/useProducts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
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
      {/* Top bar of Products Page starts*/}
      <Stack direction="row" spacing={1} mt={2}>
        {/* Search Box */}
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </Box>
        {/* Search Box Ends*/}

        {/* Icons Display */}
        <GridViewIcon></GridViewIcon>
        <MenuIcon></MenuIcon>

        {/* Products Counting */}
        <Typography>Total Products</Typography>

        {/* Select Box */}
        <Box sx={{ padding: 2 }}>
          <FormControl sx={{ Width: 12 }}>
            {/* <InputLabel id="product-select-label">Select Value</InputLabel> */}
            <Select
              labelId="product-select-label"
              id="product-select"
              value={selectedValue}
              label="Select Value"
              onChange={handleSelectChange}
            >
              <MenuItem value={30}>Price(lowest)</MenuItem>
              <MenuItem value={30}>Price(highest)</MenuItem>
              <MenuItem value={10}>Price(a-z)</MenuItem>
              <MenuItem value={20}>Price(z-a)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Select Box Ends  */}
      </Stack>
      {/* Top bar of Products Page Ends*/}

      {/* Box to display all products */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {products?.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product?.id}>
              <Box
                textAlign="center"
                border={1}
                borderColor="grey.300"
                borderRadius={2}
                p={2}
              >
                <img
                  src={product?.image}
                  alt={product?.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Box mt={1}>
                  <Typography variant="h6">{product?.name}</Typography>
                  <Typography variant="body2">${product?.price}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Products;
