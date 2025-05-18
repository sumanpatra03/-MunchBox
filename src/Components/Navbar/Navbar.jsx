import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  {
    label: "Shop By Categories",
    path: "/categories",
    items: [
      { label: "Snacks", path: "/categories/snacks" },
      { label: "Beverages", path: "/categories/beverages" },
      { label: "Groceries", path: "/categories/groceries" },
    ],
  },
  {
    label: "Types",
    path: "/types",
    items: [
      { label: "Vegan", path: "/types/vegan" },
      { label: "Gluten-Free", path: "/types/gluten-free" },
      { label: "Organic", path: "/types/organic" },
    ],
  },
  {
    label: "Gifting",
    path: "/gifting",
  },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "B2B Orders", path: "/b2b-orders" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

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

  return (
    <AppBar
      position="static"
      sx={{
        fontFamily: "Poppins,sans-serif",
        background: "#fff",
        color: "#000",
        boxShadow: "none",
        // fontFamily: "Poppins, sans-serif",
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
                {items && items.length > 0 && (
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

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <Search />
          </IconButton>
          <Link to="/login">
            <IconButton>
              <Person />
            </IconButton>
          </Link>
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
