import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  ImageList,
  ImageListItem,
} from "@mui/material";

const StoryPage = ({ heroImages, storyCategories, toldStoriesData }) => {
  const [formData, setFormData] = useState({
    storyName: "",
    storyCategory: "",
    storyContent: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting form data
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000); // Remove success message after 3s
    setFormData({ storyName: "", storyCategory: "", storyContent: "" }); // Reset form
  };

  const filteredStories = toldStoriesData.filter((story) => {
    const matchesCategory = filterCategory
      ? story.category === filterCategory
      : true;
    const matchesSearch = story.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
          Our Stories
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {heroImages.map((image, index) => (
            <ImageListItem key={index}>
              <CardMedia
                component="img"
                image={image}
                alt={`Hero Image ${index + 1}`}
                sx={{
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Middle Section */}
      <Grid container spacing={4}>
        {/* Left Side: Untold Stories */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              maxWidth: "500px",
            }}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Share Your Untold Story
            </Typography>

            <TextField
              label="Story Name"
              variant="outlined"
              fullWidth
              value={formData.storyName}
              onChange={(e) =>
                setFormData({ ...formData, storyName: e.target.value })
              }
              required
            />

            <FormControl fullWidth>
              <InputLabel>Story Category</InputLabel>
              <Select
                value={formData.storyCategory}
                onChange={(e) =>
                  setFormData({ ...formData, storyCategory: e.target.value })
                }
                required
              >
                {storyCategories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Your Story"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              value={formData.storyContent}
              onChange={(e) =>
                setFormData({ ...formData, storyContent: e.target.value })
              }
              required
            />

            <Button type="submit" variant="contained" color="primary">
              Submit Story
            </Button>

            {successMessage && (
              <Typography
                variant="body1"
                color="success.main"
                sx={{ textAlign: "center", mt: 2 }}
              >
                Your story has been submitted successfully!
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Right Side: Told Stories */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Told Stories
          </Typography>

          {/* Filter and Search */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              width: "100%",
              mb: 2,
            }}
          >
            <FormControl sx={{ flex: 1 }}>
              <InputLabel>Filter by Category</InputLabel>
              <Select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {storyCategories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Search"
              variant="outlined"
              sx={{ flex: 1 }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>

          {/* Story List */}
          <List>
            {filteredStories.map((story) => (
              <ListItem
                key={story.id}
                sx={{
                  mb: 2,
                  borderBottom: "1px solid #ddd",
                  pb: 1,
                }}
              >
                <ListItemText
                  primary={
                    <a
                      href={`/story/${story.id}`}
                      style={{
                        textDecoration: "none",
                        color: "#1976d2",
                        fontWeight: "bold",
                      }}
                    >
                      {story.title}
                    </a>
                  }
                  secondary={`Category: ${story.category}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StoryPage;
