import { FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";





const NewArrivals = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts("new_arrivals"));
  }, [dispatch]);

  


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

  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        NEW ARRIVALS
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
              {/* Hover Wrapper */}
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
                <Box
                  component="img"
                  src={product.img}
                  alt={product.name}
                  sx={{
                    width: "100%",
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

              <Typography variant="h6" fontWeight="bold" mb={1} mt={2}>
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
    </Box>
  );
};

export default NewArrivals;
