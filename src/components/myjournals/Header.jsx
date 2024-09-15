import React, { useState } from "react";
import "../../styles/myjheader.css";

const Header = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevClick = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextClick = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="custom-container">
      <div className="month-display-container">
        <button className="arrow-button" onClick={handlePrevClick}>
          {"<<"}
        </button>
        <span className="month-display">
          {months[month]} {year}
        </span>
        <button className="arrow-button" onClick={handleNextClick}>
          {">>"}
        </button>
      </div>

      <span className="capital-display">Capital: ₹ 1,00,000</span>
    </div>
  );
};

export default Header;
