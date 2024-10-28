import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../../redux/userSlice";
import useUser from "../../../hooks/useUser";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2 as Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MuiTextField from "../../../components/TextFieldMui";
import FormContainer from "../../../components/FormContainer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogin, isLoading, isError } = useUser();

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
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Login
        </Typography>
        {/* <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ mt: 2, width: "100%" }}
        > */}
        <FormContainer onSuccess={handleLogin}>
          <Stack spacing={2}>
            <MuiTextField name="email" label="Email" fullWidth />
            <MuiTextField
              name="password"
              label="Password"
              type="password"
              required
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </Button>
          </Stack>
        </FormContainer>
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Typography variant="body2">
            If not registered?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Create an account
            </Link>
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
