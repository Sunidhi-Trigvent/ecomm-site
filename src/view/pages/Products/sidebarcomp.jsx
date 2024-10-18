import {
  Box,
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
import CheckIcon from "@mui/icons-material/Check";
import Slider from '@mui/material/Slider';

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
   // State to track the active color button
   const [activeColor, setActiveColor] = React.useState(null);

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
      
      <Stack direction="row" spacing={1} mt={2}>
          <Typography>All:</Typography>
          {products?.colors.map((color, index) => (
            <Box
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
            </Box>
          ))}
        </Stack>

      <Typography fontWeight="bold">Price</Typography>
      <Box sx={{ width: 110 }}>
      <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" />
    </Box>

      <Button variant="contained">Clear Filters</Button>
    </Stack>
  );
};

export default SidebarComp;
