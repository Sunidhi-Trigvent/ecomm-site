import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <div>Footer</div>
      <Box
        sx={{
          bgcolor: "#0A2F54",
          width: "100%",
          height: "180px",
          position: "relative",
        }}
      >
        {/* Secondary box positioned halfway above the main box */}
        <Box
          sx={{
            bgcolor: "lightgray",
            width: "80%", // Adjust the width to be less than the main box
            height: "90px",
            position: "absolute",
            bottom: "50%", // Position it halfway above
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally
            borderRadius: "8px", // Optional: Add some border radius
          }}
        ></Box>
      </Box>
    </>
  );
}

export default Footer;
