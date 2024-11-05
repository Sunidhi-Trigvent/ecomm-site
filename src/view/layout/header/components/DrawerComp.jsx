import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton, List, ListItem, Box, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BasicList from "./ListComp"; // Import BasicList
import LoginAvatar from "./LoginAvatar"; // Import LoginAvatar
import BasicListResp from "./ListCompResp";

const DrawerComp = ({
  isLoggedIn,
  firstName,
  onLoginClick,
  onLogoutClick,
  onRegisterClick,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // console.log("DrawerComp re-rendered");

  return (
    <>
      {/* Drawer */}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {/* BasicList Menu Items */}
          <ListItem>
            <BasicListResp isLoggedIn={isLoggedIn} firstName={firstName} />
          </ListItem>

          <Divider />

          {/* Login Avatar and Actions */}
          <ListItem>
            <Box
              component="section"
              sx={{
                display: "flex",
                flexDirection: "column", // Make items in column
                alignItems: "flex-start", // Align items to the start
                bgcolor: "#F4A9F4",
                "&:hover": { bgcolor: "#EE82EE" },
                cursor: "pointer",
                padding: 1,
                borderRadius: 2,
                width: "100%",
              }}
              onClick={() => setOpenDrawer(false)}
            >
              <LoginAvatar />
              <Box sx={{ textAlign: "left", marginTop: 1 }}>
                {isLoggedIn ? (
                  <>
                    <Box sx={{ fontWeight: "bold" }}>Hello, {firstName}</Box>
                    <Box onClick={onLogoutClick} sx={{ cursor: "pointer" }}>
                      Logout
                    </Box>
                  </>
                ) : (
                  <>
                    <Box onClick={onLoginClick} sx={{ cursor: "pointer" }}>
                      Login
                    </Box>
                    <Box onClick={onRegisterClick} sx={{ cursor: "pointer" }}>
                      Register
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </ListItem>
        </List>
      </Drawer>

      {/* Hamburger Icon */}
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
