import React, { useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Breadcrumbs,
  Link,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Remove, Add } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, deleteCart, updateCart } from "../../Redux/Slice/AuthSlice";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchCart());
    }
  }, [dispatch, user]);

  if (!user) {
    return (
      <>
        <Navbar />
        <Box sx={{ textAlign: "center", py: 10 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Please login to view your cart
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "black" } }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "1100px", mx: "auto", py: 5, px: { xs: 2, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 3, mt: 1, textAlign: "center" }}>
          Cart
        </Typography>

        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Your Shopping Cart</Typography>
          </Breadcrumbs>
        </Box>

        {items.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Your Cart is Empty
            </Typography>
            <Typography color="textSecondary" mb={3}>
              Looks like you haven't added anything to your cart yet.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "black" },
              }}
              href="/"
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            {/* Responsive Table / Card Layout */}
            <Box>
              {/* Show table on md+ screens */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Product</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Price</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Quantity</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Total</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell sx={{ display: "flex", gap: 2 }}>
                            <img src={item.img} alt={item.name} width={80} />
                            <Box>
                              <Typography fontWeight="bold">
                                {item.name}
                              </Typography>
                              <Button
                                size="small"
                                sx={{ color: "red", textTransform: "none" }}
                                onClick={() => dispatch(deleteCart(item.id))}
                              >
                                Remove
                              </Button>
                            </Box>
                          </TableCell>
                          <TableCell>₹ {item.price}</TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                width: "120px",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #ccc",
                                borderRadius: 2,
                              }}
                            >
                              <IconButton
                                onClick={() =>
                                  dispatch(
                                    updateCart({
                                      id: item.id,
                                      qty: item.qty - 1,
                                    })
                                  )
                                }
                                disabled={item.qty <= 1}
                              >
                                <Remove />
                              </IconButton>
                              <Typography sx={{ mx: 2 }}>{item.qty}</Typography>
                              <IconButton
                                onClick={() =>
                                  dispatch(
                                    updateCart({
                                      id: item.id,
                                      qty: item.qty + 1,
                                    })
                                  )
                                }
                              >
                                <Add />
                              </IconButton>
                            </Box>
                          </TableCell>
                          <TableCell>₹ {item.price * item.qty}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/* Show cards on mobile */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {items.map((item) => (
                  <Paper
                    key={item.id}
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <img src={item.img} alt={item.name} width={80} />
                      <Box>
                        <Typography fontWeight="bold">{item.name}</Typography>
                        <Typography variant="body2">₹ {item.price}</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #ccc",
                          borderRadius: 2,
                        }}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(
                              updateCart({ id: item.id, qty: item.qty - 1 })
                            )
                          }
                          disabled={item.qty <= 1}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography sx={{ mx: 1 }}>{item.qty}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(
                              updateCart({ id: item.id, qty: item.qty + 1 })
                            )
                          }
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        ₹ {item.price * item.qty}
                      </Typography>
                    </Box>
                    <Button
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "red",
                        alignSelf: "flex-end",
                      }}
                      onClick={() => dispatch(deleteCart(item.id))}
                    >
                      Remove
                    </Button>
                  </Paper>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                gap: 2,
                alignItems: { md: "center" },
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button sx={{ textTransform: "none", color: "black" }}>
                  Note
                </Button>
                <Button sx={{ textTransform: "none", color: "black" }}>
                  Shipping
                </Button>
              </Box>
              <Box>
                <Typography
                  fontWeight="bold"
                  fontSize={{ xs: "16px", md: "18px" }}
                >
                  Subtotal: ₹ {totalPrice}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Taxes and shipping calculated at checkout
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "black",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 3,
                py: 1.5,
                "&:hover": { bgcolor: "white", color: "black" },
              }}
            >
              BUY NOW
            </Button>
          </>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default CartPage;
