import React from "react";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Posts />
      </div>
    </>
  );
}

export default Home;
