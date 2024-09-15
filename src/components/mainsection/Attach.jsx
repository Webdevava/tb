import React from "react";
import attachIcon from "../../assets/images/attach.png";
import closeIcon from "../../assets/images/close.png";

function Attach() {
  return (
    <div className="today-journal-attach">
      <div className="attach-container">
        <img src={attachIcon} alt="Attach icon" className="attach-icon" />
        <span
          style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "500" }}
        >
          Attach
        </span>
      </div>
    </div>
  );
}

export default Attach;
