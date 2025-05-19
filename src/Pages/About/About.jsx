import React from "react";
import { Box, Breadcrumbs, Grid, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "1500px", mx: "auto", px: 3, py: 6 }}>
        <Typography variant="h4" sx={{ mt: 1, mb: 3,textAlign:"center" }}>
          About Us
        </Typography>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">About Us</Typography>
          </Breadcrumbs>
        </Box>

        <Grid container spacing={4} alignItems="center" mt={9}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" mb={4}>
              HungryTummy: Snack Smart, Snack Healthy
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              We’ve all been there—that dreaded hour between lunch and dinner,
              where hunger strikes but the snack options around us are either
              unhealthy or way too pricey. Too often, the quickest
              choices—deep-fried chips, sugary chocolate bars—end up being the
              worst for our waistlines, while healthier options seem out of
              reach.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, lineHeight: 2.0 }}
            >
              That’s where HungryTummy comes in! Whether you’re powering through
              meetings, binge-watching your favorite show, or cramming for an
              exam, HungryTummy is here to rescue you from those mid-meal hunger
              pangs. Our snacks are delicious, unique, and packed with health
              benefits, without any artificial chemicals or preservatives.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://www.hungrytummy.co/cdn/shop/files/0B0A7806.jpg?v=1725274397&width=1500"
              alt="Healthy Snacks"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" mt={9}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="http://hungrytummy.co/cdn/shop/files/HUN_0280.jpg?v=1714629952&width=1500"
              alt="Healthy Snacks"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" mb={4}>
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 2.0 }}
            >
              Our mission at HungryTummy is to make healthy snacking easy,
              affordable, and delicious for everyone. We are dedicated to
              crafting snacks that use only natural ingredients, free from
              preservatives and chemicals, ensuring that our customers never
              have to compromise on taste or nutrition. By offering convenient,
              guilt-free snack options, we aim to empower people to make smarter
              choices for their health, wherever and whenever hunger strikes.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" mt={9}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" mb={4}>
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 2.0 }}
            >
              To transform the way people snack by providing healthy, delicious,
              and affordable alternatives that nourish both body and mind. We
              envision a world where convenience and health are no longer in
              conflict, and everyone has easy access to snacks that support
              their well-being without sacrificing flavor. HungryTummy aims to
              lead a global movement towards smarter, guilt-free snacking,
              becoming a trusted partner in every customer’s journey toward a
              balanced, healthier lifestyle.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://www.hungrytummy.co/cdn/shop/files/HUN_9935.jpg?v=1714560903&width=1500"
              alt="Healthy Snacks"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
