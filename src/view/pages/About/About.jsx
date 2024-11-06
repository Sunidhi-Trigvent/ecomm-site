import { Stack } from "@mui/material";
import React from "react";
import BoxParagraph from "../Home/components/Box2Comp";
import BoxImg from "../Home/components/BoxComp";

export const About = () => {
  const data = {
    name: "Ecommerce Store",
  };

  return (
    <>
      <Stack
        direction={{
          xs: "column", // For extra small devices
          lg: "row", // For medium devices and above
        }}
        // justifyContent={"space-between"}

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
    </>
  );
};
export default About;
