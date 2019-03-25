import React from "react";
import "./PostContainer.css";

import CommentSection from './PostsPage';

const PostContainer = props => {
  return (
    <div>
      {props.postData.map((post, i) => {
        return (
          <div className="postContainer" key={i}>
            <div className="opUserInfo">
              <img src={post.thumbnailUrl} alt="Avatar" />
              <h3>{post.username}</h3>
            </div>
            <img src={post.imageUrl} alt="Original Post" />
            <CommentSection comments={post.comments} likes={post.likes} />
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
