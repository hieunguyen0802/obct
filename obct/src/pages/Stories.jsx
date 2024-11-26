import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Fade,
  FormControl,
  Grid,
  ImageList,
  ImageListItem,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HeroImage from "../components/HeroImage";
import birthdayWgrandpa from "../asset/images/birthdayWgrandpa.jpg";
import SectionDivider from "../components/SectionDivider";

const Stories = () => {
  const [storyName, setStoryName] = useState("");
  const [tellerName, setTellerName] = useState("");
  const [storyCategory, setStoryCategory] = useState("");
  const [storyText, setStoryText] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [formKey, setFormKey] = useState(0); // Used to trigger form reset with splash effect
  const [viewMore, setViewMore] = useState(false);

  const categories = ["Adventure", "Drama", "Fantasy", "Mystery", "Romance"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(true);
      setFormKey((prevKey) => prevKey + 1); // Reset form with splash effect
      setStoryName("");
      setTellerName("");
      setStoryCategory("");
      setStoryText("");

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000); // 3 seconds delay
    }, 2000); // Simulating 2s API delay
  };

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

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredStories, setFilteredStories] = useState(toldStories);

   // Handle changes in search box
   const handleSearchChange = (e) => {
    setSearch(e.target.value);
    filterStories(e.target.value, selectedCategory);
  };

  // Handle changes in category dropdown
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterStories(search, e.target.value);
  };

  // Filter stories by search or category
  const filterStories = (searchValue, categoryValue) => {
    let filtered = toldStories;

    // Filter by search text
    if (searchValue) {
      filtered = filtered.filter((story) =>
        story.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Filter by category
    if (categoryValue) {
      filtered = filtered.filter((story) => story.category === categoryValue);
    }

    setFilteredStories(filtered);
  };

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <Box>
      <HeroImage image={birthdayWgrandpa} />

      <SectionDivider text="Những câu chuyện chưa kể..." />
      <Typography
        variant="h6"
        sx={{ m: 2, textAlign: "center", fontStyle: "italic" }}
      >
        Hãy thả lỏng cơ thể và thư giãn đầu óc, nhớ lại những ký ức và câu
        chuyện về người thân, rồi viết xuống bên dưới nhé.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          my: 2,
          padding: 2,
          backgroundColor: "background.paper",
          borderRadius: "8px",
          boxShadow: 3,
          key: formKey, // Trigger form re-render on form reset
        }}
      >
        <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
          <TextField
            label="Story Name"
            variant="outlined"
            fullWidth
            value={storyName}
            onChange={(e) => setStoryName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Teller Name"
            variant="outlined"
            fullWidth
            value={tellerName}
            onChange={(e) => setTellerName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="story-category-label">Story Category</InputLabel>
            <Select
              labelId="story-category-label"
              value={storyCategory}
              onChange={(e) => setStoryCategory(e.target.value)}
              label="Story Category"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Your Story"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={storyText}
            onChange={(e) => setStoryText(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Submit Button and Spinner */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            )}
          </Box>
        </Box>

        {/* Success Message */}
        <Fade in={successMessage} timeout={1000}>
          <Box sx={{ mt: 2, width: "100%" }}>
            <Alert severity="success" onClose={() => setSuccessMessage(false)}>
              Your story has been submitted successfully!
            </Alert>
          </Box>
        </Fade>
      </Box>

      <SectionDivider text="Đọc những câu chuyện kể rồi" />
      <Typography
        variant="h6"
        sx={{ m: 2, textAlign: "center", fontStyle: "italic" }}
      >
        Hãy lấy một tách trà hoặc một ly cà phê, rồi ngồi yên tĩnh, và đọc lại
        những câu chuyện đã được kể sau đây
      </Typography>

      <Box sx={{ padding: 4 }}>
     
      {/* Stories List */}
    
      <Box sx={{ padding: 4 }}>
    
      <Grid container spacing={2}>
        {filteredStories.slice(0, viewMore ? filteredStories.length : 4).map((story) => (
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
                    component="a"
                    href={story.link}
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

      {/* View More Button */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained" onClick={handleViewMore}>
          {viewMore ? "View Less" : "View More"}
        </Button>
      </Box>
    </Box>
    </Box>
    </Box>
  );
};

export default Stories;
