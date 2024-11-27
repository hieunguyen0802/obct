import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const SingleStory = () => {
  const storyData = {
    id: "1",
    title: "A Memorable Family Trip",
    teller: "John Doe",
    category: "Family",
    content:
      "Last summer, our family went on an unforgettable trip to the mountains. It was a journey filled with adventure, laughter, and moments of togetherness that I'll always cherish.",
    comments: [
      {
        id: "c1",
        name: "Jane Smith",
        comment: "Such a beautiful story! Thanks for sharing.",
      },
      {
        id: "c2",
        name: "Alice Johnson",
        comment: "This reminds me of our own family trips!",
      },
      {
        id: "c3",
        name: "Bob Williams",
        comment: "Amazing! I can feel the joy through your words.",
      },
    ],
  };
  
  const [comments, setComments] = useState(storyData.comments);
  const [newComment, setNewComment] = useState("");
  const [commenterName, setCommenterName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && commenterName.trim()) {
      const newCommentObj = {
        id: `c${comments.length + 1}`,
        name: commenterName,
        comment: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setCommenterName("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#f1f2f6",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
          width: "100%",
          maxWidth: 800,
        }}
      >
        {/* Story Details */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {storyData.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", marginBottom: 1 }}
        >
          Told by: <strong>{storyData.teller}</strong>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", marginBottom: 2 }}
        >
          Category: {storyData.category}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4, lineHeight: 1.8 }}>
          {storyData.content}
        </Typography>

        <Divider sx={{ marginBottom: 4 }} />

        {/* Comments Section */}
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Comments ({comments.length})
        </Typography>

        <List sx={{ marginBottom: 4 }}>
          {comments.map((comment) => (
            <ListItem key={comment.id} sx={{ marginBottom: 2 }}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {comment.name}
                  </Typography>
                }
                secondary={comment.comment}
              />
            </ListItem>
          ))}
        </List>

        {/* Add Comment Section */}
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Add a Comment
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "600px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleAddComment();
          }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
            sx={{ borderRadius: 1 }}
          />
          <TextField
            label="Your Comment"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ borderRadius: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              alignSelf: "flex-start",
              borderRadius: 1,
              marginTop: 2,
            }}
          >
            Add Comment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleStory;
