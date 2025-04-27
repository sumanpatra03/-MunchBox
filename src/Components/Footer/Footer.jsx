import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";

const footerLinks = [
  {
    title: "Information",
    links: [
      "Return, Refund & Cancellation Policy",
      "Shipping Policy",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Main Menu",
    links: [
      "Home",
      "Shop By Categories",
      "Types",
      "Gifting",
      "About Us",
      "Contact",
      "B2B Orders",
    ],
  },
  {
    title: "Our Store",
    links: [
      "Find a location nearest you. See Our Stores",
      "+91 9734127642",
      "info@munchbox.co",
    ],
  },
];

const Footer = () => {
  return (
    <Box sx={{ background: "#F8F8F8", py: 6, px: { xs: 4, md: 12 } }}>
      <Grid container spacing={4} justifyContent="space-between">
        {footerLinks.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {section.title}
            </Typography>
            {section.links.map((link, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "block",
                  mb: 1.2,
                  cursor: "pointer",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: "#000" },
                }}
              >
                {link}
              </Typography>
            ))}
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Subscribe
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Be the first to know about new collections and product launches.
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIcon
                    sx={{ cursor: "pointer", color: "black" }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              background: "white",
              borderRadius: "8px",
              "& input": { py: 1.5 },
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          pt: 3,
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} munchbox.co. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
