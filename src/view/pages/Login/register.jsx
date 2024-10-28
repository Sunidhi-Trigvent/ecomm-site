import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import {
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import MuiTextField from "../../../components/TextFieldMui";

const Register = () => {
  const navigate = useNavigate();
  const { userRegister, isLoading, isError } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleSubmit, control } = useForm();

  const handleRegister = async (data) => {
    setError("");
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
      setError("Registration failed. Please try again.");
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
          Create an Account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleRegister)}
          sx={{ mt: 2, width: "100%" }}
        >
          <MuiTextField
            name="firstName"
            label="First Name"
            type="text"
            control={control}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            fullWidth
          />
          <MuiTextField
            name="lastName"
            label="Last Name"
            type="text"
            control={control}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            fullWidth
          />
          <MuiTextField
            name="email"
            label="Email"
            type="email"
            control={control}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <MuiTextField
            name="password"
            label="Password"
            type="password"
            control={control}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Box sx={{ mt: 2 }}>
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
          </Box>
          {isError && (
            <Box sx={{ mt: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
