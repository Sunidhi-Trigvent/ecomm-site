import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

const BasicList = () => {
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      name: "HOME",
      navLinks: "/",
    },
    {
      id: 2,
      name: "ABOUT",
      navLinks: "/about",
    },
    {
      id: 3,
      name: "PRODUCTS",
      navLinks: "/products",
    },
    {
      id: 4,
      name: "CONTACT",
      navLinks: "/contact",
    },
    {
      id: 5,
      name: "LOGIN", // Change to Logout if user is logged in
      navLinks: "/login", // Redirect to home or login page
    },
    {
      id: 6,
      name: "CART",
      navLinks: "/cart",
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 1,
      }}
    >
      <List sx={{ display: "flex", flexDirection: "row" }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ width: "auto" }}>
            <ListItemButton
              component={Link}
              to={item.navLinks}
              onClick={item.onClick ? item.onClick : null} // Attach click handler if exists
              sx={{
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              {item.id === 6 ? (
                <IconButton aria-label="cart" sx={{ color: "inherit" }}>
                  {item.icon}
                </IconButton>
              ) : (
                <ListItemText primary={item.name} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
        {/* {isLoggedIn && firstName && ( // Conditionally render the user's first name
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ListItemText primary={firstName} />
          </ListItem>
        )} */}
      </List>
    </Box>
  );
};

export default BasicList;
