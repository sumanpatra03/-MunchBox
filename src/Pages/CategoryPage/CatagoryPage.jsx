import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FavoriteBorder, ShoppingBag, Visibility } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/Slice/AuthSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(categoryName));
  }, [dispatch, categoryName]);
  useEffect(() => {
    if (products && products.length > 0) {
      setItems(products); // Set the fetched products to the items state
    }
  }, [products]);

  // const [priceRange, setPriceRange] = useState([0, 200]);

  // useEffect(() => {
  //   axiosInstance
  //     .get(categoryName)
  //     .then((res) => {
  //       setItems(res.data);
  //       console.log("Product fetched:", res.data);
  //       toast.success("Products loaded successfully");
  //     })
  //     .catch((err) => {
  //       console.error("Fetch data error", err);
  //       toast.error("Failed to load products");
  //     });
  // }, [categoryName]);

  // const handlePriceChange = (event, newValue) => {
  //   setPriceRange(newValue);
  // };

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
    console.log("Adding to cart:", product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "1500px", mx: "auto", px: 3, py: 6 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mt: 1, mb: 3 }}>
            {categoryName}
          </Typography>
          <Breadcrumbs
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">{categoryName}</Typography>
          </Breadcrumbs>
        </Box>

        <Grid container spacing={4} sx={{ mt: 9 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Filters
              </Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Availability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="In Stock (23)"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Out of Stock (2)"
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Slider
                    // value={priceRange}
                    // onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={200}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    0 to 200.00
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Product Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Biscuits (25)"
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel control={<Checkbox />} label="Baked (25)" />
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {items.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: 3,
                      transition: "transform 0.3s ease-in-out",
                      position: "relative",
                      "&:hover": { transform: "scale(1.05)" },
                      "&:hover .quick-action-buttons, &:hover .hover-icons": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.img}
                      alt={product.title}
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 1,
                        boxShadow: 2,
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                      className="quick-action-buttons"
                    >
                      <Button
                        onClick={() => handleAddToCart(product)}
                        variant="outlined"
                        sx={{
                          width: "250px",
                          borderColor: "black",
                          backgroundColor: "white",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                          },
                        }}
                      >
                        Quick Add
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                      className="hover-icons"
                    >
                      <IconButton
                        sx={{
                          color: "black",

                          "&:hover": { bgcolor: "black", color: "white" },
                        }}
                        aria-label="Add to Wishlist"
                      >
                        <FavoriteBorder />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: "black",
                          "&:hover": { bgcolor: "black", color: "white" },
                        }}
                        aria-label="Add to Cart"
                      >
                        <ShoppingBag />
                      </IconButton>
                      <IconButton
                        sx={{
                          color: "black",
                          "&:hover": { bgcolor: "black", color: "white" },
                        }}
                        aria-label="View Details"
                      >
                        <Visibility />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" mb={1}>
                      {product.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        // color="primary"
                      >
                        ₹ {product.price}
                      </Typography>
                      <Typography
                        // variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        ₹ {product.oldprice}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default CategoryPage;
