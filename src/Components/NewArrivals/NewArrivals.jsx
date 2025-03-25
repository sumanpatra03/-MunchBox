import { FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 49,
    name: "Tutti Frutti Cookies",
    price: 150.00,
    oldPrice: 189.00,
    img:
      "https://www.hungrytummy.co/cdn/shop/files/55.jpg?v=1714569923&width=720",
  },
  {
    id: 50,
    name: "Jeera Cookies",
    price: 150.00,
    oldPrice: 189.00,
    img:
      "https://www.hungrytummy.co/cdn/shop/files/57.jpg?v=1714569383&width=720",
  },
  {
    id: 51,
    name: "Besan Gathiya",
    price: 89.00,
    oldPrice: 114.00,
    img:
      "https://www.hungrytummy.co/cdn/shop/files/22.jpg?v=1714558099&width=720",
  },
  {
    id: 52,
    name: "Chiwra Diet",
    price: 90.00,
    oldPrice: 121.00,
    img:
      "https://www.hungrytummy.co/cdn/shop/files/14.jpg?v=1714555842&width=720",
  },
  {
    id: 53,
    name: "Mint Makhana",
    price: 180.00,
    oldPrice: 229.00,
    img:
      "https://www.hungrytummy.co/cdn/shop/files/35.jpg?v=1714560769&width=720",
  },
];

const NewArrivals = () => {
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
                ₹ {product.oldPrice}
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
