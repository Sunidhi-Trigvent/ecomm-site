import React from "react";
import BoxParagraph from "./components/Box2Comp";
import BoxImg from "./components/BoxComp";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { Directions } from "@mui/icons-material";
import FeatureComp from "./components/feature";
import FeatureTwo from "./components/icon_box";

function Home() {
  return (
    <>
      <Stack
        direction={"row"}
        // justifyContent={"space-between"}

        alignItems={"center"}
        mt={15}
        ml={34}
      >
        <BoxParagraph />
        <BoxImg />
      </Stack>

      <Box sx={{ mt: 20, bgcolor: "lightgray" }}>
        <Typography sx={{ mt: 20, ml: 34, mb: 10 }}>
          <h3>Our Feature Services</h3>
        </Typography>

        <FeatureComp />
      </Box>

      <Box>
        <FeatureTwo />
      </Box>
    </>
  );
}

export default Home;
