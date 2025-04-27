import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Diet Namkeen",
    items: "13 items",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/Frame_9.webp?v=1728046056",
    link: "/diet_namkeen",
  },
  {
    title: "Biscuits",
    items: "25 items",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/Frame_88.webp?v=1728046056",
    link: "/biscuits",
  },
  {
    title: "Diet Chips",
    items: "9 items",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/Frame_4.webp?v=1728046062",
    link: "/diet_Chips",
  },
  {
    title: "Namkeen",
    items: "18 items",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/Frame_7_2.webp?v=1728046057",
    link: "/namkeen",
  },
  {
    title: "Makhana",
    items: "3 items",
    image:
      "https://www.hungrytummy.co/cdn/shop/files/Frame_92.webp?v=1728046056",
    link: "/makhana",
  },
];

const SeasonCollection = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Season Collection
      </Typography>
      <Box sx={{ maxWidth: "100%", margin: "auto", position: "relative" }}>
        <Slider {...settings}>
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                background: "#f0f0c9",
                borderRadius: "10px",
                textAlign: "center",
                position: "relative",
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
                  mb: 2,
                }}
              ></Box>
              <Box sx={{ position: "absolute", bottom: 70, right: 250 }}>
                <Typography fontWeight="bold">{product.title}</Typography>

                <Typography variant="body2" color="text.secondary">
                  {product.items}
                </Typography>
              </Box>

              <IconButton
                onClick={() => navigate(`/category${product.link}`)}
                sx={{
                  position: "absolute",
                  bottom: 70,
                  right: 60,
                  background: "white",
                  color: "gray",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    background: "black",
                    color: "white",
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SeasonCollection;
