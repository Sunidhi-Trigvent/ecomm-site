import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxImg() {
  return (
    <Box
      component={"img"}
      sx={{ p: 2, border: "1px dashed grey" }}
      width={"21rem"}
      height={"13rem"}
      src={require("../img/hero.jpg")}
    />
  );
}
