import React, { useState } from "react";
import { Box, Button, Grid, ListItem, ListItemText, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import HeroImage from "../components/HeroImage";
import birthdayWgrandpa from "../asset/images/birthdayWgrandpa.jpg";
import SectionDivider from "../components/SectionDivider";
import { Link } from "react-router-dom";

const Stories = () => {
  const [viewMore, setViewMore] = useState(false);

  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category state

  const toldStories = [
    {
      id: 1,
      title: "The Lost Kingdom",
      category: "Adventure",
      createdAt: "2024-11-10",
      description: "A thrilling journey to find a forgotten kingdom.",
      link: "/story/1",
    },
    {
      id: 2,
      title: "Mystery of the Forest",
      category: "Mystery",
      createdAt: "2024-11-12",
      description: "Uncovering secrets hidden deep in the forest.",
      link: "/story/2",
    },
    {
      id: 3,
      title: "Love in the Time of Chaos",
      category: "Romance",
      createdAt: "2024-11-05",
      description: "A love story during a time of war and uncertainty.",
      link: "/story/3",
    },
    {
      id: 4,
      title: "The Dragon's Curse",
      category: "Fantasy",
      createdAt: "2024-11-08",
      description: "A battle against the curse of an ancient dragon.",
      link: "/story/4",
    },
    {
      id: 5,
      title: "The Final Countdown",
      category: "Adventure",
      createdAt: "2024-11-15",
      description: "An epic race against time to stop a global disaster.",
      link: "/story/5",
    },
  ];

  // Handle View More functionality
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  // Handle Search functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Category Change functionality
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter stories based on search query and selected category
  const filteredStories = toldStories.filter((story) => {
    const matchesSearchQuery = story.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? story.category === selectedCategory : true;
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <Box>
      {/* Hero Image Section */}
      <HeroImage image={birthdayWgrandpa} />
      
      {/* Section Divider */}
      <SectionDivider text="Đọc những câu chuyện kể rồi" />

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{ m: 2, textAlign: "center", fontStyle: "italic" }}
      >
        Hãy lấy một tách trà hoặc một ly cà phê, rồi ngồi yên tĩnh, và đọc lại
        những câu chuyện đã được kể sau đây
      </Typography>

      {/* Search and Category Filter */}
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: 2, width: "100%" }}>
        <TextField
          label="Search Stories"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          sx={{
            width: "22.5%", // Reduced width
            height: "56px", // Same height as the dropdown
          }}
        />
        <FormControl sx={{ width: "22.5%", height: "56px" }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category"
            sx={{
              width: "100%", // Take full width of the container
              height: "100%", // Ensure it matches the height of the TextField
            }}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Adventure">Adventure</MenuItem>
            <MenuItem value="Mystery">Mystery</MenuItem>
            <MenuItem value="Romance">Romance</MenuItem>
            <MenuItem value="Fantasy">Fantasy</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Stories List */}
      <Box sx={{ padding: 4, display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2} sx={{ maxWidth: "1200px" }}>
          {filteredStories
            .slice(0, viewMore ? filteredStories.length : 4)
            .map((story) => (
              <Grid item xs={12} sm={6} key={story.id}>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ddd",
                    padding: 2,
                  }}
                >
                  <ListItemText
                    primary={
                      <Button
                        component={Link}
                        to={`/stories/${story.id}`} // Navigate to the single story page using story ID
                        sx={{ textDecoration: "none", color: "primary.main" }}
                      >
                        {story.title}
                      </Button>
                    }
                    secondary={story.category}
                  />
                </ListItem>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* View More Button */}
      <Box sx={{ textAlign: "center", m: 2 }}>
        <Button variant="contained" onClick={handleViewMore}>
          {viewMore ? "View Less" : "View More"}
        </Button>
      </Box>
    </Box>
  );
};

export default Stories;
