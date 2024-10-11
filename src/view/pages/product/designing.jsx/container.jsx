import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

export default function Container_main({ productDetail }) {
  console.log(productDetail);

  // Fallback if productDetail is not available
  const images = productDetail?.image || [];
  const mainImage = images[3] || {};

  const fullStar = "https://example.com/full-star.png"; // URL to the full star image
  const emptyStar = "https://example.com/empty-star.png"; // URL to the empty star image

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
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Stack direction="row" alignItems="center">
        {/* Box for images */}
        <Box sx={{ width: "50%", ml: 40 }}>
          <Grid container direction="row" spacing={2}>
            {/* Box for thumbnails */}
            <Grid item xs={6}>
              <Grid container direction="column" spacing={2}>
                {images.map((image, index) => (
                  <Grid item key={index}>
                    <img
                      src={image?.url}
                      alt={image?.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Main image box */}
            <Grid item xs={6} pr={19} mt={15}>
              <img
                src={mainImage.url} // Access the URL of the image at index 3
                alt={mainImage.name} // Access the name of the image at index 3
                style={{
                  width: "100px", // Adjust width as needed
                  height: "100px", // Maintain aspect ratio
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Box for text data */}
        <Box sx={{ width: "50%", mr: 17 }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography>
                {productDetail?.name || "Product Name Unavailable"}
              </Typography>

              {/* Display stars as images */}
              <Typography>
                {renderStars(productDetail?.stars)}
                &nbsp; | &nbsp; ({productDetail?.reviews || "N/A"}:customer
                reviews)
              </Typography>

              <Typography>MRP: {productDetail?.price || "N/A"}</Typography>
              <Typography>Deal of the day: 60000</Typography>
              <Typography>
                {productDetail?.description || "Description Unavailable"}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Box for text data end */}
      </Stack>
    </Box>
  );
}
