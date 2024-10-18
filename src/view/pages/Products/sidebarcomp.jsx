import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import useProducts from "../../../hooks/useProducts";
import SearchIcon from "@mui/icons-material/Search";

const SidebarComp = ({
  onCategoryClick,
  onCompanySelect,
  setSearchQuery,
  searchQuery,
}) => {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedValue, setSelectedValue] = useState(10);
  const [selectedCompany, setSelectedCompany] = useState(10); // State for company selection
  const[querydata,setQueryData]=useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryClick(category);
  };

  const uniqueCategories = products
    ? [...new Set(products.map((product) => product?.category))]
    : [];
  const uniqueCompanies = products
    ? [...new Set(products.map((product) => product?.company))]
    : []; // Extract unique companies

  // Handle company selection
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    onCompanySelect(event.target.value); // Notify parent component of the company change
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    // setSearchQuery(query);
    setQueryData(query);
  };

  // handle search- on icon click
  const handleSearch = () => {
    // console.log("hi");
    setSearchQuery(querydata);
  };

  return (
    <Stack gap={2} p={1}>
      {/* Search Box */}
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        // value={searchQuery}
        onChange={handleSearchChange}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Typography fontWeight="bold">Category</Typography>
      <Typography
        key="all"
        fontSize={"16px"}
        onClick={() => handleCategoryClick("All")}
        sx={{
          cursor: "pointer",
          color: activeCategory === "All" ? "pink" : "black",
          borderBottom: activeCategory === "All" ? "2px solid pink" : "none",
          width: "fit-content",
        }}
      >
        All
      </Typography>
      {uniqueCategories.map((category, index) => (
        <Typography
          key={index}
          fontSize={"16px"}
          onClick={() => handleCategoryClick(category)}
          sx={{
            cursor: "pointer",
            color: activeCategory === category ? "pink" : "black",
            borderBottom:
              activeCategory === category ? "2px solid pink" : "none",
            width: "fit-content",
          }}
        >
          {category}
        </Typography>
      ))}

      <Typography fontWeight="bold">Company</Typography>
      <Select
        labelId="product-select-label"
        id="product-select"
        value={selectedCompany}
        onChange={handleCompanyChange}
        fullWidth
        size="small"
      >
        <MenuItem value={10}>All</MenuItem>
        {uniqueCompanies.map((company, index) => (
          <MenuItem key={index} value={index + 20}>
            {company}
          </MenuItem> // Use unique company names with distinct values
        ))}
      </Select>

      <Typography fontWeight="bold">Colors</Typography>
      <Typography>All</Typography>

      <Typography fontWeight="bold">Price</Typography>

      <Button variant="contained">Clear Filters</Button>
    </Stack>
  );
};

export default SidebarComp;
