import React from "react";
import "../../styles/nav.css";
import NavNotice from "./NavNotice";
import NavTheme from "./NavTheme";
import NavAvatar from "./NavAvatar";

function Nav() {
  return (
    <div className="header-nav ms-auto">
      <nav className="d-flex align-items-center">
        {/* <NavTheme /> */}
        <NavNotice />
        <NavAvatar />
      </nav>
    </div>
  );
}

export default Nav;
