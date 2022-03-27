import React from "react";
import data from "../../components/data1";
import listdata from "../../data/data1";
const Home = () => {
    return (
      <div>
        <div style={{ marginBottom: "20px" }}>
          <input type="text" placeholder="search" />
          <button>Search</button>
        </div>
        {ListGif.filter((data) => data.rating === "g").map((gif) => (
          <Gif key={gif.id} {...gif} />
        ))}
      </div>
    );
  };
  
  export default Home;
  