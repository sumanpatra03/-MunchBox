import Carousel from "react-material-ui-carousel";
import { Paper, Box, useTheme, useMediaQuery } from "@mui/material";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ maxWidth: "1500px", width: "100%", mx: "auto", px: 1 }}>
      <Carousel
        autoPlay
        animation="fade"
        navButtonsAlwaysVisible
        indicatorContainerProps={{
          style: {
            marginTop: "10px",
          },
        }}
      >
        {images.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{ borderRadius: 2, overflow: "hidden" }}
          >
            <Box
              component="img"
              src={item.src}
              alt={`carousel-image-${index}`}
              sx={{
                width: "100%",
                height: isMobile ? "200px" : "450px",
                objectFit: "cover",
                transition: "all 0.3s ease",
              }}
            />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
