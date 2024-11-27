import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Fade,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR } from "../constant";

const NavbarWithModal = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [storyName, setStoryName] = useState("");
  const [tellerName, setTellerName] = useState("");
  const [storyCategory, setStoryCategory] = useState("");
  const [storyText, setStoryText] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const categories = ["Family", "Childhood", "Memories", "Lessons"]; // Replace with your categories

  // Handle opening and closing the drawer
  const handleMenuOpen = () => setOpen(true);
  const handleMenuClose = () => setOpen(false);

  // Handle opening and closing the modal
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(true);

      // Clear form fields after submission
      setStoryName("");
      setTellerName("");
      setStoryCategory("");
      setStoryText("");
    }, 2000);
  };

  const menuItems = [
    { name: "Gia đình", path: "/families" },
    { name: "Chuyện nhà tôi", path: "/stories" },
    { name: "Thư viện", path: "/libraries" },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: PRIMARY_COLOR }}>
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Site Title */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", md: "left" },
              textDecoration: "none",
              color: "inherit",
              fontWeight: 900,
              fontFamily: "serif",
              fontSize: "1.5rem",
            }}
          >
            Đại Gia Đình OBCT
          </Typography>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  textTransform: "none",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  fontFamily: "serif",
                }}
              >
                {item.name}
              </Button>
            ))}

            {/* Call to Action Button */}
            <Button
              variant="contained"
              onClick={handleModalOpen}
              sx={{
                textTransform: "none",
                fontSize: "1.2rem",
                backgroundColor: "#fff",
                color: PRIMARY_COLOR,
                fontWeight: 700,
                borderRadius: "20px",
                padding: "8px 16px",
                border: `2px solid ${PRIMARY_COLOR}`,
                marginLeft: "16px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Kể chuyện
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Drawer
            anchor="top"
            open={open}
            onClose={handleMenuClose}
            variant="temporary"
            PaperProps={{
              sx: {
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                backgroundColor: "white",
                position: "relative",
              },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleMenuClose}
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                color: PRIMARY_COLOR,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                onClick={handleMenuClose}
                sx={{
                  textTransform: "none",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  width: "80%",
                  textAlign: "center",
                  color: PRIMARY_COLOR,
                }}
              >
                {item.name}
              </Button>
            ))}

            {/* CTA in Mobile Menu */}
            <Button
              variant="contained"
              onClick={() => {
                handleMenuClose();
                handleModalOpen();
              }}
              sx={{
                textTransform: "none",
                fontSize: "2rem",
                backgroundColor: "#fff",
                color: PRIMARY_COLOR,
                fontWeight: 700,
                borderRadius: "20px",
                padding: "12px 24px",
                border: `2px solid ${PRIMARY_COLOR}`,
                marginTop: "16px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Kể chuyện
            </Button>
          </Drawer>
        </Toolbar>
      </AppBar>

      {/* Modal */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleModalClose}
            sx={{ position: "absolute", top: 8, right: 8, color: PRIMARY_COLOR }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Content */}
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontWeight: 700, mb: 2 }}
          >
            Những câu chuyện chưa kể...
          </Typography>
          <Typography
            variant="h6"
            sx={{ m: 2, textAlign: "center", fontStyle: "italic" }}
          >
            Hãy thả lỏng cơ thể và thư giãn đầu óc, nhớ lại những ký ức và câu
            chuyện về người thân, rồi viết xuống bên dưới nhé.
          </Typography>

          {/* Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              my: 2,
              padding: 2,
              backgroundColor: "background.paper",
              borderRadius: "8px",
              boxShadow: 3,
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
              <Button
                variant="contained"
                type="submit"
                disabled={loading}
                sx={{
                  backgroundColor: PRIMARY_COLOR,
                  color: "white",
                  // eslint-disable-next-line no-template-curly-in-string
                  "&:hover": { backgroundColor: "darken(${PRIMARY_COLOR}, 0.2)" },
                }}
                fullWidth
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </Box>

          {/* Success Message */}
          {successMessage && (
            <Fade in={successMessage}>
              <Alert severity="success" sx={{ mt: 2 }}>
                Story submitted successfully!
              </Alert>
            </Fade>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default NavbarWithModal;
