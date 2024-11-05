import { Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import DrawerComp from "./DrawerComp";

const RespHeader = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          {/* Amzon logo */}
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              border: "2px black solid",
              ml: { xs: 1, md: 2 },
              mr: { xs: 1, md: 2 },
              "& > *": {
                padding: { xs: "4px", md: "8px" },
              },
            }}
          >
            <Typography
              bgcolor="violet"
              border="2px solid white"
              fontWeight={900}
              color="white"
              textTransform="uppercase"
            >
              Amazon
            </Typography>
            <Typography fontWeight={900} textTransform="uppercase">
              store
            </Typography>
          </Stack>
          {/* Amzon logo end */}

          {/* Drawer Comp */}
          <DrawerComp />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default RespHeader;
