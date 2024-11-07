import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

const GridFooter2 = () => {
  return (
    <>
      <Grid
        container
        sx={{ mt: 4 }}
        spacing={2}
        justifyContent="space-between"
        alignItems="flex-start" // Align items to the top
      >
        <Grid item xs={12} sm={3}>
          {/* Empty Space */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "white", fontSize: "12px" }}>
            @2024 All Rights Reserved
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "white", fontSize: "12px" }}>
            PRIVACY POICY
            <br /> TERMS & CONDITIONS
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* Empty Space */}
        </Grid>
      </Grid>
    </>
  );
};

export default GridFooter2;
