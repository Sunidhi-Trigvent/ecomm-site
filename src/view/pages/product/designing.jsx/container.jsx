import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Container_main({ productDetail }) {
  console.log(productDetail);

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Box sx={{ width: "100%", ml: 19 }}>
        <Grid container direction="column" spacing={2}>
          {productDetail?.image?.map((image, index) => (
            <Grid item key={index}>
              <img
                src={image?.url}
                alt={image?.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
