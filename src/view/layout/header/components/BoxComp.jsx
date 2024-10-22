import * as React from "react";
import Box from "@mui/material/Box";
import BasicList from "./ListComp";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserInfo } from "../../../../redux/userSlice"; // Adjust the path as needed
import LoginAvtar from "./LoginAvatar";
import SettingsIcon from "@mui/icons-material/Settings";

export default function BoxBasic() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);
  const firstName = userInfo ? userInfo.firstName : ""; // Access firstName from userInfo

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="lightgray"
      px={2} // Add padding for spacing
      py={1} // Add padding for spacing
    >
      {/* Logo section */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{ border: "2px black solid" }}
      >
        <Typography
          bgcolor="violet"
          border="2px solid white"
          p={1}
          fontWeight={900}
          color="white"
          textTransform="uppercase"
        >
          Amazon
        </Typography>
        <Typography p={1} fontWeight={900} textTransform="uppercase">
          store
        </Typography>
      </Stack>

      {/* Header list-item component */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <BasicList isLoggedIn={isLoggedIn} firstName={firstName} />
      </Box>

      {/* Avatar and settings section */}
      <Box
        component="section"
        width={90}
        height={45}
        borderRadius="25%"
        sx={{
          // border: "2px black solid",
          display: "flex",
          alignItems: "center",
          bgcolor: "#F4A9F4", // Original background color
          "&:hover": {
            bgcolor: "#EE82EE", // Lighter violet color on hover
          },
        }}
      >
        <LoginAvtar  />
        <SettingsIcon sx={{ ml: 1 }} />
      </Box>
    </Stack>
  );
}
