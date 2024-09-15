import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";
import Card from "../components/myjournals/Card";
import Header from "../components/myjournals/Header";
import MyContext from "../context/MyContext";

function MyJournal() {
  const { setIsRightSideBarOpen } = useContext(MyContext);
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsRightSideBarOpen(false);
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api.tradeboard.in/api/journal",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJournals(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching journals:", err);
      setError("Failed to fetch journals. Please try again.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div>Loading journals...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: 32,
          }}
        >
          {journals.length > 0 ? (
            journals.map((journal, index) => (
              <Card key={journal._id} item={journal} index={index} />
            ))
          ) : (
            <div>No journals found. Start writing your first journal!</div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default MyJournal;
