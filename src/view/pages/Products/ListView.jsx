import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const ListView = ({ products }) => { // Accept products as a prop
  return (
    <Grid container spacing={2} mt={2}>
      {products?.map((product) => (
        <Grid container spacing={2} sx={{ border: '1px solid gray' }} key={product.id}> {/* Add a key here */}
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
            <Typography fontSize="14px">{product?.description.slice(0, 99)}</Typography>
            <Button variant="outlined">Read More</Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListView;
