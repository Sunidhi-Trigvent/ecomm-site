import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import the cart icon
import IconButton from "@mui/material/IconButton"; // Import IconButton for the icon

export default function BasicList() {
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
      name: "CART",
      navLinks: "/cart",
      icon: <ShoppingCartIcon />, // Add the icon for the cart
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
              {item.id === 5 ? ( // Check if the item is CART to render the icon
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
}
