import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const B2B = () => {
  const steps = [
    "Product Selection: Browse our wide range of guilt-free snacking options, including Chocochips Cookies, Badam Pista Cookies, and Tutti Frutti Cookies. Select the products that best suit your business requirements.",
    "Quantity and Pricing: Determine the quantity of each product you wish to order. We offer competitive pricing for bulk orders, ensuring that you receive the best value for your investment.",
    "Order Placement: Contact our dedicated B2B customer support team at info@hungrytummy.co or +91 7417438052 to place your bulk order. Provide the details of the products, quantities, and any specific requirements you may have.",
    "Payment and Invoicing: Our team will assist you with the payment process and provide you with an invoice for your bulk order. We accept various payment methods to accommodate your business preferences.",
    "Shipping and Delivery: Once your order is confirmed and payment is received, we will promptly process and dispatch your bulk order. We partner with reliable courier services to ensure timely and secure delivery to your business location.",
    "Customer Support: Our dedicated B2B customer support team is available to assist you throughout the ordering process. If you have any questions or need further assistance, feel free to reach out to us.",
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "1500px", mx: "auto", px: 3, py: 6 }}>
        <Typography variant="h4" sx={{ mt: 1, mb: 3,textAlign:"center" }}>
          Fill the Form Customized Orders
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
            <Typography color="text.primary">
              Fill the Form Customized Orders
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Box sx={{ py: 4, lineHeight: 2.0 }}>
            <Typography variant="h6" gutterBottom>
              As an expert in the snacking industry, Hungry Tummy understands
              the unique needs of businesses when it comes to ordering snacks in
              bulk.
            </Typography>
            <Typography variant="body1">
              We are pleased to offer a seamless and efficient process for
              taking B2B orders in bulk, ensuring that your business has a
              steady supply of guilt-free snacking options.
            </Typography>
            <Typography variant="body1">
              Our B2B ordering process is designed to be simple and convenient,
              allowing you to easily place bulk orders for our delicious
              products. Whether you are a retailer, distributor, or corporate
              client, we have the capacity to fulfill your snacking needs.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Here's how our B2B ordering process works:
            </Typography>
            <List>
              {steps.map((step, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                  <ListItemText primary={`${index + 1}. ${step}`} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At Hungry Tummy, we understand the importance of quality and
              reliability when it comes to B2B orders in bulk. That’s why we
              take great care in ensuring that our products are of the highest
              quality, packed with nutritious ingredients, and meet the specific
              dietary needs of your customers.
            </Typography>
            <Typography variant="body1">
              By choosing Hungry Tummy for your B2B orders in bulk, you can
              trust that you are partnering with a reputable and reliable
              snacking provider. We are committed to delivering exceptional
              products and services to support the success of your business.
            </Typography>
          </Box>
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

export default B2B;
