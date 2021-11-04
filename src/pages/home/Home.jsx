import React from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";

function Home() {
  return (
    <div>
      <div className="home">
        <Header />
        <Posts />
      </div>
    </div>
  );
}

export default Home;
