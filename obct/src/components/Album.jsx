import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient"; // Make sure this is the correct import for your Supabase client

const Album = ({ albumName }) => {
  const [imageUrl, setImageUrl] = useState(""); // For storing the image URL
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        // Fetching the public URL for the image
        const { data, error } = supabase.storage
          .from("images") // Ensure this matches your Supabase storage bucket name
          .getPublicUrl("member/1.png"); // Correct image path

        if (error) {
          // If there's an error, set it to the error state
          setError(`Error fetching public URL: ${error.message}`);
          console.error("Error fetching public URL:", error);
        } else {
          // If successful, update the image URL
          setImageUrl(data.publicUrl); // Data contains publicUrl
          console.log("Public URL fetched successfully:", data.publicUrl);
        }
      } catch (err) {
        // Catch unexpected errors
        setError("Unexpected error occurred while fetching image URL.");
        console.error("Unexpected error:", err);
      } finally {
        // Stop loading when the request completes
        setLoading(false);
      }
    };

    fetchImageUrl();
  }, []); // Empty dependency array means this runs only once after component mounts

  // Loading and error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{albumName}</h1>
      <div>
        {imageUrl ? (
          <img src={imageUrl} alt=" from album" />
        ) : (
          <p>No image found</p>
        )}
      </div>
    </div>
  );
};

export default Album;
