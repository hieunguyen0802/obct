import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleStory from "./pages/SingleStory";
import Families from "./pages/Families";
import Stories from "./pages/Stories";
import Libraries from "./pages/Libraries";
import Demo from "./pages/demo";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound"; // Import the 404 Page
import AppWrapper from "./hooks/AppWrapper";

const AppContent = () => {
  const location = useLocation();
  const { authenticated } = useAuth(); // Get authentication status

  const isLoginPage = location.pathname === "/login"; // Check if the current route is login page

  return (
    <>
      {/* Conditionally render Navbar and Footer based on the current route */}
      {!isLoginPage && authenticated && (
        <>
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/families"
          element={<PrivateRoute element={<Families />} />}
        />
        <Route
          path="/family/:familyId"
          element={<PrivateRoute element={<Families />} />}
        />
        <Route
          path="/stories"
          element={<PrivateRoute element={<Stories />} />}
        />
        <Route
          path="/libraries"
          element={<PrivateRoute element={<Libraries />} />}
        />
        <Route
          path="/stories/:storyId"
          element={<PrivateRoute element={<SingleStory />} />}
        />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>

      {/* Conditionally render Footer only if not on login page */}
      {!isLoginPage && authenticated && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <AppWrapper>
        <AppContent />
      </AppWrapper>
    </AuthProvider>
  </Router>
);

export default App;
