import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Alert, Button, Snackbar, Stack, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CartAmountToggle from "../cartAmtToggle";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart"; // Import your useCart hook
import { useSelector } from "react-redux"; // For getting the user ID from Redux
import fullStar from "../../../../assets/images/full_star.png";
import emptyStar from "../../../../assets/images/half_star.png";
import { useSnackbar } from "../../../../components/Snackbar";
import { useModal } from "../../../../components/Modal";
import Login from "../../../pages/Login/login";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../redux/userSlice"; // Adjust the path as needed
import useUser from "../../../../hooks/useUser";

export default function Container_main({ productDetail }) {
  const navigate = useNavigate();
  const { addToCart, isLoading, isError } = useCart(); // Get cart functions from the hook
  const userId = useSelector((state) => state.user.userInfo?._id); // Get the logged-in user's ID from Redux

  const [activeColor, setActiveColor] = React.useState(null);
  const [amount, setAmount] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const { showSnackbar } = useSnackbar();
  const { showModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const { userLogin } = useUser(); // Assuming this handles the login

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < productDetail.stock
      ? setAmount(amount + 1)
      : setAmount(productDetail.stock);
  };

  const images = productDetail?.image || [];
  const mainImage = selectedImage || images[0] || {};

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? fullStar : emptyStar}
          alt={i <= rating ? "Full Star" : "Empty Star"}
          style={{ width: "20px", height: "20px", marginRight: "2px" }}
        />
      );
    }
    return stars;
  };

  const getDullColor = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  };

  // Function to handle form submission
  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      const response = await userLogin({ email, password });
      const { token, data } = response;

      // Store token in local storage
      localStorage.setItem("token", token);
      // Dispatch user data to Redux store
      dispatch(setUser(data));

      // Redirect user to the dashboard or home page on successful login
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleAddToCart = async () => {
    if (!userId) {
      showSnackbar("Login First", "error");

      const loginValidationSchema = Yup.object({
        email: Yup.string().required(),
        password: Yup.string().required(),
      });

      //open login page-
      showModal({
        title: "Login",
        content: <Login />,
        onSubmit: handleLogin,
        confirmText: "Sign-In",
        cancelText: "Cancel",
        validation: loginValidationSchema,
      });
    }
    try {
      const cartData = {
        userId: userId, // From Redux
        productId: productDetail?._id, // From the product details
        productQuantity: amount, // Amount selected by the user
        productColor: activeColor || productDetail?.colors?.[0], // Selected or default color
      };

      // Add to cart using useCart
      await addToCart(cartData); // Call useCart to post the data to the API
      // alert("Product added to cart!");
      showSnackbar("Product added to cart!", "success");

      // Navigate to the cart page after adding
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      // alert("Error adding product to cart. Please try again.");
    }
  };

  return (
    <Grid container justifyContent={"center"} gap={2} p={4}>
      <Grid item xs={12} sm={6}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            {images?.map((image, index) => (
              <Grid item key={index}>
                <Box
                  component={"img"}
                  src={image?.url}
                  alt={image?.name}
                  sx={{ width: "10vw", cursor: "pointer" }}
                  onClick={() => setSelectedImage(image)}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={6} alignContent={"center"}>
            <Box
              component={"img"}
              src={mainImage.url}
              alt={mainImage.name}
              style={{
                width: "20vw",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          {productDetail?.name || "Product Name Unavailable"}
        </Typography>

        <Typography>
          {renderStars(productDetail?.stars)} | (
          {productDetail?.reviews || "N/A"}: customer reviews)
        </Typography>
        <Typography>MRP: {productDetail?.price || "N/A"}</Typography>
        <Typography>Deal of the day: 60000</Typography>
        <Typography width={"30vw"}>
          {productDetail?.description || "Description Unavailable"}
        </Typography>

        <Divider sx={{ margin: "10px 0" }} />

        <Stack direction="row" spacing={1} mt={2}>
          <Typography>Color:</Typography>
          {productDetail?.colors?.map((color, index) => (
            <Box
              key={index}
              onClick={() => setActiveColor(color)}
              sx={{
                backgroundColor:
                  activeColor === color ? color : getDullColor(color),
                border: `2px solid ${color}`,
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: activeColor === color ? color : "#f0f0f0",
                },
              }}
            >
              {activeColor === color && <CheckIcon style={{ color: "#fff" }} />}
            </Box>
          ))}
        </Stack>

        <Box sx={{ mt: 2 }}>
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </Box>

        <Button
          variant="contained"
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? "Adding to Cart..." : "Add To Cart"}
        </Button>
      </Grid>
    </Grid>
  );
}
