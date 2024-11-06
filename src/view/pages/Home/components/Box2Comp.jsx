import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function BoxParagraph() {
  return (
    <Box
      component="section"
      sx={{
        p: { xs: 2, lg: 2 },
        border: "1px dashed grey",
        // maxWidth: { xs: "30%", lg: "100%" },
      }}
    >
      <Typography textTransform={"uppercase"}>Welcome To</Typography>

      <Typography fontWeight={900} fontSize={30}>
        Amazon Store
      </Typography>

      <Typography>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        <br />
        atque temporibus veniam doloribus libero ad error omnis voluptates{" "}
        <br />
        animi! Suscipit sapiente.
      </Typography>

      <Button variant="contained">SHOP NOW</Button>
    </Box>
  );
}
