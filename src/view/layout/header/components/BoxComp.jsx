import * as React from "react";
import Box from "@mui/material/Box";

import BasicList from "./ListComp";

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      Amazon store
      <BasicList />
    </Box>
  );
}
