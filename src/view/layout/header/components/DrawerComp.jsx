import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  List,
  ListItem,
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BasicListResp from "./ListCompResp";
import LoginAvatar from "./LoginAvatar";
import SettingsIcon from "@mui/icons-material/Settings"; // Import SettingsIcon
import { PersonAdd, Logout } from "@mui/icons-material"; // Import Logout
// Ensure to import other icons you use as well

const DrawerComp = ({
  isLoggedIn,
  firstName,
  onLoginClick,
  onLogoutClick,
  onRegisterClick,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // State for the anchor element
  const openMenu = Boolean(anchorEl); // Determine if the menu is open

  const handleBoxClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element for the menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

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
              width={90}
              height={45}
              borderRadius="25%"
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#F4A9F4",
                "&:hover": { bgcolor: "#EE82EE" },
                cursor: "pointer",
              }}
              onClick={handleBoxClick}
            >
              <Box sx={{ ml: 1 }}>
                <LoginAvatar />
              </Box>
              <SettingsIcon sx={{ ml: 1 }} />
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
            >
              {isLoggedIn ? (
                <>
                  <Typography
                    sx={{ p: 2, fontWeight: "bold", textAlign: "center" }}
                  >
                    Hello, {firstName}
                  </Typography>
                  <Divider />
                  <MenuItem onClick={onLogoutClick}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={onLoginClick}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Login
                  </MenuItem>
                  <MenuItem onClick={onRegisterClick}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Register
                  </MenuItem>
                </>
              )}
            </Menu>
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
