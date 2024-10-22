import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BasicList = ({ isLoggedIn, firstName }) => {
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
              sx={{
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              {item.icon ? (
                <IconButton aria-label="cart" sx={{ color: "inherit" }}>
                  {item.icon}
                </IconButton>
              ) : (
                <ListItemText primary={item.name} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BasicList;
