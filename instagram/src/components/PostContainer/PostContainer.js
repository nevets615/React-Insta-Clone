import React from "react";
import "./PostContainer.css";
import Posts from './Posts'



const PostsContainer = props => {
    return (
      <div className="posts-container">
        {props.posts.map(index => <Posts key={index.imageUrl} post={index} />)}
      </div>
    );
  };

export default PostsContainer;
