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

  const returnToFirstModal = () => {
    setContentVisible(true);
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
            <div className="modal-return">
              <img src="/images/left-arrow.jpg" onClick={returnToFirstModal} />
              <p>Create new post</p>
              <a>Share</a>
            </div>
            <div className='return-add-comment'>
              <img src={selectedImage} className="selected-image" />
              <div className='return-content'>
                <div className='return-img-name'>
                  <img src="/images/profile.jpg" className='return-profile'/>
                  <p>terrylucas</p>
                </div>
                <input placeholder='write'/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
