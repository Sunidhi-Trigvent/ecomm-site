import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, Stack, TextField, Typography } from "@mui/material";

const GridFooter = () => {
  return (
    <>
      <Grid container>
        <Grid item size={4}></Grid>
        <Grid item size={1}>
          <Typography sx={{ color: "white" }}>
            Amazon Store
            <br />
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item size={1}>
          <Typography sx={{ color: "white" }}>
            This is an ecommerce
            <br />
            store
          </Typography>

          <Stack spacing={1} mt={2}>
            {/* Adds vertical spacing between elements */}
            <TextField
              sx={{ backgroundColor: "white" }}
              id="outlined-basic"
              label="Your Mail"
              variant="outlined"
            />
            <Button variant="contained">Contact</Button>
          </Stack>
        </Grid>

        <Grid item size={1}></Grid>
        <Grid item size={1}></Grid>
        <Grid item size={4}></Grid>
      </Grid>
    </>
  );
};

export default GridFooter;
