import React from "react";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  ImageList,
  ImageListItem,
  CardContent,
  Card,
} from "@mui/material";

import FamilyPage from "../asset/images/familyPage/family.jpg";

import bacNang from "../asset/images/bacNang.jpg";
import B2 from "../asset/images/B2.jpg";
import PriestSit from "../asset/images/familyPage/menkixede_sit.jpg";
import PriestStand from "../asset/images/familyPage/menkixede_stand.jpg";

import HeroImage from "../components/HeroImage";
import SectionDivider from "../components/SectionDivider";
import { PRIMARY_COLOR } from "../constant";

const Families = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const people = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=1",
      description: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/100?img=2",
      description: "Product Manager",
    },
    {
      id: 3,
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/100?img=3",
      description: "Designer",
    },
    {
      id: 4,
      name: "Emily Johnson",
      avatar: "https://i.pravatar.cc/100?img=4",
      description: "Marketing Specialist",
    },
  ];

  // Example tab data
  const tabsData = [
    {
      label: "Melchizedek Line",
      imageCollage: [PriestSit, PriestStand],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
    {
      label: "Gia đình bác Thái",
      imageCollage: [B2, bacNang, bacNang, B2],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
    {
      label: "Gia đình bác Thanh",
      imageCollage: [
        "/images/image5.jpg",
        "/images/image6.jpg",
        "/images/image7.jpg",
        "/images/image8.jpg",
      ],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
    {
      label: "Gia đình chú Trung",
      imageCollage: [
        "/images/image9.jpg",
        "/images/image10.jpg",
        "/images/image11.jpg",
        "/images/image12.jpg",
      ],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
    {
      label: "Gia đình cô Vân",
      imageCollage: [
        "/images/image13.jpg",
        "/images/image14.jpg",
        "/images/image15.jpg",
        "/images/image16.jpg",
      ],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
    {
      label: "Gia đình cô Loan",
      imageCollage: [
        "/images/image17.jpg",
        "/images/image18.jpg",
        "/images/image19.jpg",
        "/images/image20.jpg",
      ],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
    {
      label: "Gia đình cô Dung",
      imageCollage: [
        "/images/image21.jpg",
        "/images/image22.jpg",
        "/images/image23.jpg",
        "/images/image24.jpg",
      ],
      info: {
        title: "Learn More About Our Services",
        description:
          "Explore the key points below and dive deeper into additional resources to get the most out of our offerings.",
        upperList: [
          "Comprehensive service options tailored to your needs.",
          "Expert advice from industry professionals.",
          "Affordable plans designed for flexibility.",
          "24/7 customer support to assist you anytime.",
        ],
        lowerList: [
          { text: "How It Works", link: "https://example.com/how-it-works" },
          { text: "Pricing Plans", link: "https://example.com/pricing" },
          {
            text: "Customer Testimonials",
            link: "https://example.com/testimonials",
          },
          { text: "FAQs", link: "https://example.com/faqs" },
          { text: "Contact Us", link: "https://example.com/contact" },
        ],
      },
    },
  ];
  return (
    <Box>
      <HeroImage image={FamilyPage} />

      <SectionDivider text="Gia phả dòng họ" />

      <HeroImage image={FamilyPage} />

      <SectionDivider text="Các gia đình" />

      <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 4 }}>
        {/* Tabs Header - Centered Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "warning.main", // Change the underline to warning color
              },
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        {/* Tab Content */}
        {tabsData.map((tab, index) => (
          <Box
            key={index}
            sx={{
              display: value === index ? "block" : "none",
              padding: 2,
            }}
          >
            {index === 0 ? (
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "center", // Center align both images vertically
                  textAlign: "center",
                }}
              >
                {/* Left Horizontal Image */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CardMedia
                    component="img"
                    image={tab.imageCollage[0]} // First image
                    alt="Horizontal Image 1"
                    sx={{
                      width: "100%",
                      maxWidth: "500px", // Optional: Limit image width
                      borderRadius: "8px",
                      objectFit: "cover",
                      height: "auto",
                    }}
                  />
                </Grid>

                {/* Right Horizontal Image */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CardMedia
                    component="img"
                    image={tab.imageCollage[1]} // Second image
                    alt="Horizontal Image 2"
                    sx={{
                      width: "100%",
                      maxWidth: "500px", // Optional: Limit image width
                      borderRadius: "8px",
                      objectFit: "cover",
                      height: "auto",
                    }}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {/* Left: Image Collage */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                    <ImageList
                      sx={{ width: 500, height: "auto" }} // Adjust width and height as needed
                      cols={2} // Two columns for layout
                      gap={16} // Space between images
                    >
                      {/* Top-left image (horizontal) */}
                      <ImageListItem
                        cols={1}
                        rows={1}
                        sx={{ gridRow: "span 1", gridColumn: "span 1" }}
                      >
                        <img
                          src={tabsData[1].imageCollage[0]}
                          alt="Top Left"
                          style={{
                            borderRadius: "8px",
                            objectFit: "cover",
                            width: "100%",
                            height: "150px", // Horizontal
                          }}
                        />
                      </ImageListItem>
                      {/* Top-right image (vertical) */}
                      <ImageListItem
                        cols={1}
                        rows={2}
                        sx={{ gridRow: "span 2", gridColumn: "span 1" }}
                      >
                        <img
                          src={tabsData[1].imageCollage[1]}
                          alt="Top Right"
                          style={{
                            borderRadius: "8px",
                            objectFit: "cover",
                            width: "100%",
                            height: "300px", // Vertical
                          }}
                        />
                      </ImageListItem>
                      {/* Bottom-left image (vertical) */}
                      <ImageListItem
                        cols={1}
                        rows={2}
                        sx={{ gridRow: "span 2", gridColumn: "span 1" }}
                      >
                        <img
                          src={tabsData[1].imageCollage[2]}
                          alt="Bottom Left"
                          style={{
                            borderRadius: "8px",
                            objectFit: "cover",
                            width: "100%",
                            height: "300px", // Vertical
                          }}
                        />
                      </ImageListItem>
                      {/* Bottom-right image (horizontal) */}
                      <ImageListItem
                        cols={1}
                        rows={1}
                        sx={{ gridRow: "span 1", gridColumn: "span 1" }}
                      >
                        <img
                          src={tabsData[1].imageCollage[3]}
                          alt="Bottom Right"
                          style={{
                            borderRadius: "8px",
                            objectFit: "cover",
                            width: "100%",
                            height: "150px", // Horizontal
                          }}
                        />
                      </ImageListItem>
                    </ImageList>
                  </Box>
                </Grid>

                {/* Right: Information */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                      width: "100%", // Ensure full width for alignment
                      maxWidth: "600px", // Optional: Limit the width
                    }}
                  >
                    {/* Upper Section: Unordered List */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{ mb: 2, textAlign: "left" }}
                      >
                        {tab.info.title}
                      </Typography>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px", // Add left padding for bullets
                          textAlign: "left", // Ensure left alignment
                          margin: 0, // Remove default margins for ul
                        }}
                      >
                        {tab.info.upperList.map((item, index) => (
                          <li
                            key={index}
                            style={{
                              marginBottom: "8px",
                              fontSize: "16px",
                              lineHeight: "1.5",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Box>

                    {/* Lower Section: Header + Clickable List */}
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ mb: 2, textAlign: "left" }}
                      >
                        Additional Resources
                      </Typography>
                      <ul
                        style={{
                          listStyleType: "none",
                          paddingLeft: 0, // Remove padding for clickable list
                          textAlign: "left", // Ensure left alignment
                          margin: 0, // Remove default margins for ul
                        }}
                      >
                        {tab.info.lowerList.map((item, index) => (
                          <li key={index} style={{ marginBottom: "12px" }}>
                            <a
                              href={item.link}
                              style={{
                                textDecoration: "none",
                                color: "#1976d2", // Link color
                                fontWeight: "bold",
                                fontSize: "16px",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
            {/* Content for Tab */}

            <Divider
              sx={{
                width: "50%", // Divider width
                mx: "auto", // Center the divider
                my: 2,
                borderColor: PRIMARY_COLOR,
                borderWidth: "2px", // Divider thickness
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
                Các thành viên
              </Typography>
              {index === 0 ? 
               <Card
               sx={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center", // Horizontally center all content inside the Card
                 padding: 2, // Add some padding
                 textDecoration: "none", // Remove the default underline styling from the Link
                 "&:hover": {
                   boxShadow: 6, // Add a hover effect (optional)
                 },
               }}
             >
               <CardMedia
                 component="img"
                 image= {bacNang}
                 alt= "text"
                 sx={{
                         height: "447px", // Set your desired height
                         width: "335px", // Set your desired width
                         objectFit: "cover", // Adjust how the image fits within the given dimensions
                         borderRadius: "8px", // Optional: Add rounded corners
                       }}
               />
               <CardContent
                 sx={{
                   textAlign: "center", // Center the text inside CardContent
                 }}
               >
                 <Typography variant="body1" color="textSecondary">
                   "Bác Năng"
                 </Typography>
               </CardContent>
             </Card>
              :
              <List
              sx={{
                width: "100%",
                maxWidth: 800, // Adjust the max width for the list
                margin: "0 auto", // Center the list horizontally
              }}
            >
              <Grid container spacing={2}>
                {people.map((person) => (
                  <Grid item xs={12} sm={6} key={person.id}>
                    <ListItem
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 2,
                      }}
                    >
                      {/* Left: Avatar */}
                      <ListItemAvatar>
                        <Avatar
                          alt={person.name}
                          src={person.avatar}
                          sx={{ width: 100, height: 100 }} // Bigger avatar
                        />
                      </ListItemAvatar>

                      {/* Right: Name and Description */}
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {person.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {person.description}
                        </Typography>
                      </Box>
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
              }
             
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Families;
