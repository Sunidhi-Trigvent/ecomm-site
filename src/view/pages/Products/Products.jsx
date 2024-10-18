import React, { useState, useEffect } from "react";
import useProducts from "../../../hooks/useProducts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarComp from "./sidebarcomp";
import ListView from "./ListView";

function Products() {
  const { products, isLoading } = useProducts();
  const [selectedValue, setSelectedValue] = useState(30);
  const [sortedProducts, setSortedProducts] = useState(products || []);
  const [activeButton, setActiveButton] = useState("grid");
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  const [selectedCompany, setSelectedCompany] = useState(10);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueCompanies = products
    ? [...new Set(products.map((product) => product?.company))]
    : [];

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    applyFilters(category, selectedCompany, searchQuery);
  };

  const handleButtonClick = (view) => {
    setActiveButton(view);
  };

  const applyFilters = (category, selectedCompany, searchQuery) => {
    let filtered = products || [];

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (selectedCompany !== 10) {
      filtered = filtered.filter(
        (product) => product.company === uniqueCompanies[selectedCompany - 20]
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (products) {
      setSortedProducts(products);
      applyFilters(category, selectedCompany, searchQuery);
    }
  }, [products, category, selectedCompany, searchQuery]);

  useEffect(() => {
    sortProducts(selectedValue);
  }, [selectedValue, filteredProducts]);

  const sortProducts = (value) => {
    if (!Array.isArray(filteredProducts)) return;

    let sortedArray = [...filteredProducts];

    switch (value) {
      case 10:
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case 20:
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case 30:
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 40:
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setSortedProducts(sortedArray);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={2}></Grid>
        <Grid item size={{ sm: 2 }}>
          <SidebarComp
            onCategoryClick={handleCategoryClick}
            onCompanySelect={handleCompanySelect}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
        </Grid>
        <Grid item size={{ sm: 6 }} mt={1}>
          <Grid item size={{ sm: 12 }}>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item size={2}>
                <IconButton
                  onClick={() => handleButtonClick("grid")}
                  sx={{
                    bgcolor: activeButton === "grid" ? "black" : "transparent",
                    color: activeButton === "grid" ? "white" : "inherit",
                  }}
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleButtonClick("menu")}
                  sx={{
                    bgcolor: activeButton === "menu" ? "black" : "transparent",
                    color: activeButton === "menu" ? "white" : "inherit",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item size={6}>
                <Typography width={200} sx={{ float: "right" }}>
                  Total Products
                </Typography>
              </Grid>
              <Grid item size={4}>
                <Select
                  labelId="product-select-label"
                  id="product-select"
                  value={selectedValue}
                  onChange={(event) => setSelectedValue(event.target.value)}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={10}>Price (lowest)</MenuItem>
                  <MenuItem value={20}>Price (highest)</MenuItem>
                  <MenuItem value={30}>Price (a-z)</MenuItem>
                  <MenuItem value={40}>Price (z-a)</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>

          {activeButton === "menu" ? (
            <ListView products={sortedProducts} />
          ) : (
            <Grid container mt={2} size={{ sm: 12 }} spacing={1}>
              {sortedProducts?.map((product) => (
                <Grid
                  item
                  bgcolor={"WhiteSmoke"}
                  size={{ md: 4 }}
                  textAlign={"center"}
                  p={1}
                  borderRadius={2}
                  key={product.id}
                >
                  <Box
                    component={"img"}
                    src={product?.image}
                    alt={product?.name}
                    width={198}
                    height={150}
                  />
                  <Stack
                    direction={"row"}
                    width={200}
                    justifyContent={"space-between"}
                  >
                    <Typography fontSize={"16px"}>{product?.name}</Typography>
                    <Typography fontSize={"14px"}>${product?.price}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item size={2}></Grid>
      </Grid>
    </>
  );
}

export default Products;
