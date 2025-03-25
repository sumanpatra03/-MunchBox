import { FavoriteBorder, Visibility, ShoppingBag } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/Slice/AuthSlice";

const products = [
  {
    id: 54,
    title: "Tutti Frutti Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/34.jpg?v=1714560903&width=720",
  },
  {
    id: 55,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/32.jpg?v=1714560375&width=533",
  },
  {
    id: 56,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/35.jpg?v=1714560769&width=720",
  },
  {
    id: 57,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/11_374d1a2a-e1c1-4311-a442-1290aa12dea3.jpg?v=1714555442&width=533",
  },
  {
    id: 58,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/13.jpg?v=1714555641&width=533",
  },
  {
    id: 59,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/87.jpg?v=1717049260&width=533",
  },
  {
    id: 60,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/36.jpg?v=1714560855&width=720",
  },
  {
    id: 61,
    title: "Jeera Cookies",
    price: " 150.00",
    oldPrice: " 189.00",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/1.jpg?v=1714482387&width=533",
  },
];

const SnacksSection = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
  };

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
                  src={product.image}
                  alt={product.title}
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

              {/* Product Info */}
              <Typography variant="h6" fontWeight="bold" mb={1} mt={2}>
                {product.title}
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

export default SnacksSection;
