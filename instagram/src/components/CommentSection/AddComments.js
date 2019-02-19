import React from 'react';

const AddComments = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input type="text" placeholder="Add comment... " value={props.comment}  onChange={props.changeComment} /></form>
  );
};

export default AddComments;
    