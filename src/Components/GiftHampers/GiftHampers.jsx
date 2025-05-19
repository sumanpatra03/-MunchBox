import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/Slice/AuthSlice";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const GiftHampers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { gift_hampers: products } = useSelector((state) => state.products);
   const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchProducts({ endpoint: "gift_hampers" }));
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

  // console.log("Gift Hampers Data",products)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,

    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  // if (isLoading) {
  //   return <div>loading......</div>;
  // }

  // if (error) {
  //   return <p>error.....</p>;
  // }

  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        GIFT HAMPERS
      </Typography>
      <Box sx={{ maxWidth: "100%", margin: "auto", px: 2 }}>
        <style>
          {`
              .slick-slide > div {
                margin: 0 10px; 
              }
            `}
        </style>
        <Slider {...settings}>
          {products.map((product) => (
            <Box key={product.id} sx={{ padding: "5px" }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .overlay": {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  // height="250"
                  image={product.img}
                  alt={product.name}
                  sx={{
                    maxHeight: "500px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.8)",
                    display: "flex",
                    gap: 2,
                    opacity: 0,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <IconButton
                    sx={{
                      mt: "330px",
                      bgcolor: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      boxShadow: 2,
                      "&:hover": { bgcolor: "black", color: "white" },
                    }}
                    aria-label="View"
                  >
                    <Visibility />
                  </IconButton>
                  <IconButton
                    sx={{
                      mt: "330px",
                      bgcolor: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      boxShadow: 2,
                      "&:hover": { bgcolor: "black", color: "white" },
                    }}
                    aria-label="Add to Watchlist"
                  >
                    <FavoriteBorder />
                  </IconButton>
                </Box>
              </Box>

              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {product.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
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
                <Button
                  onClick={() => handleAddToCart(product)}
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderColor: "black",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  Quick Add
                </Button>
              </CardContent>
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

export default GiftHampers;
