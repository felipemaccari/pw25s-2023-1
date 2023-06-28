import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { FloatingActionButton } from "../FloatingActionButton";
import { Box } from "@chakra-ui/react";

export const RootAuthComponent = () => {
  return (
    <Box width="100%">
      <Navbar />

      <Box p="5%">
        <Outlet />
      </Box>

      <FloatingActionButton />
    </Box>
  );
};
