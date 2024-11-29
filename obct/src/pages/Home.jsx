import React, { useEffect, useState } from "react";
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
import { PRIMARY_COLOR } from "../constant";
import HeroImage from "../components/HeroImage";
import SectionDivider from "../components/SectionDivider";
import supabase from "../supabaseClient";

const Home = () => {
  const [families, setFamilies] = useState([]); // State to store families data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFamilies = async () => {
      const { data, error } = await supabase
        .from("family") // Table name in your Supabase database
        .select("*") // Adjust columns as needed, e.g., "id, husband, wife, image, description"
        .order("familyId", { ascending: true });

      if (error) {
        console.error("Error fetching families:", error);
        setError(error.message);
      } else {
        setFamilies(data);
      }
      setLoading(false);
    };

    fetchFamilies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const person1 = {
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


  const mapFamilyIdToTabIndex = (familyId) => {
    const mapping = {
      2: 1,
      8: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
      9: 6,
    };
    return mapping[familyId] || 0; // Default to tabIndex 0 if familyId is not in the mapping
  };


  return (
    <Box>
      {/* Top Section: Large Image */}
      <HeroImage image={HomeImage} />
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
            to={`/family/1?tabIndex=0`} // Set the target route
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
              {person1.grandma.name}
            </Typography>
            <Typography variant="body1">
              {person1.grandma.description}
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
              src={families[0].familyImageVertical}
              alt={families[0].familyImageVertical}
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
            to={`/family/1?tabIndex=0`} // Set the target route
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
              {person1.grandpa.name}
            </Typography>
            <Typography variant="body1">
              {person1.grandpa.description}
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
          {/* First, filter familyId 2 and 8 */}
          {[...families]
            .filter((family) => [2, 8].includes(family.familyId)) // Filter only familyId 2 and 8
            .map((family) => (
              <Grid
                item
                xs={12}
                md={6}
                key={family.name}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  component={Link}
                  to={`/family/${family.familyId}?tabIndex=${mapFamilyIdToTabIndex(family.familyId)}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    textDecoration: "none",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  {family.familyId === 2 || family.familyId === 8 ? (
                    <CardMedia
                      component="img"
                      image={family.familyImageVertical}
                      alt={family.familyImageVertical}
                      sx={{
                        height: "447px", // Set the height
                        width: "335px", // Set the width
                        objectFit: "cover", // Adjust the image's fit within the given dimensions
                        borderRadius: "8px", // Optional: Add rounded corners
                      }}
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      image={family.familyImageHorizontal}
                      alt={family.familyImageHorizontal}
                      sx={{
                        height: "270px",
                        width: "425px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}

                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                      {family.familyHusband}
                    </Typography>
                    {family.familyId !== 2 && family.familyId !== 8 && (
                      <Typography variant="h6" gutterBottom>
                        {family.familyWife}
                      </Typography>
                    )}
                    <Typography variant="body1" color="textSecondary">
                      {family.familyDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          {/* Now render the other families */}
          {families
            .filter((family) => ![2, 8, 1, 10].includes(family.familyId)) // Filter out familyId 2 and 8
            .map((family) => (
              <Grid
                item
                xs={12}
                md={6}
                key={family.name}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  component={Link} // Wrap the Card in a Link
                  to={`/family/${family.familyId}?tabIndex=${mapFamilyIdToTabIndex(family.familyId)}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Horizontally center all content inside the Card
                    padding: 2,
                    textDecoration: "none", // Remove the default underline styling from the Link
                    "&:hover": {
                      boxShadow: 6, // Hover effect (optional)
                    },
                  }}
                >
                  {family.familyId === 2 || family.familyId === 8 ? (
                    <CardMedia
                      component="img"
                      image={family.familyImageVertical}
                      alt={family.familyImageVertical}
                      sx={{
                        height: "447px", // Set the height
                        width: "335px", // Set the width
                        objectFit: "cover", // Adjust the image's fit within the given dimensions
                        borderRadius: "8px", // Optional: Add rounded corners
                      }}
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      image={family.familyImageHorizontal}
                      alt={family.familyImageHorizontal}
                      sx={{
                        height: "270px",
                        width: "425px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}

                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                      {family.familyHusband}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: 24, margin: "0 8px", color: "red" }}
                    >
                      &#10084; {/* Heart symbol */}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                      {family.familyWife}
                    </Typography><Typography variant="h6" gutterBottom>
                      {family.familyDescription}
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
