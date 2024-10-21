import React, { useState } from 'react';
import useUser from '../../../hooks/useUser';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Grid,
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, isLoading, isError } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const userData = await userLogin({ email, password });
      console.log('Login successful:', userData);
      // Redirect user to the dashboard or home page on successful login
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
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
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2, width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
          </Box>
          {isError && (
            <Box sx={{ mt: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
        </Box>
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Typography variant="body2">
            If not registered?{' '}
            <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Create an account
            </Link>
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
