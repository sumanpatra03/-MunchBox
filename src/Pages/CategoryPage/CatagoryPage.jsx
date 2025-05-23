import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Breadcrumbs,
  Link,
  IconButton,
  Grid,
  Tooltip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  FavoriteBorder,
  ShoppingBag,
  Visibility,
  Favorite,
} from "@mui/icons-material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/Slice/AuthSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";
import Loading from "../../Components/Loading/Loading";

const CategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    inStock: false,
    outOfStock: false,
    priceRange: [0, 700],
    productType: [],
    types: [],
  });
  const [wishlist, setWishlist] = useState([]);

  const allProducts = useSelector((state) => state.products[categoryName]);
  const loading = useSelector((state) => state.products.loading);

  const user = useSelector((state) => state.user.user);

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchProducts({ endpoint: categoryName }));
    }
  }, [dispatch, categoryName]);

  useEffect(() => {
    if (allProducts) {
      setItems(allProducts);
    }
  }, [allProducts]);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Simple filter logic (you can expand this)
  const filteredItems = items.filter((product) => {
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    )
      return false;
    // Add productType and types filter if needed
    return true;
  });

  const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please login to add products to the cart.");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      dispatch(addCart(product));
      console.log("Dispatching addCart for:", product);
      toast.success("Product added to cart");
    }
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  if (loading || !allProducts) return <Loading />;

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 1400, mx: "auto", px: 2, py: 6 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant={isSmDown ? "h5" : "h4"}
            fontWeight={700}
            sx={{ mb: 1, textTransform: "capitalize", textAlign: "center" }}
          >
            {categoryName.replace(/-/g, " ")}
          </Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography
              color="text.primary"
              sx={{ textTransform: "capitalize" }}
            >
              {categoryName.replace(/-/g, " ")}
            </Typography>
          </Breadcrumbs>
        </Box>

        <Grid container spacing={3}>
          {/* Sidebar Filters */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              position: { md: "sticky" },
              top: 90,
              height: { md: "fit-content" },
              bgcolor: "#fafafa",
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={2}>
              Filters
            </Typography>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Availability</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.inStock}
                      onChange={(e) =>
                        handleFilterChange("inStock", e.target.checked)
                      }
                    />
                  }
                  label="In Stock"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.outOfStock}
                      onChange={(e) =>
                        handleFilterChange("outOfStock", e.target.checked)
                      }
                    />
                  }
                  label="Out of Stock"
                />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Price Range</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Slider
                  value={filters.priceRange}
                  onChange={(e, newValue) =>
                    handleFilterChange("priceRange", newValue)
                  }
                  valueLabelDisplay="auto"
                  min={0}
                  max={200}
                />
                <Typography variant="body2" mt={1}>
                  ₹{filters.priceRange[0]} to ₹{filters.priceRange[1]}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {filteredItems.length === 0 && (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  mx="auto"
                  my={6}
                >
                  No products found matching the filters.
                </Typography>
              )}
              {filteredItems.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
                      bgcolor: "background.paper",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 6px 20px rgb(0 0 0 / 0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                      onClick={() =>
                        navigate(`/category/${categoryName}/${product.id}`)
                      }
                    >
                      <Box
                        component="img"
                        src={product.img}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          height: 200,
                          objectFit: "contain",
                          bgcolor: "#fff",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        noWrap
                        title={product.name}
                      >
                        {product.name}
                      </Typography>

                      <Box
                        sx={{
                          mt: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          // mt: 1,
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography
                            variant="h6"
                            color="black"
                            fontWeight={700}
                          >
                            ₹{product.price}
                          </Typography>
                          {product.oldprice && (
                            <Typography
                              variant="body2"
                              color="text.disabled"
                              sx={{ textDecoration: "line-through" }}
                            >
                              ₹{product.oldprice}
                            </Typography>
                          )}
                        </Stack>

                        <Stack direction="row" spacing={1}>
                          <Tooltip title="Add to Wishlist" arrow>
                            <IconButton
                              size="small"
                              color={
                                wishlist.includes(product.id)
                                  ? "error"
                                  : "default"
                              }
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleWishlist(product.id);
                              }}
                            >
                              {wishlist.includes(product.id) ? (
                                <Favorite />
                              ) : (
                                <FavoriteBorder />
                              )}
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Add to Cart" arrow>
                            <IconButton
                              size="small"
                              color="black"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(product);
                              }}
                            >
                              <ShoppingBag />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="View Details" arrow>
                            <IconButton
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(
                                  `/category/${categoryName}/${product.id}`
                                );
                              }}
                            >
                              <Visibility />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
};

export default CategoryPage;
