import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <div className="post">
      <div className="post-header">
        <span className="post-username">{props.username}</span>
        <span className="post-timestamp">{props.timestamp}</span>
      </div>
      <div className="post-message">{props.message}</div>
    </div>
  );
}

export default Post;
