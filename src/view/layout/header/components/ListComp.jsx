import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";

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
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        bgcolor: "background.paper",
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
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
