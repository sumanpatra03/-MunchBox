import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useForm } from "react-hook-form";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from "../../Redux/Slice/userSlice";
import { useState } from "react";


const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const submitHandler = async ({ email, password }) => {
    setLoading(true);
    try {
      // Wait at least 2 seconds to simulate loading
      const loginPromise = dispatch(signInUser({ email, password })).unwrap();
      const delay = new Promise((res) => setTimeout(res, 2000));
      await Promise.all([loginPromise, delay]);

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(
        error?.message || "Invalid email or password. Please try again."
      );
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ mt: 1, mb: 3, textAlign: "center" }}>
          Log In
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
            <Typography color="text.primary">Account</Typography>
          </Breadcrumbs>
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Log In
            </Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <Box mt={1} mb={2}>
                <Link href="#" underline="hover" color="black">
                  Forgot your password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  backgroundColor: "#000",
                  "&:hover": { backgroundColor: "#333" },
                  color: "#fff",
                  borderRadius: 1,
                  py: 1.5,
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1.2,
                  textTransform: "none",
                }}
              >
                {loading && (
                  <CircularProgress
                    size={20}
                    sx={{ color: "white" }}
                    thickness={5}
                  />
                )}
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              New Customer
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </Typography>
            <Link href="/register">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  "&:hover": { backgroundColor: "#333" },
                  color: "#fff",
                  borderRadius: 1,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Register
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      <Footer />
    </>
  );
};

export default Login;
