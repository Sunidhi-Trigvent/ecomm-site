import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useProducts from "../../../hooks/useProducts";
import { blue } from "@mui/material/colors";

const ListView = () => {
  // Use the useProducts hook
  const { products, isLoading } = useProducts();

  return (
    <Grid container spacing={2} mt={2}>
      {products?.map((product, index) => (
        <Grid container spacing={2} sx={{ border: '1px solid gray' }} >
          {/* Image Grid Item */}
          <Grid item size={{ md: 6 }} p={1}>
            <Box
              component="img"
              src={product?.image}
              alt={product?.name}
              width={198}
              height={150}
            />
          </Grid>

          {/* Single Grid Item wrapping all product details */}
          <Grid item size={{ md: 6 }} p={1}>
            <Typography fontSize="16px">{product?.name}</Typography>
            <Typography fontSize="14px">${product?.price}</Typography>
            <Typography fontSize="14px">{product?.description.slice(0,99)}</Typography>
            <Button variant="outlined">Read More</Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListView;
