import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StickyFooter from "./Footer";
import MainPage from "./MainPage";
import Impressum from "./Impessum";

import spotifyLogo from'./spotifyLogo.jpg';

const pages = ["Beliebteste Artists", "Artists mit höchsten Einkommen", "FAQ", "Über uns"];

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={{ backgroundColor: "white", color: "#1DB954" }}
          position="fixed"
        >
          <Box
            sx={{
              px: 4,
            }}
          >
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                PlatzhalterName
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="inherit">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                PlatzhalterName
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx: 1, display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Button
                variant="outlined"
                size="large"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                Loslegen
              </Button>
            </Toolbar>
          </Box>
        </AppBar>
      </ElevationScroll>
      <Box component="main" sx={{ flexGrow: 1, pt: 20, color: "inherit" }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/"  element={<MainPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/top100" element={<Impressum />} />
          </Routes>
        </BrowserRouter>
        <StickyFooter />
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
