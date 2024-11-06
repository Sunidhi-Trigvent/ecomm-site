import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const GridFooter = () => {
  return (
    <>
      <Grid container>
        <Grid item size={2}></Grid>
        <Grid item size={2}>
          <Typography sx={{ color: "white" }}>
            Amazon Store
            <br />
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item size={2}>
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

        <Grid item size={2}>
          <Typography sx={{ color: "white" }}>Follow Us</Typography>
          <IconButton sx={{ color: "white" }}>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item size={2}>
          <Typography sx={{ color: "white" }}>
            Call Us
            <br /> +91 123456789
          </Typography>
        </Grid>
        <Grid item size={2}></Grid>
      </Grid>
    </>
  );
};

export default GridFooter;
