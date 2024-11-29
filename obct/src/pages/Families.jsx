import React, { useEffect, useState } from "react";
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

import FamilyImage from "../asset/images/family.jpg";
import supabase from "../supabaseClient"; // Import your supabase client
import { useSearchParams } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import SectionDivider from "../components/SectionDivider";
import { PRIMARY_COLOR } from "../constant";
import defaultVerical from "../asset/images/login_background.png";

const Families = () => {
  const [value, setValue] = React.useState(0);
  const [tabsData, setTabsData] = useState([]);
  const [B1Image, setB1Image] = useState();
  const [C7Image, setC7Image] = useState();
  const [OCImage, setOCImage] = useState();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tabIndex = parseInt(searchParams.get("tabIndex"), 10); // Get the tabIndex from URL
    if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < tabsData.length) {
      setValue(tabIndex); // Set the tab index
    }
  }, [searchParams, tabsData.length]);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update active tab on user interaction
  };

  useEffect(() => {
    // Fetch data from Supabase
    const fetchData = async () => {
      try {
        // Fetch families and related members
        const { data, error } = await supabase
          .from("family")
          .select(
            `
            familyId, 
            familyName, 
            familyHusband, 
            familyWife, 
            familyDescription, 
            familyChildrenNo, 
            familyMemberNo, 
            familyImageVertical,
            familyImageVertical1,
            familyImageHorizontal,
            familyImageHorizontal1,
            member (
              memberId, 
              memberName, 
              avatar, 
              memberPatronSt, 
              memberPatronStDate, 
              memberDOB, 
              memberMarriageDate, 
              memberSpecialInfo, 
              memberSpecialDate, 
              memberSpecialInfo1, 
              memberSpecialDate1, 
              memberSpecialInfo2, 
              memberSpecialDate2, 
              memberGen
            ),
            story (
              storyId,
              storyName
            )
          `
          )
          .order("familyId", { ascending: true });

        if (error) throw error;

        const orderedData = data
          .sort((a, b) => a.familyId - b.familyId) // Order families by familyId
          .map((family) => ({
            ...family,
            member: family.member.sort((a, b) => a.memberId - b.memberId), // Order members by memberId
          }));

        setB1Image(orderedData[1].familyImageVertical1);
        setC7Image(orderedData[7].familyImageVertical);
        setOCImage(orderedData[9].familyImageVertical);

        const combinedFamilyIds = [2, 8, 10];

        const combinedFamily = orderedData
          .filter((family) => combinedFamilyIds.includes(family.familyId))
          .reduce(
            (acc, family) => {
              // Merge each family’s data
              acc.familyName = "Line of Melchizedek"; // Combine family names if necessary
              acc.familyMemberNo += family.familyMemberNo; // Sum up family members
              acc.familyChildrenNo += family.familyChildrenNo; // Sum up children count
              acc.familyImageHorizontal =
                family.familyImageHorizontal || acc.familyImageHorizontal;
              acc.familyImageHorizontal1 =
                family.familyImageHorizontal1 || acc.familyImageHorizontal1;
              acc.familyImageVertical =
                family.familyImageVertical || acc.familyImageVertical;
              acc.familyImageVertical1 =
                family.familyImageVertical1 || acc.familyImageVertical1;
              // Merge members
              acc.members = [
                ...acc.members,
                ...family.member.map((member) => ({
                  avatar: member.avatar,
                  name: `${member.memberPatronSt} ${member.memberName}`,
                  dob: member.memberDOB,
                  patronDate: member.memberPatronStDate,
                  marriageDate: member.memberMarriageDate,
                  gen: member.memberGen,
                  specialInfo: member.memberSpecialInfo,
                  specialInfo1: member.memberSpecialInfo1,
                  specialInfo2: member.memberSpecialInfo2,
                  specialDate: member.memberSpecialDate,
                  specialDate1: member.memberSpecialDate1,
                  specialDate2: member.memberSpecialDate2,
                })),
              ];

              // Combine stories
              acc.stories = [
                ...acc.stories,
                ...family.story.map((story) => ({
                  storyId: story.storyId,
                  storyName: story.storyName,
                })),
              ];

              return acc;
            },
            {
              familyName: "",
              familyMemberNo: 0,
              familyChildrenNo: 0,
              familyImage: [],
              members: [],
              stories: [],
            }
          );

        // Add the combined family as the first family or wherever it fits in the `finalData`
        const finalData = orderedData
          .filter((family) => !combinedFamilyIds.includes(family.familyId)) // Exclude individual families that are combined
          .map((family) => ({
            familyName: family.familyName,
            familyMemberNo: family.familyMemberNo,
            familyChildrenNo: family.familyChildrenNo,
            familyImageHorizontal: family.familyImageHorizontal,
            familyImageHorizontal1: family.familyImageHorizontal1,
            familyImageVertical: family.familyImageVertical,
            familyImageVertical1: family.familyImageVertical1,
            members: family.member.map((member) => ({
              id: member.memberId,
              avatar: member.avatar,
              name: `${member.memberPatronSt} ${member.memberName}`,
              dob: member.memberDOB,
              patronDate: member.memberPatronStDate,
              marriageDate: member.memberMarriageDate,
              gen: member.memberGen,
              specialInfo: member.memberSpecialInfo,
              specialInfo1: member.memberSpecialInfo1,
              specialInfo2: member.memberSpecialInfo2,
              specialDate: member.memberSpecialDate,
              specialDate1: member.memberSpecialDate1,
              specialDate2: member.memberSpecialDate2,
            })),
            stories: family.story.map((story) => ({
              storyId: story.storyId,
              storyName: story.storyName,
            })),
          }));

        // Add the combined family to the beginning of the finalData array
        finalData.splice(1, 0, combinedFamily);

        setTabsData(finalData);
        console.log(finalData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const priests = [
    {
      name: "Antôn Vũ Sỹ Hoằng",
      priestDate: "21/12/1967",
      priestMotto: "Con cảm tạ Chúa muôn đời",
      died: "02/07/2023",
      image: OCImage,
    },
    {
      name: "Giuse Nguyễn Năng",
      title: "Tổng Giám Mục TGP. Sài Gòn",
      priestDate: "06/09/1990",
      priestMotto: "Vì họ, con xin thánh hiến chính mình",
      bishopDate: "08/09/2009",
      bishopMotto: "Hiệp thông - Phục vụ",
      image: B1Image,
    },
    {
      name: "Phaolô Nguyễn Ngọc Phương",
      title: "Giám đốc ĐCV Xuân Lộc",
      priestDate: "30/09/2005",
      priestMotto: "Tôi đã trở nên người phục vụ Tin Mừng",
      image: C7Image,
    },
  ];

  console.log(tabsData);

  return (
    <Box>
      <HeroImage image={FamilyImage} />

      <SectionDivider text="Gia phả dòng họ" />

      <HeroImage image={FamilyImage} />

      <SectionDivider text="Các gia đình" />

      <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 4 }}>
        {/* Tabs Header - Centered Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="family tabs"
            allowScrollButtonsMobile
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "warning.main", // Customize the indicator color
              },
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                label={tab.familyName}
                sx={{
                  fontSize: "1.2rem", // Increase font size (adjust as needed)
                  textTransform: "none", // Prevent automatic uppercase transformation
                }}
              />
            ))}
          </Tabs>
        </Box>

        {tabsData.map((family, index) => (
          <Box
            key={index}
            sx={{
              display: value === index ? "block" : "none",
              padding: 2,
            }}
          >
            {index === 1 ? (
              <Grid container spacing={2}>
                {/* Left Horizontal Image */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CardMedia
                    component="img"
                    image={family.familyImageHorizontal ?? FamilyImage} // First image
                    alt="Horizontal Image 1"
                    sx={{
                      width: "100%",
                      maxWidth: "700px", // Optional: Adjust image width for balance
                      borderRadius: "8px",
                      objectFit: "cover",
                      height: "auto",
                    }}
                  />
                </Grid>

                {/* Middle Vertical Image */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CardMedia
                    component="img"
                    image={family.familyImageVertical1} // Middle vertical image
                    alt="Vertical Image"
                    sx={{
                      height: "100%",
                      maxHeight: "500px", // Optional: Limit image height
                      borderRadius: "8px",
                      objectFit: "cover",
                      width: "auto",
                    }}
                  />
                </Grid>

                {/* Right Horizontal Image */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CardMedia
                    component="img"
                    image={family.familyImageHorizontal1 ?? FamilyImage} // Second horizontal image
                    alt="Horizontal Image 2"
                    sx={{
                      width: "100%",
                      maxWidth: "700px", // Optional: Adjust image width for balance
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
                          src={family.familyImageHorizontal}
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
                          src={family.familyImageVertical ?? defaultVerical}
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
                          src={family.familyImageVertical1 ?? defaultVerical}
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
                          src={family.familyImageHorizontal1}
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
                <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

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
                        Thông tin chung
                      </Typography>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px", // Add left padding for bullets
                          textAlign: "left", // Ensure left alignment
                          margin: 0, // Remove default margins for ul
                        }}
                      >
                        <li
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            lineHeight: "1.5",
                          }}
                        >
                          👩‍❤️‍👨 Ngày sinh nhật gia đình:{" "}
                          {family.members[0].marriageDate}
                        </li>
                        <li
                          style={{
                            marginBottom: "8px",
                            fontSize: "16px",
                            lineHeight: "1.5",
                          }}
                        >
                          👨‍👩‍👧‍👦 Số con: {family.familyChildrenNo}
                        </li>
                        {family.familyMemberNo && (
                          <li
                            style={{
                              marginBottom: "8px",
                              fontSize: "16px",
                              lineHeight: "1.5",
                            }}
                          >
                           👨‍👩‍👧‍👦 Số cháu: {family.familyMemberNo}
                          </li>
                        )}
                      </ul>
                    </Box>

                    {/* Lower Section: Header + Clickable List */}
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ mb: 2, textAlign: "left" }}
                      >
                        Chuyện về gia đình
                      </Typography>
                      <ul
                        style={{
                          listStyleType: "none",
                          paddingLeft: 0, // Remove padding for clickable list
                          textAlign: "left", // Ensure left alignment
                          margin: 0, // Remove default margins for ul
                        }}
                      >
                        {family.stories.map((item, index) => (
                          <li key={index} style={{ marginBottom: "12px" }}>
                            <a
                              href={item.item.storyId}
                              style={{
                                textDecoration: "none",
                                color: "#1976d2", // Link color
                                fontWeight: "bold",
                                fontSize: "16px",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.storyName}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}

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
              <Typography
                variant="h4"
                sx={{ mb: 2, textAlign: "center", color: PRIMARY_COLOR }}
              >
                Các thành viên
              </Typography>
              {index === 1 ? (
                <Grid container spacing={2} justifyContent="center">
                  {priests.map((item) => (
                    <Grid
                      item
                      xs={12}
                      md={4}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center", // Center all content inside the Card
                          padding: 2,
                          textDecoration: "none",
                          "&:hover": {
                            boxShadow: 6, // Add a hover effect
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.name}
                          sx={{
                            height: "467px", // Desired height
                            width: "335px", // Desired width
                            objectFit: "cover", // Ensure image fits dimensions
                            borderRadius: "8px",
                          }}
                        />
                        <CardContent
                          sx={{
                            textAlign: "center", // Center the text
                          }}
                        >
                          <Typography variant="body1">{item.name}</Typography>
                          {item.title && (
                            <Typography variant="body1">
                              {item.title}
                            </Typography>
                          )}
                          <Typography variant="body1">
                            Linh mục: {item.priestDate}
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            "<i>{item.priestMotto}</i>"
                          </Typography>
                          {item.bishopDate && (
                            <>
                              <Typography variant="body1">
                                Giám mục: {item.bishopDate}
                              </Typography>
                              <Typography variant="body1" color="textSecondary">
                              "<i>{item.bishopMotto}</i>"
                              </Typography>
                            </>
                          )}
                          {item.died && (
                            <Typography variant="body1">
                              &#10013; Về nhà Chúa: {item.died}
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 1200, // Adjust the max width for the list
                    margin: "0 auto", // Center the list horizontally
                  }}
                >
                  <Grid container spacing={2}>
                    {family.members.map((person) => (
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
                            <Typography variant="h6">{person.name}</Typography>
                            <Typography variant="body2">
                              👨‍👩‍👧‍👦 Thế hệ: {person.gen}
                            </Typography>
                            <Typography variant="body2">
                              &#x1F382; Ngày sinh: {person.dob}
                            </Typography>
                            <Typography variant="body2">
                              &#128124; Ngày bổn mạng: {person.patronDate}
                            </Typography>
                            {person.marriageDate && (
                              <Typography variant="body2">
                                &#128140; {person.id === 3 || person.id === 9
                                  ? "Ngày thụ phong linh mục"
                                  : "Ngày cưới"}
                                : {person.marriageDate}
                              </Typography>
                            )}
                            {person.id !== 3 &&
                              person.id !== 9 &&
                              person.specialInfo && (
                                <Typography variant="body2">
                                  &#10013; {person.specialInfo}:{" "}
                                  {person.specialDate}
                                </Typography>
                              )}
                            {person.id !== 3 &&
                              person.id !== 9 &&
                              person.specialInfo1 && (
                                <Typography variant="body2">
                                  {person.specialInfo1}: {person.specialDate1}
                                </Typography>
                              )}
                            {person.id !== 3 &&
                              person.id !== 9 &&
                              person.specialInfo2 && (
                                <Typography variant="body2">
                                  {person.specialInfo2}: {person.specialDate2}
                                </Typography>
                              )}
                          </Box>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </List>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Families;
