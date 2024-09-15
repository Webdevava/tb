import React from "react";
import themeIcon from "../../assets/images/theme.png";

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <img src={themeIcon} alt="theme icon" className="nav-link nav-icon"  style={{ width: 28, height: 28 }} />
      {/* <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number bg-danger">4</span>
      </a> */}
    </li>
  );
}

export default NavMessage;
