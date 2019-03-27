import React from 'react';
import CommentSection from './PostContainer'
import PostHeader from './PostContainer'
class PostsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CommentInput: '',
      comments: this.props.PostsPage.comments
    }
  }

render() {
  return (
    <div className="post-border">
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
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

export default PostsPage;