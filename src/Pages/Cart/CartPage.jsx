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

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "1100px", mx: "auto", py: 5 }}>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3, mt: 1 }}>
          Cart
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
                      <TableCell
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <img src={item.img} alt={item.name} width={80} />
                        <Box>
                          <Typography fontWeight="bold">{item.name}</Typography>
                          <Button
                            size="small"
                            sx={{ textTransform: "none", color: "red" }}
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
                                updateCart({ id: item.id, qty: item.qty - 1 })
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
                                updateCart({ id: item.id, qty: item.qty + 1 })
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

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button sx={{ textTransform: "none", color: "black" }}>
                  Note
                </Button>
                <Button sx={{ textTransform: "none", color: "black" }}>
                  Shipping
                </Button>
              </Box>
              <Box>
                <Typography fontWeight="bold">
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
