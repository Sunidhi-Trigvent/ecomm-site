import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxImg() {
  return (
    <Box
      component={"img"}
      sx={{ p: 2, border: "1px dashed grey" }}
      width={{ xs: "7rem", lg: "21rem" }}
      height={{ xs: "7rem", lg: "13rem" }}
      src={require("../img/hero.jpg")}
    />
  );
}
