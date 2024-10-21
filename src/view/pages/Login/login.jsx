import React, { useState } from 'react';
import useUser from '../../../hooks/useUser';
import { useNavigate, Link } from 'react-router-dom';
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, isLoading, isError } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setError(''); // Clear any previous errors

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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading} className="login-button">
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {isError && <p className="error-message">{error}</p>}
      </form>
      <div className="register-link">
        <p>If not registered? <Link to="/register">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
