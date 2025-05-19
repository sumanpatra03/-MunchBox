import React, { useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";



//

const SeasonCollection = () => {
  const dispatch = useDispatch()
   const { season_collection:products } = useSelector((state) => state.products);
     useEffect(() => {
       dispatch(fetchProducts({ endpoint: "season_collection" }));
     }, [dispatch]);
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
