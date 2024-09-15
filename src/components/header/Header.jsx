import React, { useContext } from "react";
import "../../styles/header.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Nav from "./Nav";
import MyContext from "../../context/MyContext";

function Header() {
  const { isSideBarOpen } = useContext(MyContext);
  return (
    <header
      //id="header"
      style={{
        // width: isSideBarOpen ? "80%" : "100%",
        //position:  "fixed",
      }}
      className="header d-flex align-items-center lay-header"
    >
      {/* {Logo} */}
      <Logo />
      {/* {Search bar} */}
      {/* <Searchbar/> */}
      {/* {nav} */}
      <Nav />
    </header>
  );
}

export default Header;
