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
      <Grid
        container
        sx={{ mt: 4 }}
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item size={2}>
          {/* Empty Space */}
        </Grid>
        <Grid item size={{ sm: 2 }}>
          <Typography sx={{ color: "white" }}>
            Amazon Store
            <br />
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item size={{ sm: 2 }}>
          <Typography sx={{ color: "white" }}>
            This is an ecommerce
            <br />
            store
          </Typography>

          <Stack spacing={1} mt={2}>
            <TextField
              sx={{ backgroundColor: "white" }}
              id="outlined-basic"
              label="Your Mail"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="medium"
              sx={{
                padding: "4px 12px",
                fontSize: "0.75rem",
                width: "30px",
              }}
            >
              Contact
            </Button>
          </Stack>
        </Grid>

        <Grid item size={{ sm: 2 }}>
          <Typography sx={{ color: "white" }}>Follow Us</Typography>
          <IconButton sx={{ color: "white" }}>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item size={{ sm: 2 }}>
          <Typography sx={{ color: "white" }}>
            Call Us
            <br /> +91 123456789
          </Typography>
        </Grid>
        <Grid item size={2}>
          {/* Empty Space */}
        </Grid>
      </Grid>
    </>
  );
};

export default GridFooter;
