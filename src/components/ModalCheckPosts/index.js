import React, { useState } from 'react';
export default function ModalCheckPosts({ close, selectedImage }) {
const [caption, setCaption] = useState('')
const сaptionChange = (e) => {
  const text = e.target.value;
  setCaption(text);
}
  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner modal-inner-posts">
        <div className="modal-posts-show">
          <img src={selectedImage} alt="Выбранная фотография" />
          <div className="select-posts-content">
            <div className="select-posts-comments">
              <img src="/images/profile.jpg"/>
              <p>terrylucas</p>
              <img src="/images/dots.jpg"/>
            </div>
            <div className="modal-all-comments">
              <div className="check-posts-comment">
                <img src="/images/stories1.jpg"/>
                <h4>senalov070</h4>
                <p>good</p>
              </div>
            </div>
            <div className="add-comment-icons">
              <img src="/images/like.jpg"/>
              <img src="/images/comment.jpg"/>
              <img src="/images/save.jpg"/>
            </div>
            <div className="posts-liked">
              <img src="/images/stories1.jpg"/>
              <img src="/images/stories2.jpg"/>
              <p>Liked by senalov070 and 61 others</p>
            </div>
            <div className="add-a-comment">
              <img src="/images/smile.jpg"/>
              <textarea placeholder='Add a comment...' value={caption} onChange={сaptionChange}/>
              <a>Post</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
