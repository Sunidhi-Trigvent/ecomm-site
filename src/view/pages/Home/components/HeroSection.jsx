import React from "react";

const HeroSection = () => {
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
        <BoxParagraph />
        <BoxImg />
      </Stack>
    </>
  );
};

export default HeroSection;
