import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Button, Stack, Typography } from "@mui/material";
import fullStar from "../../../../assets/images/full_star.png";
import emptyStar from "../../../../assets/images/half_star.png";
import { Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Container_main({ productDetail }) {
  console.log(productDetail);

  // State to track the active color button
  const [activeColor, setActiveColor] = React.useState(null);

  // Fallback if productDetail is not available
  const images = productDetail?.image || [];
  const mainImage = images[3] || {};

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

  //colors-code
  // Function to convert hex color to RGBA with reduced opacity
  const getDullColor = (color) => {
    // Extract the hex color code
    const hex = color.replace("#", "");
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Return RGBA color with reduced opacity (0.5 for dull shade)
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
            {images.map((image, index) => (
              <Grid item key={index}>
                <Box
                  component={"img"}
                  src={image?.url}
                  alt={image?.name}
                  sx={{ width: "10vw" }}
                />
              </Grid>
            ))}
          </Grid>
          {/* grid item for main image */}
          <Grid item xs={6} alignContent={"center"}>
            <Box
              component={"img"}
              src={mainImage.url} // Access the URL of the image at index 3
              alt={mainImage.name} // Access the name of the image at index 3
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
          {productDetail?.colors.map((color, index) => (
            <Button
              key={index}
              onClick={() => setActiveColor(color)} // Set the clicked color as active
              sx={{
                backgroundColor: activeColor === color ? color : getDullColor(color), // Active button background color
                color: activeColor === color ? "#fff" : color, // Change text color based on active state
                border:
                  activeColor === color
                    ? `2px solid ${color}`
                    : `2px solid ${color}`, // Border color based on active state
                borderRadius: "50%", // Make button circular
                width: "15px", // Set width for circular button
                height: "15px", // Set height for circular button
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative", // For positioning check icon
                "&:hover": {
                  backgroundColor: activeColor === color ? color : "#f0f0f0", // Hover effect
                },
              }}
            >
              {activeColor === color && <CheckIcon style={{ color: "#fff" }} />}{" "}
              {/* Show check icon for active button */}
            </Button>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
