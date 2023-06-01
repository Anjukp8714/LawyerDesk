import React from 'react';
import Plus from '../../assets/Plus.svg';

function CreatePost() {
  const handleAddPost = () => {
    // Logic for adding a post
  };

  return (
    <div className="add-post-button">

<button  onClick={handleAddPost}>
      <img src={Plus}></img>
    </button>
    </div>
    
  );
}

export default CreatePost;
