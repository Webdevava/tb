import React, { useContext, useState } from "react";
import "../../styles/rightsidebar.css";
import "../../styles/sidebar.css";
import MyContext from "../../context/MyContext";
import CategoryIcon from "../../assets/images/Category.png";
import accountIcon from "../../assets/images/account.png";
import Account_partnerIcon from "../../assets/images/Account_Partner.png";
import performance_analyticsIcon from "../../assets/images/performance_analytics.png";
import DocumentIcon from "../../assets/images/Document.png";
import rightsideIcon from "../../assets/icons/right-side.png";
import ProfitLossChart from "../charts/ProfitLossChart";
import RulesChart from "../charts/RulesChart";
import TradesTaken from "../charts/TradesTaken";
import WinChartRate from "../charts/WinChartRate";
import CalendarChart from "../charts/CalendarChart";

function RightSidebar() {
  const { isRightSideBarOpen, toggleRightSideBar } = useContext(MyContext);
  const [navOptions, setNavOptions] = useState([
    { name: "Dashboard", isSelected: true, icon: CategoryIcon },
    { name: "My Journal", isSelected: false, icon: "bi bi-file-text" },
    {
      name: "Performance Analytics",
      isSelected: false,
      icon: "bi bi-suitcase-lg",
    },
    {
      name: "Accountability Partner",
      isSelected: false,
      icon: "bi bi-people",
    },
    { name: "My Account", isSelected: false, icon: "bi bi-person" },
  ]);

  const onClickNavItem = (index) => {
    const newNavOptions = navOptions.map((it, idx) => {
      if (index === idx) {
        it.isSelected = true;
      } else {
        it.isSelected = false;
      }
      return it;
    });
    setNavOptions(newNavOptions);
  };

  return (
    isRightSideBarOpen && (
      <div
        style={{
          width: "100%",
          paddingLeft: 14,
          paddingRight: 14,
          backgroundColor: "#fff",
          position: "relative",
          width: isRightSideBarOpen ? "280px" : "0px",
          transition: "width 0.3s ease-in-out",
        }}
        className="d-flex flex-column "
      >
        <div
          className="position-absolute trade-log-table-table"
          style={{
            top: "50%",
            left: -5,
            cursor: "pointer",
            display: !isRightSideBarOpen && "none",
          }}
          onClick={() => toggleRightSideBar()}
        >
          <img
            src={rightsideIcon}
            alt="left icon"
            style={{ width: 6, height: 12 }}
          />
        </div>
        <div style={{ marginTop: 32 }}>
          <CalendarChart />
          <TradesTaken />
          <WinChartRate />
          <ProfitLossChart />
          <RulesChart />
        </div>
      </div>
    )
  );
}

export default RightSidebar;
