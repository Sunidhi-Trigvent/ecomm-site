import * as React from "react";
import Box from "@mui/material/Box";

import BasicList from "./ListComp";
import { Stack, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserInfo } from "../../../../redux/userSlice"; // Adjust the path as needed

export default function BoxBasic() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);
  const firstName = userInfo ? userInfo.firstName : ""; // Access firstName from userInfo

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
        <BasicList isLoggedIn={isLoggedIn} firstName={firstName} />
      </Box>
    </Stack>
  );
}
