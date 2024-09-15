import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/profile.png";
import { LogOut } from "lucide-react"; // Assuming you're using lucide-react for icons
import "../../styles/navAvatar.css";

function NavAvatar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setUserName(storedName);
    } else {
      setUserName("User"); // Default name if not found in localStorage
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <li className="nav-item d-flex align-items-center">
      <div className="nav-profile d-flex align-items-center">
        <img
          src={profileIcon}
          alt="profile"
          className="rounded-circle profileDp"
        />
        <span
          style={{
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "500",
            marginRight: "10px",
          }}
        >
          {userName}
        </span>
        <button
          onClick={handleLogout}
          className="btn btn-link p-1 mt-3"
          title="Logout"
        >
          <LogOut size={20} color="#333" />
        </button>
      </div>
    </li>
  );
}

export default NavAvatar;
