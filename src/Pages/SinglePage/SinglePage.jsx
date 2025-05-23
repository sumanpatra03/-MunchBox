import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Rating,
  Paper,
  Stack,
  Breadcrumbs,
  Link,
  useMediaQuery,
  useTheme,
  Fade,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Loading from "../../Components/Loading/Loading";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";
import { addCart } from "../../Redux/Slice/AuthSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SinglePage = () => {
  const navigate = useNavigate();
  const { categoryName, id } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const product = useSelector((state) => state.products.singleProduct);
  const user = useSelector((state) => state.user.user);

  //   const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts({ endpoint: categoryName, id }));
    setFadeIn(true);
  }, [dispatch, categoryName, id]);

  if (!product || Object.keys(product).length === 0) return <Loading />;

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to the cart.");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      dispatch(addCart(product));
      toast.success("Product added to cart");
      //   setSnackbarOpen(true);
    }
  };

  const toggleWishlist = () => {
    if (!user) {
      toast.error("Please login to add products to wishlist.");
    } else {
      setWishlisted(!wishlisted);
      toast.info(wishlisted ? "Removed from wishlist" : "Added to wishlist");
    }
  };

  const handleShare = () => {
    toast.info("Share functionality coming soon!");
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ justifyContent: "center", display: "flex", mb: 2 }}
          >
            <Link
              component={RouterLink}
              underline="hover"
              color="inherit"
              to="/"
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              underline="hover"
              color="inherit"
              to={`/category/${categoryName}`}
              sx={{ textTransform: "capitalize" }}
            >
              {categoryName?.replace(/-/g, " ")}
            </Link>
            <Typography color="text.primary">{product?.name}</Typography>
          </Breadcrumbs>

          <Typography
            variant={isSmDown ? "h4" : "h3"}
            fontWeight={700}
            sx={{ textAlign: "center", textTransform: "capitalize" }}
          >
            {product?.name}
          </Typography>
        </Box>

        <Fade in={fadeIn} timeout={800}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 4,
                  p: 3,
                  bgcolor: "#fefefe",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: 320, md: 480 },
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={product?.img || "/placeholder.png"}
                  alt={product?.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: 8,
                  }}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} display="flex" flexDirection="column">
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <Rating
                  name="product-rating"
                  value={product?.rating || 4}
                  precision={0.5}
                  readOnly
                  size="medium"
                />
                <Typography variant="body2" color="text.secondary">
                  ({15} reviews)
                </Typography>
              </Stack>

              <Typography variant="h5" color="primary" fontWeight="bold" mb={3}>
                ₹{product?.price || 0}
              </Typography>

              <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  ⭐ High quality and durable
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  ⭐ Designed for maximum comfort
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                  ⭐ Excellent value for money
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                  size="large"
                  onClick={handleAddToCart}
                  sx={{ flexGrow: 1, borderRadius: 3, textTransform: "none" }}
                >
                  Add to Cart
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={
                    wishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />
                  }
                  size="large"
                  onClick={toggleWishlist}
                  sx={{
                    flexGrow: 1,
                    borderRadius: 3,
                    textTransform: "none",
                    color: wishlisted ? "error.main" : "inherit",
                    borderColor: wishlisted ? "error.main" : undefined,
                  }}
                >
                  {wishlisted ? "Wishlisted" : "Wishlist"}
                </Button>

                <IconButton
                  color="primary"
                  aria-label="share product"
                  sx={{ borderRadius: 3, ml: { sm: 1 }, mt: { xs: 1, sm: 0 } }}
                  onClick={handleShare}
                >
                  <ShareIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Fade>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
};

export default SinglePage;
