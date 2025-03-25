import { Box, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Free Shipping",
    description: "Tell about your service.",
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: "Money Guarantee",
    description: "Within 30 days for an exchange.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
  {
    icon: <CreditCardIcon fontSize="large" />,
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
];

const FeatureSection = () => {
  return (
    <>
      <hr />
      <Box sx={{ py: 5, textAlign: "center" }}>
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {feature.icon}
                <Typography variant="h6" fontWeight="bold" mt={1}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <hr />
    </>
  );
};

export default FeatureSection;
