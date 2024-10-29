import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import MuiTextField from "../../../components/TextFieldMui";

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // minHeight="100vh"
      >
        {/* <Typography variant="h4" component="h2" gutterBottom>
          Login
        </Typography> */}
        {/* <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ mt: 2, width: "100%" }}
        > */}
        <Stack spacing={2}>
          <MuiTextField name="email" label="Email" fullWidth />
          <MuiTextField
            name="password"
            label="Password"
            type="password"
            required
            fullWidth
          />

          {/* <Button type="submit" variant="contained" color="primary" fullWidth> */}
          {/* {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )} */}
          {/* </Button> */}
        </Stack>
        {/* <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Typography variant="body2">
            If not registered?{" "}
            {/* <Link
              to="/register"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Create an account
            </Link>
          </Typography>
        </Grid> */}
      </Box>
    </Container>
  );
};

export default Login;
