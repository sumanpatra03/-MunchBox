import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useForm } from "react-hook-form";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../Redux/Slice/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    // console.log("Registration Data:", data);
    try {
      await dispatch(
        signUpUser({ firstName, lastName, email, password })
      ).unwrap();
      toast.success("Registered successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error(error?.message || "Registration failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
          Register
        </Typography>

        <Box display="flex" justifyContent="center" mb={4}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Create Account</Typography>
          </Breadcrumbs>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h6" fontWeight={600}>
            Register
          </Typography>

          <TextField
            fullWidth
            label="First Name"
            {...register("firstName", { required: "First name is required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          <TextField
            fullWidth
            label="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Typography variant="body2" color="text.secondary">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#000",
              "&:hover": { backgroundColor: "#333" },
              color: "#fff",
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Create Account
          </Button>
          <Typography variant="body2" align="center" mt={2}>
            Already have an account?{" "}
            <Link
              href="/login"
              underline="hover"
              color="black"
              fontWeight={600}
            >
              Login
            </Link>
          </Typography>
        </Box>
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

export default SignUp;
