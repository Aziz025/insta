import React, { useState } from 'react';
export default function ModalCheckStories({close, selectedImage}) {

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner">
        <div className="modal-check-story">
            <img src={selectedImage} alt="Selected Image" className="modal-image" />
        </div>
      </div>
    </div>
  );
}
