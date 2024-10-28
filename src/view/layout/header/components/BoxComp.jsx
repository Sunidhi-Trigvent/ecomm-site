import * as React from "react";
import Box from "@mui/material/Box";
import BasicList from "./ListComp";
import {
  Stack,
  Typography,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserInfo,
  logout,
} from "../../../../redux/userSlice"; // Adjust the path as needed
import LoginAvatar from "./LoginAvatar";
import SettingsIcon from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

export default function BoxBasic() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);
  const firstName = userInfo ? userInfo.firstName : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleBoxClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    handleClose();
    navigate("/login");
  };

  const handleRegisterClick = () => {
    handleClose();
    navigate("/register");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="lightgray"
      px={2}
      py={1}
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
          display: "flex",
          alignItems: "center",
          bgcolor: "#F4A9F4",
          "&:hover": {
            bgcolor: "#EE82EE",
          },
          cursor: "pointer",
        }}
        onClick={handleBoxClick} // Make box clickable
      >
        <Box sx={{ ml: 1 }}>
          <LoginAvatar />
        </Box>

        <SettingsIcon sx={{ ml: 1 }} />
      </Box>

      {/* Menu for settings and logout */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        {isLoggedIn && (
          <>
            <Typography sx={{ p: 2, fontWeight: "bold", textAlign: "center" }}>
              Hello, {firstName}
            </Typography>
            <Divider />
            <MenuItem onClick={handleLogoutClick}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        )}

        {!isLoggedIn && (
          <>
            <MenuItem onClick={handleLoginClick}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
            <MenuItem onClick={handleRegisterClick}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Register
            </MenuItem>
          </>
        )}
      </Menu>
    </Stack>
  );
}
