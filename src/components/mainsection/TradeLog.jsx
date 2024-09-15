import React, { useContext } from "react";
import "../../styles/tradelog.css";
import TradeLogHeader from "./TradeLogHeader";
import TradeLogCloseOpen from "./TradeLogCloseOpen";
import TradeLogTable from "./TradeLogTable";
import MyContext from "../../context/MyContext";
import bottomsideIcon from "../../assets/icons/bottom-side.png";

function TradeLog() {
  const { isBottomSideBarOpen, toggleBottomSideBar } = useContext(MyContext);
  return (
    <div
      className="tradelog-header-container position-relative"
      style={{
        display: !isBottomSideBarOpen && "none",
      }}
    >
      <div
        className="position-absolute trade-log-table-table"
        style={{ top: -9 }}
        onClick={() => toggleBottomSideBar()}
      >
        <img
          src={bottomsideIcon}
          alt="bottom icon"
          style={{ width: 12 }}
        />
      </div>
      <TradeLogHeader />
      <TradeLogCloseOpen />
      <TradeLogTable />
    </div>
  );
}

export default TradeLog;
