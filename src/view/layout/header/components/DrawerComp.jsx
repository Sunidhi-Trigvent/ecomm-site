import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemIcon>
            <ListItemText>Homeee</ListItemText>
          </ListItemIcon>
        </List>
      </Drawer>

      {/* Hamburger icon */}
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
