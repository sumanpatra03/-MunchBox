import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Amit Kumar",
    review:
      "Customized packages are a game-changer! Gifting personalized treats from Hungry Tummy adds a special touch to every celebration.",
  },
  {
    name: "Nisha Trivedi",
    review:
      "Healthy and tasty - a rare combination! Hungry Tummy has transformed our snacking habits. Highly recommended for health-conscious people.",
  },
  {
    name: "Aryan Kapoor",
    review:
      "As a fitness enthusiast, finding healthy snacks without compromising on taste is a challenge. Hungry Tummy’s diet-friendly options are a blessing. I enjoy guilt-free snacking every day!",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Box sx={{ background: "#F8F8A6", py: 8, textAlign: "center", px: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={5}>
        What People Are Saying
      </Typography>

      <Box sx={{ maxWidth: "90%", margin: "auto" }}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                background: "white",
                p: { xs: 1, md: 1 },
                mx: 1,
                borderRadius: "10px",
                boxShadow: 3,
                textAlign: "center",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 -10px", 
              }}
            >
              {/* Star Rating */}
              <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#F4B400" }} />
                ))}
              </Box>

              {/* Review Text */}
              <Typography variant="body1" color="text.secondary" mb={2}>
                {testimonial.review}
              </Typography>

              {/* Reviewer Name */}
              <Typography variant="body1" fontWeight="bold">
                {testimonial.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialSection;