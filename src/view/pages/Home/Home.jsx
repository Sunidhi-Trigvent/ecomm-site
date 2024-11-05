import React from "react";
import BoxParagraph from "./components/Box2Comp";
import BoxImg from "./components/BoxComp";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import FeatureComp from "./components/feature";
import FeatureTwo from "./components/icon_box";

function Home() {
  return (
    <>
      <Stack
        direction={{
          xs: "column", // For extra small devices
          md: "row", // For medium devices and above
        }}
        alignItems={
          {
            // xs: "flex-start", // Align items to the start (left) for extra small devices
            // md: "center", // Center align for medium devices and above
          }
        }
        mt={15}
        ml={34}
      >
        {/* Your Stack content */}
        <BoxParagraph />
        <BoxImg />
      </Stack>

      <Box sx={{ mt: 20, bgcolor: "lightgray" }}>
        <Typography sx={{ mt: 20, ml: 34, mb: 10 }}>
          <h3>Our Feature Services</h3>
        </Typography>
        <FeatureComp />
      </Box>

      <Box justifyContent={"center"}>
        <FeatureTwo />
      </Box>
    </>
  );
}

export default Home;
