import React from "react";
import myjocard from "../../styles/myjocard.css";
import goArrow from "../../assets/icons/goArrow.png";

function Card({ item, index }) {
  // Helper function to format the date
  const formatDate = (dateString) => {
    const options = { weekday: "short", day: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    return text && text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div
      className="c-container"
      style={{
        marginLeft: index % 4 === 0 ? 0 : 32,
        marginBottom: 32,
        width: window.innerWidth / 4 - 100,
        height: window.innerHeight / 2 + 100,
      }}
    >
      <div
        className="c-date d-flex justify-content-between"
        style={{ fontFamily: "Poppins", fontSize: 16, fontWeight: "600" }}
      >
        <div>{formatDate(item.createdAt)}</div>
        <img
          src={goArrow}
          alt="arrow"
          style={{ width: 24, height: 24, cursor: "Pointer" }}
        />
      </div>
      <hr />

      <div className="d-flex c-notes-c">
        <div
          className="c-notes "
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Notes:
        </div>
        <div
          className="c-notes-p"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          {truncateText(item.notes, 50)}
        </div>
      </div>

      <div className="d-flex c-mistake-c">
        <div
          className="c-mistake"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Mistakes:
        </div>
        <div
          className="c-mistake-p"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          {truncateText(item.mistake, 50)}
        </div>
      </div>

      <div className="d-flex mb-9 c-lessions-c">
        <div
          className="c-lessions"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Lessons:
        </div>
        <div
          className="c-lessions-p"
          style={{
            fontSize: 16,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          {truncateText(item.lessons, 50)}
        </div>
      </div>

      <hr />

      <div className="d-flex text-center">
        <div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            Rules Followed
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            {item.rulesFollowed || "N/A"}
          </div>
        </div>

        <div className="px-3">
          <div
            style={{
              fontSize: 13,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            Win rate
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            {item.winRate || "N/A"}
          </div>
        </div>

        <div
          style={{
            fontSize: 13,
            color: "rgba(28, 29, 34, 1)",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          <div>Profit</div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(28, 29, 34, 1)",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            {item.profit || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
