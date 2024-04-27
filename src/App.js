import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catUrl, setCatUrl] = useState("");

  // Fetches a new cat image from TheCatAPI
  const fetchCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setCatUrl(data[0].url);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Fetch an initial cat image on component mount
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="container">
      <h1>Random Cat Image Generator</h1>
      <img
        id="catImage"
        src={catUrl}
        alt="Random Cat"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      />
      <button onClick={fetchCat}>Get New Cat</button>
      <div className="footer-space"></div>
    </div>
  );
}

export default App;
