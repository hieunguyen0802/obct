import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleStory from "./pages/SingleStory";
import Families from "./pages/Families";
import Stories from "./pages/Stories";
import Libraries from "./pages/Libraries";
import AppWrapper from "./hooks/AppWrapper";
import Demo from "./pages/demo";


const App = () => (
  <AppWrapper>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/families" element={<Families />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/libraries" element={<Libraries />} />
        <Route path="/stories/:storyId" element={<SingleStory />} />
      </Routes>
      <Footer />
    </Router>
  </AppWrapper>
);

export default App;
