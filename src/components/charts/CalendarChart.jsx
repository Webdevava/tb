// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "../../styles/customCalendar.css";
import dateTypeData from "../../data/dateTypeData.json";
import { Card } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/customCalendar.css";
import leftside from "../../assets/icons/left-side.png";
import rightside from "../../assets/icons/right-side.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CalendarChart = () => {
  const [value, setValue] = useState(new Date());
  const [dateTypeMap, setDateTypeMap] = useState({});

  useEffect(() => {
    setDateTypeMap(dateTypeData);
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];
      if (dateTypeMap[dateStr]) {
        return `calendarDay calendar-${dateTypeMap[dateStr]}`;
      } else if (date.getDay() === 0 || date.getDay() === 6) {
        return "calendarDay calendar-weekend";
      }
    }
    return null;
  };

  return (
    <Card
      style={{ backgroundColor: "rgba(250, 247, 255, 1)", marginBottom: 32 }}
    >
      <Card.Body className="calendar-container">
        <Calendar
          onChange={setValue}
          value={value}
          tileClassName={tileClassName}
        />

        {/* <Calendar onChange={setValue} value={value} tileContent={tileClassName} /> */}
        <div className="calendar-tilecolor-container">
          <div className="calendar-center">
            <div className="calendar-today" />
            <span
              className="calendar-text-color"
              style={{ fontSize: 10, fontFamily: "Poppins", fontWeight: "500" }}
            >
              Today
            </span>
          </div>
          <div className="calendar-center">
            <div className="calendar-profit"></div>
            <span
              className="calendar-text-color"
              style={{ fontSize: 10, fontFamily: "Poppins", fontWeight: "500" }}
            >
              Profit
            </span>
          </div>
          <div className="calendar-center">
            <div className="calendar-loss"></div>
            <span
              className="calendar-text-color"
              style={{ fontSize: 10, fontFamily: "Poppins", fontWeight: "500" }}
            >
              Loss
            </span>
          </div>
          <div className="calendar-center">
            <div className="calendar-holiday"></div>
            <span
              className="calendar-text-color"
              style={{ fontSize: 10, fontFamily: "Poppins", fontWeight: "500" }}
            >
              Holiday
            </span>
          </div>
          <div className="calendar-center">
            <div className="calendar-weekend"></div>
            <span
              className="calendar-text-color"
              style={{ fontSize: 10, fontFamily: "Poppins", fontWeight: "500" }}
            >
              Weekend
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CalendarChart;
