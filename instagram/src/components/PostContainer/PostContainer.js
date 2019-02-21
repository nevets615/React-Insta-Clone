import React from 'react';
import Posts from './Posts'
import './PostContainer.css'

const PostContainer = props => {
   
    return (
      <div className="posts-container-wrapper">
      {props.data.map(p => <Posts key={p.imageUrl} post={p} />)}
    </div>
    );
}



export default PostContainer;