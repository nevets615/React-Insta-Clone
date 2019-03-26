import React from "react";
import "./PostContainer.css";
import PostsPage from './PostsPage'



const PostsContainer = props => {
    return (
      <div className="posts-container">
        {props.posts.map(index => <PostsPage key={index.imageUrl} post={index} />)}
      </div>
    );
  };

export default PostsContainer;
