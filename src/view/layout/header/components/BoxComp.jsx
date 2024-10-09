import * as React from "react";
import Box from "@mui/material/Box";

import BasicList from "./ListComp";
import { Stack, Typography } from "@mui/material";

export default function BoxBasic() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      bgcolor={"lightgray"}
      alignItems={"center"}
    >
      <Stack
        component="section"
        // width={150}
        sx={{ border: "2px black solid" }}
        direction={"row"}
        alignItems={"center"}
        ml={2}
      >
        <Typography
          bgcolor={"violet"}
          border={"2px solid white"}
          p={1}
          fontWeight={900}
          color="white"
          textTransform={"uppercase"}
        >
          Amazon
        </Typography>
        <Typography p={1} fontWeight={900} textTransform={"uppercase"}>
          store
        </Typography>
      </Stack>

      {/* header list-item component */}
      <Box>
        <BasicList />
      </Box>
    </Stack>
  );
}
