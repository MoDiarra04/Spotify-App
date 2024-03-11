import { cloneElement, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ArtistComponent from "./ArtistComponent";
import ArtistRevenue from "./ArtistRevenue";
import Faq from "./Faq";
import StickyFooter from "./Footer";
import Impressum from "./Impessum";
import MainPage from "./MainPage";
import PopularAristComponent from "./popularArtistCompnent";
import Top50Songs from "./Top50Songs";

const pages = [
  { name: "Beliebteste Artists", page: "most-popular-artists-100" },
  { name: "Artists mit höchsten Einkommen", page: "artist-revenue" },
  { name: "Meist gestreamten Songs", page: "most-streamed-songs" },
  { name: "FAQ", page: "faq" },
];

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

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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

  //change title depending on current site
  useEffect(() => {
    console.log(location);
    switch (location.pathname) {
      case "/":
        document.title = "ArtyStats - Suche nach einen Künstler";
        return;
      case "/faq":
        document.title = "ArtyStats - FAQ";
        return;
      case "/most-popular-artists-100":
        document.title = "ArtyStats - Beliebteste Artists";
        return;
      default:
        document.title = "ArtyStats";
        return;
    }
  }, [location]);

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
                ArtyStats
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
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Button
                        onClick={() => {
                          navigate("/" + page.page);
                        }}
                      >
                        <Typography textAlign="center" color="inherit">
                          {page.name}
                        </Typography>
                      </Button>
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
                ArtyStats
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={() => {
                      navigate("/" + page.page);
                      handleCloseNavMenu();
                    }}
                    sx={{ my: 2, mx: 1, display: "block" }}
                  >
                    {page.name}
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
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
          <Route
            path="/most-popular-artists-100"
            element={<PopularAristComponent />}
          />
          <Route path="/artist-revenue" element={<ArtistRevenue />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/artist/:id" element={<ArtistComponent />} />
          <Route path="/most-streamed-songs" element={<Top50Songs />} />
        </Routes>
        <StickyFooter />
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
