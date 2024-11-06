import React from "react";
import BoxParagraph from "./components/Box2Comp";
import BoxImg from "./components/BoxComp";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import FeatureComp from "./components/feature";
import FeatureTwo from "./components/icon_box";

function Home() {
  const data = {
    name: "Amazon Store",
  };
  return (
    <>
      <Stack
        direction={{
          xs: "column", // For extra small devices
          lg: "row", // For medium devices and above
        }}
        justifyContent={"space-between"}
        alignItems={{
          xs: "left", // Align items to the start (left) for extra small devices
          lg: "center", // Center align for medium devices and above
        }}
        mt={15}
        ml={{ xs: 0.2, lg: 34 }}
      >
        <BoxParagraph myData={data} />
        <BoxImg />
      </Stack>

      <Box
        sx={{
          mt: 20,
          bgcolor: {
            xs: "lightgray", // Background color for extra small screens
            sm: "lightgray", // Background color for small screens and above
          },
        }}
      >
        <Typography
          sx={{
            mt: 20,
            ml: { xs: 0, lg: 34 },
            mb: 10,
            fontSize: { xs: "0.8rem", lg: "1rem" },
          }}
        >
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
