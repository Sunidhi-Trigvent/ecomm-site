import * as React from "react";
import Box from "@mui/material/Box";
import BasicList from "./ListComp";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Stack,
  Typography,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Button,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserInfo,
  logout,
  setUser,
} from "../../../../redux/userSlice"; // Adjust the path as needed
import LoginAvatar from "./LoginAvatar";
import SettingsIcon from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../components/Modal";
import Login from "../../../pages/Login/login";
import Register from "../../../pages/Login/register";
import * as Yup from "yup";
import useUser from "../../../../hooks/useUser"; // Assuming this is the hook for user login

export default function BoxBasic() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);
  const firstName = userInfo ? userInfo.firstName : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogin, userRegister } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { showModal, closeModal } = useModal();

  const handleBoxClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginValidationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLoginClick = () => {
    showModal({
      title: "Login",
      content: <Login />,
      onSubmit: handleLogin,
      confirmText: "Sign-In",
      cancelText: "Cancel",
      validation: loginValidationSchema,
    });
  };

  const handleRegisterClick = () => {
    showModal({
      title: "Register",
      content: <Register />,
      onSubmit: handleRegister,
      confirmText: "Register",
      cancelText: "Cancel",
      validation: loginValidationSchema,
    });
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    handleClose();
  };

  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const response = await userLogin({ email, password });
      const { token, data } = response;
      localStorage.setItem("token", token);
      dispatch(setUser(data));
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegister = async (data) => {
    const { firstName, lastName, email, password } = data;
    try {
      await userRegister({ firstName, lastName, email, password });
      navigate("/login"); // Redirect to login page after successful registration
      closeModal();
    } catch (error) {
      console.error("Registration error:", error);
    }
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
      {/* reponsiveness-mobile */}
      <Box sx={{ display: { xs: "flex", lg: "none" }, alignItems: "center" }}>
        <MenuIcon />
      </Box>
       
       {/* Amzon logo */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          border: "2px black solid",
          ml: { xs: 1, md: 2 },
          mr: { xs: 1, md: 2 },
          "& > *": {
            padding: { xs: "4px", md: "8px" },
          },
        }}
      >
        <Typography
          bgcolor="violet"
          border="2px solid white"
          fontWeight={900}
          color="white"
          textTransform="uppercase"
        >
          Amazon
        </Typography>
        <Typography fontWeight={900} textTransform="uppercase">
          store
        </Typography>
      </Stack>

        {/* ListComp */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <BasicList isLoggedIn={isLoggedIn} firstName={firstName} />
      </Box>


       {/* Login Avatar */}
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
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        {isLoggedIn ? (
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
        ) : (
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
