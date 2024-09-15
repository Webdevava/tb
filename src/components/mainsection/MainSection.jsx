import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/mainsection.css";
import Attach from "./Attach";
import MyRule from "./MyRule";
import Rules from "./Rules";

function MainSection() {
  const [notes, setNotes] = useState("");
  const [mistake, setMistake] = useState("");
  const [lessons, setLessons] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Retrieve token from localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Format date
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const journalData = { notes, mistake, lessons };
      // Create a new journal entry
      await axios.post("https://api.tradeboard.in/api/journal", journalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsSaving(false);
      alert("Journal saved successfully");
      // Clear the input fields after saving
      setNotes("");
      setMistake("");
      setLessons("");
    } catch (err) {
      console.error("Error saving journal:", err);
      setIsSaving(false);
      alert("Error saving journal. Please try again.");
    }
  };

  return (
    <div className="main-parent">
      <div className="main-header">
        <h1
          className="main-welcome"
          style={{ fontSize: 24, fontWeight: "500", fontFamily: "Poppins" }}
        >
          Welcome back
        </h1>
        <div className="main-capital">
          <span
            style={{ fontSize: 24, fontWeight: "500", fontFamily: "Poppins" }}
          >
            {formatTime(currentTime)}
          </span>
        </div>
      </div>

      <div className="main-date">
        <div className="row">
          <div className="col-12 col-sm-3 col-md-4">
            <span>{"   "}</span>
          </div>
          <div className="col-12 col-sm-5 col-md-4">
            <span
              className="main-dateText"
              style={{
                fontSize: 18,
                fontWeight: "400",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              {formatDate(currentTime)}
            </span>
          </div>
          <div className="col-12 col-sm-4 col-md-4 text-center text-sm-end">
            <span
              className="capital"
              style={{ fontSize: 21, fontWeight: "500", fontFamily: "Poppins" }}
            >
              Capital: ₹ 1,00,000
            </span>
          </div>
        </div>
      </div>

      <div className="today-my-rule-section">
        <div className="today-journal">
          <div
            className="today-journal-heading"
            style={{ fontSize: 24, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Today’s Journal <span>(Saving)</span>
          </div>

          <div className="note-container">
            <textarea
              className="note-input"
              style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
              placeholder="Type your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <textarea
              className="note-input"
              style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
              placeholder="Type your mistakes here..."
              value={mistake}
              onChange={(e) => setMistake(e.target.value)}
            ></textarea>
            <textarea
              className="note-input"
              style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
              placeholder="Type your lessons here..."
              value={lessons}
              onChange={(e) => setLessons(e.target.value)}
            ></textarea>
          </div>

          <button onClick={handleSave} disabled={isSaving} className="btn">
            {isSaving ? "Saving..." : "Save Journal"}
          </button>

          <Attach />
        </div>
        {/* <MyRule /> */}
        <Rules />
      </div>
    </div>
  );
}

export default MainSection;
