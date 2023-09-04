import React, { useState } from 'react';

export default function ModalPosts({ close }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [contentVisible, setContentVisible] = useState(true);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setContentVisible(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}>
        <p onClick={close}>X</p>
      </div>
      <div className={`modal-inner ${contentVisible ? '' : 'hidden'}`}>
        {contentVisible ? (
          <>
            <h4>Create new post</h4>
            <div className="modal-inner-text">
              <p>Drag photos and videos here</p>
            </div>
            <div className="modal-picture">
              <img src="/images/drag-photo.jpg" />
            </div>
            <div className="modal-inner-picture">
              <fieldset className="fieldset">
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileSelect}/>
                <label htmlFor="imageInput">Select from computer</label>
              </fieldset>
            </div>
          </>
        ) : (
          <div className="image-container">
            <img src={selectedImage} className="selected-image" />
          </div>
        )}
      </div>
    </div>
  );
}
