import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectUserInfo, logout } from '../../../../redux/userSlice';

export default function LoginAvtar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);

  const handleClick = (event) => {
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
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0, mt: 0.5 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{isLoggedIn ? userInfo.firstName[0] : 'M'}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {isLoggedIn && (
          <>
            <Typography sx={{ p: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Hello, {userInfo.firstName}
            </Typography>
            <Divider />
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

        {isLoggedIn && (
          <MenuItem onClick={handleLogoutClick}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
