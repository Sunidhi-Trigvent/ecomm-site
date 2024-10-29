import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import {
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Stack,
} from "@mui/material";
import MuiTextField from "../../../components/TextFieldMui";
import FormContainer from "../../../components/FormContainer";

const Register = () => {
  // const navigate = useNavigate();
  const { userRegister, isLoading, isError } = useUser();

  // const handleRegister = async (data) => {
  //   const { firstName, lastName, email, password } = data;
  //   try {
  //     const userData = await userRegister({
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     });
  //     console.log("Registration successful:", userData);
  //     navigate("/login"); // Redirect to login page after successful registration
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //   }
  // };

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" component="h2" gutterBottom>
          Create an Account
        </Typography>
        {/* <FormContainer onSuccess={handleRegister}> */}
        <Stack spacing={2} width={400}>
          <MuiTextField
            name="firstName"
            label="First Name"
            required
            fullWidth
          />
          <MuiTextField name="lastName" label="Last Name" required fullWidth />

          <MuiTextField name="email" label="Email" required fullWidth />
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
              "Register"
            )}
          </Button>
        </Stack>
        {/* </FormContainer> */}
      </Stack>
    </Container>
  );
};

export default Register;
