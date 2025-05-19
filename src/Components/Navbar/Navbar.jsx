import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  ExpandMore,
  Search,
  Person,
  FavoriteBorder,
  ShoppingBag,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, signOutUser } from "../../Redux/Slice/userSlice";

const menuItems = [
  { label: "Home", path: "/" },
  {
    label: "Shop By Categories",
    path: "/categories",
    items: [
      { label: "Biscuits", path: "/category/biscuits" },
      { label: "Diet Namkeen", path: "/category/diet_namkeen" },
      { label: "Diet Chips", path: "/category/diet_chips" },
      { label: "Namkeen", path: "/category/namkeen" },
      { label: "Makhana", path: "/category/makhana" },
    ],
  },
  {
    label: "Types",
    // path: "/types",
    // items: [
    //   { label: "Vegan", path: "/types/vegan" },
    //   { label: "Gluten-Free", path: "/types/gluten-free" },
    //   { label: "Organic", path: "/types/organic" },
    // ],
  },
  {
    label: "Gifting",
  },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "B2B Orders", path: "/b2b-orders" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userAnchorEl, setUserAnchorEl] = useState(null);

  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleMenuOpen = (event, menuLabel) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(openMenu === menuLabel ? null : menuLabel);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const handleUserMenuOpen = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserAnchorEl(null);
  };

  const handleLogout = async () => {
    await dispatch(signOutUser()).unwrap();
    handleUserMenuClose();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        fontFamily: "Poppins,sans-serif",
        background: "#fff",
        color: "#000",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Munchbox
        </Typography>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {menuItems.map(({ label, path, items }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Button
                  component={Link}
                  to={path}
                  sx={{
                    textTransform: "none",
                    color: "#000",
                  }}
                >
                  {label}
                </Button>
                {items && (
                  <>
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, label)}
                      sx={{ color: "#000", padding: 0 }}
                    >
                      <ExpandMore
                        sx={{
                          transform:
                            openMenu === label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={openMenu === label}
                      onClose={handleMenuClose}
                    >
                      {items.map(({ label, path }) => (
                        <MenuItem
                          key={label}
                          component={Link}
                          to={path}
                          onClick={handleMenuClose}
                        >
                          {label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
              </div>
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <IconButton>
            <Search />
          </IconButton>

          {user ? (
            <>
              <Button
                onClick={handleUserMenuOpen}
                startIcon={<Person />}
                sx={{ textTransform: "none", color: "#000" }}
              >
                {user.user_metadata?.firstName || user.email}
              </Button>
              <Menu
                anchorEl={userAnchorEl}
                open={Boolean(userAnchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/login">
              <IconButton>
                <Person />
              </IconButton>
            </Link>
          )}

          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <Link to="/cart">
            <IconButton>
              <ShoppingBag />
            </IconButton>
          </Link>

          {isMobile && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <IconButton onClick={toggleDrawer(false)}>
            <Close />
          </IconButton>
          <List>
            {menuItems.map(({ label, path, items }) => (
              <div key={label}>
                <ListItem
                  button
                  component={Link}
                  to={path}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={label} />
                  {items && items.length > 0 && (
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, label)}
                      sx={{ color: "#000", padding: 0 }}
                    >
                      <ExpandMore
                        sx={{
                          transform:
                            openMenu === label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    </IconButton>
                  )}
                </ListItem>
                {items && items.length > 0 && openMenu === label && (
                  <List sx={{ paddingLeft: 2 }}>
                    {items.map(({ label, path }) => (
                      <ListItem
                        button
                        key={label}
                        component={Link}
                        to={path}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                  </List>
                )}
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
