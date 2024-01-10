import { useState } from "react";
import { useLocation } from "react-router";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Tooltip,
  ListItemIcon,
} from "@mui/material";

import { AccountCircle, ExitToApp, Person } from "@mui/icons-material";

export const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { state } = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    handleCloseUserMenu();
  };

  return (
    <AppBar component="nav" sx={{ borderTop: "5px solid #09c !important" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              style={{ width: "130px" }}
              src="src\assets\images\orica.png"
              alt="orica"
            />
          </Typography>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Optimizador de Distribución de Nitrato
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                <Typography>{state?.name}</Typography>
              </MenuItem>
              <MenuItem onClick={onLogout}>
                <ListItemIcon>
                  <ExitToApp fontSize="small" />
                </ListItemIcon>
                <Typography>Cerrar sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
