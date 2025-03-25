import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  Box,
  Breadcrumbs,
  Typography,
  Link,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ maxWidth: "1500px", mx: "auto", px: 3, py: 6 }}>
          <Typography variant="h4" sx={{ mt: 1, mb: 3 }}>
            Contact-Us
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
              aria-label="breacrumb"
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Contact Us</Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ mt: 9 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              We would love to hear from you.
            </Typography>
            <Typography sx={{ mb: 4 }}>
              If you’ve got great products you're making or looking to work with
              us, then drop us a line.
            </Typography>

            <Grid container spacing={4}>
              {/* Contact Form */}
              <Grid item xs={12} md={7}>
                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email" variant="outlined" />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Save my name, email, and website in this browser for the next time I comment."
                  />
                  <Button
                    variant="contained"
                    sx={{
                      alignSelf: "start",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Submit Now
                  </Button>
                </Box>
              </Grid>

              {/* Contact Info */}
              <Grid item xs={12} md={5}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Information
                </Typography>
                <Typography sx={{ mt: 1 }}>+91 7417438052</Typography>
                <Typography sx={{ mb: 3 }}>info@munchbox.co</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Social Media
                </Typography>
                <Typography sx={{ mt: 1 }}>📷 Instagram</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
