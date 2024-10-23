import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Button, Stack, Typography } from "@mui/material";
import fullStar from "../../../../assets/images/full_star.png";
import emptyStar from "../../../../assets/images/half_star.png";
import { Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CartAmountToggle from "../cartAmtToggle";
import { useNavigate } from "react-router-dom";

export default function Container_main({ productDetail }) {
  console.log(productDetail);

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // State to track the active color button
  const [activeColor, setActiveColor] = React.useState(null);

  // State to track amount
  const [amount, setAmount] = React.useState(1);

  // State to track the selected image
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Function for increasing/decreasing the amount
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < productDetail.stock
      ? setAmount(amount + 1)
      : setAmount(productDetail.stock);
  };

  // Fallback if productDetail is not available
  const images = productDetail?.image || [];
  
  // Default to the 4th image or the first one if none is selected
  const mainImage = selectedImage || images[0] || {};

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? fullStar : emptyStar}
          alt={i <= rating ? "Full Star" : "Empty Star"}
          style={{ width: "20px", height: "20px", marginRight: "2px" }} // Adjust size and spacing
        />
      );
    }
    return stars;
  };

  // Function to convert hex color to RGBA with reduced opacity
  const getDullColor = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  };

  return (
    <Grid
      container
      border={"1px solid red"}
      justifyContent={"center"}
      gap={2}
      p={4}
    >
      {/* grid items for images */}
      <Grid item xs={12} sm={6}>
        <Grid container direction="row" spacing={2}>
          {/* grid items for four images */}
          <Grid item xs={6}>
            {images?.map((image, index) => (
              <Grid item key={index}>
                <Box
                  component={"img"}
                  src={image?.url}
                  alt={image?.name}
                  sx={{ width: "10vw", cursor: "pointer" }} // Added cursor pointer for clickable effect
                  onClick={() => setSelectedImage(image)} // Update the selected image when clicked
                />
              </Grid>
            ))}
          </Grid>
          {/* grid item for main image */}
          <Grid item xs={6} alignContent={"center"}>
            <Box
              component={"img"}
              src={mainImage.url} // Display the currently selected image or fallback
              alt={mainImage.name}
              style={{
                width: "20vw",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* grid items for text */}
      <Grid item xs={12} sm={6}>
        <Typography>
          {productDetail?.name || "Product Name Unavailable"}
        </Typography>

        <Typography>
          {renderStars(productDetail?.stars)}
          &nbsp; | &nbsp; ({productDetail?.reviews || "N/A"}:customer reviews)
        </Typography>

        <Typography>MRP: {productDetail?.price || "N/A"}</Typography>
        <Typography>Deal of the day: 60000</Typography>
        <Typography width={"30vw"}>
          {productDetail?.description || "Description Unavailable"}
        </Typography>

        <Typography>
          {" "}
          <Divider sx={{ margin: "10px 0" }} />
        </Typography>

        {/* Render color buttons */}
        <Stack direction="row" spacing={1} mt={2}>
          <Typography>Color:</Typography>
          {productDetail?.colors?.map((color, index) => (
            <Box
              key={index}
              onClick={() => setActiveColor(color)} // Set the clicked color as active
              sx={{
                backgroundColor:
                  activeColor === color ? color : getDullColor(color),
                color: activeColor === color ? "#fff" : color,
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
          {/* cartamount-Toggle */}
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </Box>

        {/* Cart Button */}
        <Button variant="contained" onClick={() => navigate("/cart")}>
          Add To Cart
        </Button>
      </Grid>
    </Grid>
  );
}
