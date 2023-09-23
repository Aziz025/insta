import React, { useState, useEffect } from 'react';
export default function ModalCheckStories({ close, selectedImage }) {
  return (
    <div className="modal">
      <div className="modal-backdrop modal-backdrop-story" onClick={close}></div>
      <div className="modal-inner modal-inner-stories">
        <div className='modal-check-story-content'>
          <img src={selectedImage} alt="Selected Image" className="modal-image" />
          <div className='photo-name-check-story'>
            <img src="/images/stories2.svg"/>
            <p>terrylucas</p>
          </div>
          <div className="bottom-content">
            <input type="text" placeholder="Ответьте: terrylucas" />
            <img src="/images/like.svg" alt="Image 1" />
            <img src="/images/comment.svg" alt="Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
