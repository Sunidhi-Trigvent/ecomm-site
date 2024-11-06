import * as React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function FeatureTwo() {
  return (
    <Stack
      direction={{
        xs: "column", // Direction is column for extra-small screens
        lg: "row", // Direction is row for medium screens and above
      }}
      // alignItems={"center"}
      alignItems={{ xs: "left", lg: "center" }}
      justifyContent={"space-evenly"}
      mt={8}
    >
      <Box
        sx={{ p: 3, border: "1px dashed grey", bgcolor: "white" }}
        height="7rem"
        width={{ xs: "8rem", lg: "12rem" }}
      >
        <TbTruckDelivery className="icon" />
      </Box>

      <Box
        sx={{ p: 3, border: "1px dashed grey", bgcolor: "white" }}
        width={{ xs: "8rem", lg: "12rem" }}
        height="7rem"
      >
        <MdSecurity className="icon" />
      </Box>

      <Box
        sx={{ p: 3, border: "1px dashed grey", bgcolor: "white" }}
        width={{ xs: "8rem", lg: "12rem" }}
        height="7rem"
      >
        <GiReceiveMoney className="icon" />
      </Box>
      <Box
        sx={{ p: 3, border: "1px dashed grey", bgcolor: "white" }}
        width={{ xs: "8rem", lg: "12rem" }}
        height="7rem"
      >
        <RiSecurePaymentLine className="icon" />
      </Box>
    </Stack>
  );
}
