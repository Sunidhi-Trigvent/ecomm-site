import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Button, Stack, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CartAmountToggle from "../cartAmtToggle";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart"; // import your useCart hook
import { useSelector } from "react-redux"; // For getting the user ID from Redux
import fullStar from "../../../../assets/images/full_star.png";
import emptyStar from "../../../../assets/images/half_star.png";

export default function Container_main({ productDetail }) {
  const navigate = useNavigate();

  const { addToCart, isLoading, isError } = useCart();
  const userId = useSelector((state) => state.user.userInfo?._id); // Get the logged-in user's ID from Redux

  const [activeColor, setActiveColor] = React.useState(null);
  const [amount, setAmount] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState(null);

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

  const handleAddToCart = async () => {
    if (!userId) {
      alert("Please log in to add items to the cart.");
      return;
    }
    try {
      const cartData = {
        userId: userId, // From Redux
        productId: productDetail?._id, // From the product details
        productQuantity: amount, // Amount selected by the user
        productColor: activeColor || productDetail?.colors?.[0], // Selected or default color
      };

      await addToCart(cartData); // Call useCart to post the data to the API
      alert("Product added to cart!");
      navigate("/cart"); // Navigate to the cart page after adding
    } catch (error) {
      console.error("Failed to add product to cart:", error);
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
          {productDetail?.reviews || "N/A"}:customer reviews)
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
