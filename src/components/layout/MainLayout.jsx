import PropTypes from "prop-types";
import { Box, Container, Toolbar } from "@mui/material";

import { NavBar } from "./NavBar";

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Container
        className="main"
        component="main"
        sx={{
          paddingLeft: "54px !important",
          paddingRight: "54px !important",
        }}
        maxWidth="xl"
      >
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};
