import { FavoriteBorder, Visibility, ShoppingBag } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/Slice/AuthSlice";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SnacksSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { snacks_section: products } = useSelector((state) => state.products);
     const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchProducts({ endpoint: "snacks_section" }));
  }, [dispatch]);

  const handleAddToCart = (product) => {
     if (!user) {
       toast.error("Please login to add products to the cart.");
       setTimeout(() => navigate("/login"), 2000);
     } else {
       dispatch(addCart(product));
       toast.success("Product added to cart");
     }
   };

  // console.log("Rosted Snacks Section",products)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        <span style={{ color: "gray" }}>You are in</span>{" "}
        <span>Rosted Snacks</span>
      </Typography>
      <Box sx={{ maxWidth: "100%", margin: "auto", px: 2 }}>
        <Slider {...settings}>
          {products.map((product) => (
            <Box key={product.id} sx={{ padding: "5px" }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .icon-container": {
                    opacity: 1,
                    transform: "translateX(-50%) translateY(0)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={product.img}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />

                <Box
                  className="icon-container"
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%) translateY(20px)",
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: "8px",
                    padding: "8px",
                    boxShadow: 2,
                    opacity: 0,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "black", color: "white" },
                    }}
                    aria-label="Add to Wishlist"
                  >
                    <FavoriteBorder />
                  </IconButton>
                  <IconButton
                    onClick={() => handleAddToCart(product)}
                    sx={{
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "black", color: "white" },
                    }}
                    aria-label="Add to Cart"
                  >
                    <ShoppingBag />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "black", color: "white" },
                    }}
                    aria-label="View Details"
                  >
                    <Visibility />
                  </IconButton>
                </Box>
              </Box>

              <Typography variant="h6" fontWeight="bold" mb={1} mt={2}>
                {product.name}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Typography variant="body1" fontWeight="bold">
                  ₹ {product.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹ {product.oldprice}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </Box>
  );
};

export default SnacksSection;
