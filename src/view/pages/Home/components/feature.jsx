import * as React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import useProducts from "../../../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

export default function FeatureComp() {
  //useProduct hook
  const { products, isLoading } = useProducts();

  //state to manage featured products
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
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <stack
              direction={"row"}
              justifyContent={"space-between"}
              spacing={19}
              gap={9}
            >
              <Box>
                {product?.name}
                {product?.price}
              </Box>
            </stack>
          </Box>
        ))}
      </Stack>
    </>
  );
}
