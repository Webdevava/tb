import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  if (token) {
    localStorage.setItem("token", token); // Store token in localStorage
    console.log("Token received and stored:", token); // Debugging info
    navigate("/mainHome"); // Redirect to the main home page
  } else {
    console.error("No token found in URL");
    navigate("/login"); // Redirect to login if no token
  }
}, [location.search, navigate]);


  return <div>Loading...</div>;
};

export default OAuthSuccess;
