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
  Button,
  CircularProgress,
  Grid,
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
import FormContainer from "../../../../components/FormContainer"; // Ensure the correct path
import MuiTextField from "../../../../components/TextFieldMui"; // Assuming you have this TextField component
import useUser from "../../../../hooks/useUser"; // Assuming this is the hook for user login
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "../../../../components/Modal";
import Login from "../../../pages/Login/login";
import Register from "../../../pages/Login/register";
import * as Yup from "yup";

export default function BoxBasic() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);
  const firstName = userInfo ? userInfo.firstName : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogin } = useUser(); // Assuming this handles the login
  const { userRegister } = useUser();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const open = Boolean(anchorEl);
  const { showModal, closeModal } = useModal();

  const handleBoxClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowLoginForm(false); // Close login form when menu is closed
  };

  //LOGIN FORM VALIDATION
  const loginValidationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
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

  const handleRegister = async (data) => {
    const { firstName, lastName, email, password } = data;
    try {
      const userData = await userRegister({
        firstName,
        lastName,
        email,
        password,
      });
      console.log("Registration successful:", userData);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  //VALIDATION FOR REGISTER FORM
  const registerValidationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
  });

  const handleRegisterClick = () => {
    // handleClose();
    // navigate("/register");
    showModal({
      title: "Register",
      content: <Register />,
      onSubmit: handleRegister,
      confirmText: "Register",
      cancelText: "Cancel",
      validation: registerValidationSchema,
    });
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    handleClose();
  };

  // Function to handle form submission
  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      const response = await userLogin({ email, password });
      const { token, data } = response;

      // Store token in local storage
      localStorage.setItem("token", token);
      // Dispatch user data to Redux store
      dispatch(setUser(data));

      // Redirect user to the dashboard or home page on successful login
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
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
        onClick={handleBoxClick}
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

        {!isLoggedIn && !showLoginForm && (
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
