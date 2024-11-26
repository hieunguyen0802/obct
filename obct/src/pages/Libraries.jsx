import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Libraries = () => {
  const toldStories = [
    {
      id: 1,
      title: "The Lost Kingdom",
      category: "Adventure",
      createdAt: "2024-11-10",
      description: "A thrilling journey to find a forgotten kingdom.",
      image: "https://via.placeholder.com/150",
      link: "/story/1",
    },
    {
      id: 2,
      title: "Mystery of the Forest",
      category: "Mystery",
      createdAt: "2024-11-12",
      description: "Uncovering secrets hidden deep in the forest.",
      image: "https://via.placeholder.com/150",
      link: "/story/2",
    },
    {
      id: 3,
      title: "Love in the Time of Chaos",
      category: "Romance",
      createdAt: "2024-11-05",
      description: "A love story during a time of war and uncertainty.",
      image: "https://via.placeholder.com/150",
      link: "/story/3",
    },
    {
      id: 4,
      title: "The Dragon's Curse",
      category: "Fantasy",
      createdAt: "2024-11-08",
      description: "A battle against the curse of an ancient dragon.",
      image: "https://via.placeholder.com/150",
      link: "/story/4",
    },
    {
      id: 5,
      title: "The Final Countdown",
      category: "Adventure",
      createdAt: "2024-11-15",
      description: "An epic race against time to stop a global disaster.",
      image: "https://via.placeholder.com/150",
      link: "/story/5",
    },
    {
      id: 6,
      title: "A Journey Beyond",
      category: "Adventure",
      createdAt: "2024-11-02",
      description: "A quest that leads to unforeseen challenges.",
      image: "https://via.placeholder.com/150",
      link: "/story/6",
    },
    {
      id: 7,
      title: "The Time Traveler's Dilemma",
      category: "Sci-Fi",
      createdAt: "2024-11-16",
      description: "A scientist struggles to fix the mistakes of the past.",
      image: "https://via.placeholder.com/150",
      link: "/story/7",
    },
    {
      id: 8,
      title: "The Forgotten Temple",
      category: "Mystery",
      createdAt: "2024-11-14",
      description: "Exploring a temple that has been lost to history.",
      image: "https://via.placeholder.com/150",
      link: "/story/8",
    },
    {
      id: 9,
      title: "Whispers in the Dark",
      category: "Horror",
      createdAt: "2024-11-18",
      description: "A chilling tale of what lurks in the shadows.",
      image: "https://via.placeholder.com/150",
      link: "/story/9",
    },
    {
      id: 10,
      title: "The Secret Garden",
      category: "Fantasy",
      createdAt: "2024-11-17",
      description: "A hidden world exists just beyond the garden gates.",
      image: "https://via.placeholder.com/150",
      link: "/story/10",
    },
    {
      id: 11,
      title: "Escape to Reality",
      category: "Drama",
      createdAt: "2024-11-20",
      description: "A young woman fights to break free from a life of illusions.",
      image: "https://via.placeholder.com/150",
      link: "/story/11",
    },
    {
      id: 12,
      title: "Beneath the City Lights",
      category: "Romance",
      createdAt: "2024-11-19",
      description: "A love story that blossoms in the heart of a bustling city.",
      image: "https://via.placeholder.com/150",
      link: "/story/12",
    },
    {
      id: 13,
      title: "The Last Warrior",
      category: "Fantasy",
      createdAt: "2024-11-22",
      description: "The fate of the world rests on the shoulders of the last warrior.",
      image: "https://via.placeholder.com/150",
      link: "/story/13",
    },
    {
      id: 14,
      title: "Echoes of the Past",
      category: "Historical",
      createdAt: "2024-11-23",
      description: "A man uncovers secrets that were buried for centuries.",
      image: "https://via.placeholder.com/150",
      link: "/story/14",
    },
    {
      id: 15,
      title: "The Silent Storm",
      category: "Thriller",
      createdAt: "2024-11-21",
      description: "A storm approaches, but the real danger lies within.",
      image: "https://via.placeholder.com/150",
      link: "/story/15",
    },
    {
      id: 16,
      title: "The Rebel's Path",
      category: "Action",
      createdAt: "2024-11-24",
      description: "A rebellious hero fights to change the course of history.",
      image: "https://via.placeholder.com/150",
      link: "/story/16",
    },
    {
      id: 17,
      title: "Chronicles of the Forgotten World",
      category: "Adventure",
      createdAt: "2024-11-25",
      description: "A journey into a world no one remembers.",
      image: "https://via.placeholder.com/150",
      link: "/story/17",
    },
    {
      id: 18,
      title: "The Ghost of Midnight",
      category: "Horror",
      createdAt: "2024-11-26",
      description: "A haunting mystery unfolds at the stroke of midnight.",
      image: "https://via.placeholder.com/150",
      link: "/story/18",
    },
    {
      id: 19,
      title: "The King’s Secret",
      category: "Fantasy",
      createdAt: "2024-11-27",
      description: "A king's dark secret threatens the kingdom's future.",
      image: "https://via.placeholder.com/150",
      link: "/story/19",
    },
    {
      id: 20,
      title: "The Phoenix Rises",
      category: "Fantasy",
      createdAt: "2024-11-28",
      description: "A legendary creature awakens to change the fate of the world.",
      image: "https://via.placeholder.com/150",
      link: "/story/20",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ m: 2, textAlign: "center" }}>
        Nơi lưu giữ hình ảnh của đại gia đình qua từng năm tháng và qua từng sự
        kiện, biến cố buồn vui
      </Typography>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
          Told Stories
        </Typography>

        <Grid container spacing={2}>
          {toldStories.map((story) => (
            <Grid item xs={12} sm={6} md={2} key={story.id}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)", // Add hover effect
                  },
                }}
                onClick={() => (window.location.href = story.link)}
              >
                <CardMedia
                  component="img"
                  alt={story.title}
                  height="140"
                  image={story.image}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {story.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {story.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Libraries;
