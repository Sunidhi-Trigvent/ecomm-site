import * as React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import useProducts from "../../../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

export default function FeatureComp() {
  const { products, isLoading } = useProducts();
  const [featuredProducts, setFeaturedProducts] = React.useState([]);
  const navigate = useNavigate();

  React.useMemo(() => {
    setFeaturedProducts(() => {
      return products?.filter((product) => product.featured && product);
    });
  }, [products]);

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        {featuredProducts?.map((product) => (
          <Box
            key={product?.id}
            textAlign="center"
            onClick={() => navigate(`/product/${product?.id}`)}
          >
            <img
              src={product?.image}
              alt={product?.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <Box>{product?.name}</Box>
          </Box>
        ))}
      </Stack>
    </>
  );
}
