import React from "react";
import Post from "../post/Post";
import "./Posts.css";

function Posts() {
  return (
    <div>
      <div className="posts">
        <Post img="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" />
        <Post img="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" />
        <Post img="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" />
        <Post img="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" />
        <Post img="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" />
        <Post img="https://www.woods-furniture.co.uk/images/products/standard/8362.jpg" />
      </div>
    </div>
  );
}

export default Posts;
