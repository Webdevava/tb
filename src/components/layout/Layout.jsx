import React, { useContext } from "react";
import "../../styles/layout.css";
import Sidebar from "../navbar/Sidebar";
import RightSidebar from "../navbar/RightSidebar";
import MainSection from "../../components/mainsection/MainSection";
import Header from "../../components/header/Header";
import MyContext from "../../context/MyContext";
import TradeLog from "../../components/mainsection/TradeLog";
// import Login from "../../components/Login/login";

function Layout({children}) {
  const {
    isLeftSideBarOpen,
    isRightSideBarOpen,
    isBottomSideBarOpen,
    toggleRightSideBar,
    toggleBottomSideBar,
    toggleLeftSideBar,
  } = useContext(MyContext);
  return (
    <div className="layout-container">
      <div className="layout-header">
        <Header />
      </div>

      <div
        className="layout-sidebar "
        style={{ width: isLeftSideBarOpen ? "15rem" : "5rem" }}
      >
        <Sidebar />
      </div>

      {children}

      <div
        className="layout-rsidebar right"
        style={{
          width: isRightSideBarOpen ? "280px" : "0px",
          transition: "width 0.3s ease-in-out",
          //display: !isRightSideBarOpen ? "none" : "flex",
        }}
      >
        <RightSidebar />
      </div>
      {/* <RightSidebar /> */}
    </div>

    // <div className="layout1-container">
    //   <div className="layout1-header"><Header/></div>
    //   <div className="layout1-sidebar"><Sidebar/></div>
    //   <div ><MainSection/></div>
    //   <div ><RightSidebar/></div>
    // </div>

    // <div className="position-relative ">
    //   <Header />
    //   <div className="tradelogtable1">
    //     <Sidebar />
    //     <MainSection />
    //     <RightSidebar />
    //   </div>
    // </div>
  );
}

export default Layout;
