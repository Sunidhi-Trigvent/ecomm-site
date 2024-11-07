import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton, Stack, Typography } from "@mui/material";

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
      spacing={{ xs: 0, lg: -21 }}
    >
      <Box
        sx={{
          p: 3,
          border: "1px dashed grey",
          bgcolor: "lightgray",
          display: "flex", // Use flex to control layout
          flexDirection: "column", // Arrange items vertically
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
        }}
        height="12rem"
        width={{ xs: "8rem", lg: "12rem" }}
      >
        <TbTruckDelivery className="icon" />
        <Typography sx={{ fontSize: "13px" }}>
          Super Fast and Free Delivery
        </Typography>
      </Box>

      <Stack direction="column" spacing={2}>
        <Box
          sx={{ p: 3, border: "1px dashed grey", bgcolor: "lightgray" }}
          width={{ xs: "8rem", lg: "12rem" }}
          height="4rem"
        >
          <Stack direction="row" alignItems="center" spacing={1} mt={3}>
            <MdSecurity className="icon" />
            <Typography sx={{ fontSize: "13px" }}>
              Non-contact Shipping
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{ p: 3, border: "1px dashed grey", bgcolor: "lightgray" }}
          width={{ xs: "8rem", lg: "12rem" }}
          height="4rem"
        >
          <Stack direction="row" alignItems="center" spacing={1} mt={3}>
            <GiReceiveMoney className="icon" />
            <Typography sx={{ fontSize: "13px" }}>
              Money-Back Guaranteed
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Box
        sx={{
          p: 3,
          border: "1px dashed grey",
          bgcolor: "lightgray",
          width: { xs: "8rem", lg: "12rem" },
          height: "12rem",
          display: "flex", // Use flex to control layout
          flexDirection: "column", // Arrange items vertically
          // alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
        }}
      >
        <IconButton>
          <RiSecurePaymentLine className="icon" />
        </IconButton>

        <Typography sx={{ fontSize: "13px" }}>
          Super Secure Payment System
        </Typography>
      </Box>
    </Stack>
  );
}
