import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import PostHeader from './PostHeader';



class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = []
  }

  render() {
    return (
      <div className="post">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image">
          <img
            alt="post thumbnail"
            
            src={this.props.post.imageUrl}
          />
        </div>
       
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;