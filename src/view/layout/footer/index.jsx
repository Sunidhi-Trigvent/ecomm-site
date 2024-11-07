import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import GridFooter from "./GridFooter";
import GridFooter2 from "./GridFooter2";

function Footer() {
  return (
    <>
      {/* <div>Footer</div> */}
      <Box
        sx={{
          mt: "120px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#0A2F54",
            width: "100%",
            // height: "270px",
            position: "relative",
            marginBottom: "-14px",
          }}
        >
          {/* Secondary box positioned halfway above the main box */}
          <Box
            sx={{
              bgcolor: "lightgray",
              width: "60%", // Adjust the width to be less than the main box
              height: "110px",
              position: "absolute",
              // bottom: "50%", // Position it halfway above
              top: "-13%",
              left: "50%",
              transform: "translateX(-50%)", // Center horizontally
              borderRadius: "8px", // Optional: Add some border radius
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              p={3}

              // spacing={3}
            >
              <Typography>
                Ready to get started?
                <br />
                Talk to us today
              </Typography>
              <Button variant="contained">GET STARTED</Button>
            </Stack>
          </Box>
          <Stack sx={{ p: 8 }}>
            <GridFooter />
          </Stack>

          <Box sx={{}}>
            <Divider sx={{ borderColor: "white" }} />
          </Box>

          <Stack sx={{ mt: -1 }}>
            <GridFooter2 />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
