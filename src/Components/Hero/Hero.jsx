import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

const images = [
  {
    src: "https://imgcdn.floweraura.com/Valentine-desktop_0.png?tr=w-1280,dpr-1.5,q-70",
  },
  {
    src: "https://imgcdn.floweraura.com/same-day-valentine-gifts-desktop_0.jpg?tr=w-1280,dpr-1.5,q-70",
  },
  {
    src: "https://imgcdn.floweraura.com/anniversary-flower-fa-desktop_1.jpg?tr=w-1280,dpr-1.5,q-70",
  },
  {
    src: "https://imgcdn.floweraura.com/flower-birthday-homepage-fa-desktop_0.jpg?tr=w-1280,dpr-1.5,q-70",
  },
];

const Hero = () => {
  return (
    <Box sx={{ maxWidth: "1500px", margin: "auto" }}>
      <Carousel
        autoPlay={true}
        animation="fade"
        navButtonsAlwaysVisible
        indicatorContainerProps={{
          style: {
            marginTop: "10px",
          },
        }}
      >
        {images.map((item, index) => (
          <Paper key={index} elevation={3}>
            <Box
              component="img"
              src={item.src}
              sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
