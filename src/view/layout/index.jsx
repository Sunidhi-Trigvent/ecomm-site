import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

function Index() {
  return (
    <>
      <Stack justifyContent={"space-between"}>
        <Header />
        <Outlet />

        <Footer />
      </Stack>
    </>
  );
}

export default Index;
