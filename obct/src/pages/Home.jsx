import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import HomeImage from "../asset/images/home.jpg";
import Grandpas from "../asset/images/grandpas.jpg";
import bacNang from "../asset/images/bacNang.jpg";
import B2 from "../asset/images/B2.jpg";
import B3 from "../asset/images/B3.jpg";
import B4 from "../asset/images/B4.jpg";
import C5 from "../asset/images/C5.jpg";
import C6 from "../asset/images/C6.jpg";
import C8 from "../asset/images/C8.jpg";

import { PRIMARY_COLOR } from "../constant";
import HeroImage from "../components/HeroImage";
import SectionDivider from "../components/SectionDivider";



const Home = () => {
  const person = {
    grandpa: {
      name: "Ông tôi - Giuse Nguyễn Văn Tài",
      description:
        "Người ông thương cháu - người cha nghiêm khắc nhưng đầy tình thương",
    },
    grandma: {
      name: "Bà tôi - Maria Vũ Thị Ngũ",
      description:
        "Người mẹ hiền lành, tảo tần lo cho các con - người chị em chăm sóc tận tâm",
    },
    image: Grandpas,
  };

  const families = [
    {
      id: 1,
      name: "Bác Giuse Nguyễn Năng",
      image: bacNang,
      description: "Tổng Giám Mục TGP. Sài Gòn",
    },
    {
      id: 2,
      name: "Chú Phaolô Nguyễn Ngọc Phương",
      image: bacNang,
      description: "Giám Đốc ĐCV Xuân Lộc",
    },
    {
      id: 3,
      husband: "Bác Phanxico Xavie Nguyễn Thái",
      wife: "Maria Goretti Nguyễn Lan Anh",
      image: B2,
      description: "và các con, các cháu",
    },
    {
      id: 4,
      husband: "Bác Anton Nguyễn Xuân Thanh",
      wife: "Maria Nguyễn Thị Minh",
      image: B3,
      description: "và các con, các cháu",
    },
    {
      id: 5,
      husband: "Chú Gioan Baotixita Nguyễn Quang Trung",
      wife: "Anna Hoàng Thị Minh Thanh",
      image: B4,
      description: "và các con, các cháu",
    },
    {
      id: 6,
      husband: "Chú Phaolô Nguyễn Văn Đoạt",
      wife: "Maria Nguyễn Thị Tuyết Vân",
      image: C5,
      description: "và các con, các cháu",
    },
    {
      id: 7,
      husband: "Chú Giuse Nguyễn Quang Trị",
      wife: "Maria Nguyễn Thị Kim Loan",
      image: C6,
      description: "và các con, các cháu",
    },

    {
      id: 8,
      husband: "Chú Vincent Nguyễn Duy Anh Hào",
      wife: "Maria Goretti Nguyễn Thị Tuyết Dung",
      image: C8,
      description: "và các con, các cháu",
    },
  ];

  return (
    <Box>
      {/* Top Section: Large Image */}
      <HeroImage image={HomeImage}
      />
      <SectionDivider text="Ông bà kính yêu" />
      {/* Second Section */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            borderColor: PRIMARY_COLOR,
            p: 3,
            gap: 2,
          }}
        >
          {/* Left Info Cell */}
          <Box
            component={Link} // Use Link to wrap the Box
            to={`/grandma/${person.grandma.id}`} // Set the target route
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "center" },
              p: { xs: 0, md: 2 },
              textDecoration: "none", // Remove underline styling
              color: "inherit", // Inherit text color
              "&:hover": {
                cursor: "pointer", // Optional: Add a pointer cursor for better UX
                color: "primary.main", // Optional: Change text color on hover
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {person.grandma.name}
            </Typography>
            <Typography variant="body1">
              {person.grandma.description}
            </Typography>
          </Box>

          {/* Middle Image Cell */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={person.image}
              alt={person.name}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>

          {/* Right Info Cell */}
          <Box
            component={Link} // Use Link to wrap the Box
            to={`/grandma/${person.grandma.id}`} // Set the target route
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "center" },
              p: { xs: 0, md: 2 },
              textDecoration: "none", // Remove underline styling
              color: "inherit", // Inherit text color
              "&:hover": {
                cursor: "pointer", // Optional: Add a pointer cursor for better UX
                color: "primary.main", // Optional: Change text color on hover
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {person.grandpa.name}
            </Typography>
            <Typography variant="body1">
              {person.grandpa.description}
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider
        sx={{
          width: "50%", // Divider width
          mx: "auto",
          borderColor: PRIMARY_COLOR,
          borderWidth: "4px", // Divider thickness
          mb: 4, // Spacing below the divider
        }}
      />

      {/* Section Below Divider */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: PRIMARY_COLOR }}
        >
          Hoa trái tình yêu
        </Typography>
      </Box>

      {/* Middle Section: Featured Products */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {families.map((family) => (
            <Grid
              item
              xs={12}
              md={6}
              key={family.name}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {/* Wrap the Card in a Link */}
              <Card
                component={Link} // Use Link component to wrap the Card
                to={`/family/${family.id}`} // Navigate to the desired page
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
                  image={family.image}
                  alt={family.name}
                  sx={
                    family.id === 1 || family.id === 2
                      ? {
                          height: "447px", // Set your desired height
                          width: "335px", // Set your desired width
                          objectFit: "cover", // Adjust how the image fits within the given dimensions
                          borderRadius: "8px", // Optional: Add rounded corners
                        }
                      : {
                          height: "270px", // Set your desired height
                          width: "425px", // Set your desired width
                          objectFit: "cover", // Adjust how the image fits within the given dimensions
                          borderRadius: "8px", // Optional: Add rounded corners
                        }
                  }
                />
                <CardContent
                  sx={{
                    textAlign: "center", // Center the text inside CardContent
                  }}
                >
                  {family.id === 1 || family.id === 2 ? (
                    <Typography variant="h6" gutterBottom>
                      {family.name}
                    </Typography>
                  ) : (
                    <>
                      <Typography variant="h6" gutterBottom>
                        {family.husband}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {family.wife}
                      </Typography>
                    </>
                  )}
                  <Typography variant="body1" color="textSecondary">
                    {family.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
