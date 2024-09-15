import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import MyContext from "../context/MyContext";
import Sidebar from "../components/navbar/Sidebar";
import RightSidebar from "../components/navbar/RightSidebar";
import MainSection from "../components/mainsection/MainSection";
import Header from "../components/header/Header";
import TradeLog from "../components/mainsection/TradeLog";

function MyDashboard() {
  const {
    isLeftSideBarOpen,
    isRightSideBarOpen,
    isBottomSideBarOpen,
    toggleRightSideBar,
    toggleBottomSideBar,
    toggleLeftSideBar,
    dashboardScreen,
    setDashboardScreen,
    setIsRightSideBarOpen,
  } = useContext(MyContext);

  useEffect(() => {
    setIsRightSideBarOpen(true);
  }, []);
  
  return (
    <Layout>
      <div className="layout-main-content">
        <MainSection />
        <TradeLog />
      </div>

      {/* <div
        className="layout-rsidebar right"
        style={{
          width: isRightSideBarOpen ? "280px" : "0px",
          transition: "width 0.3s ease-in-out",
          //display: !isRightSideBarOpen ? "none" : "flex",
        }}
      >
        <RightSidebar />
      </div> */}
    </Layout>
  );
}

export default MyDashboard;
