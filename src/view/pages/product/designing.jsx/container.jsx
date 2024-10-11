import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
import fullStar from "../../../../assets/images/full_star.png";
import emptyStar from "../../../../assets/images/half_star.png";
export default function Container_main({ productDetail }) {
  console.log(productDetail);

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

  return (
    <Grid
      container
      border={"1px solid red"}
      justifyContent={"center"}
      gap={2}
      p={4}
    >
      <Grid item xs={12} sm={6}>
        <Grid container direction="row" spacing={2}>
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
      </Grid>
    </Grid>
  );
}
