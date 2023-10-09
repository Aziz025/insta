import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, uppendPost } from '@/app/store/slices/postSlices';
import ModalCheckPosts from '../ModalCheckPosts';

export default function ModalPosts({ close }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState('')
  const [contentVisible, setContentVisible] = useState(true);
  const [description, setDescription] = useState('');
  const [charCount, setCharCount] = useState(0);
  const dispatch = useDispatch();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(e.target.files[0])
      setSelectedImage(URL.createObjectURL(file));
      setContentVisible(false);
    }
  };

  const returnToFirstModal = () => {
    setSelectedImage(null);
    setContentVisible(true);
  };

  const сaptionChange = (e) => {
    const text = e.target.value;
    setDescription(text);
    setCharCount(text.length);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    dispatch(createPost(formData))
    close()
  }

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
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileSelect} />
                <label htmlFor="imageInput">Select from computer</label>
              </fieldset>
            </div>
          </>
        ) : (

          <div className="image-container">
            <div className="modal-return">
              <img src="/images/left-arrow.jpg" onClick={returnToFirstModal} />
              <p>Create new post</p>
              <button onClick={handleSave}>Share</button>
            </div>
            <div className='return-add-comment'>
              <img src={selectedImage} className="selected-image" alt="selected" />
              <div className='return-content'>
                <div className='return-img-name'>
                  <img src="/images/profile.jpg" className='return-profile' alt="profile" />
                  <p>terrylucas</p>
                </div>
                <div className="char-count">
                  <div className="textarea-container">
                    <textarea placeholder='Write a caption...' value={description} onChange={сaptionChange} />
                    <span>{charCount}/2,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
              {modalPostIsOpen && (
        <ModalCheckPosts
          close={closeModalPost}
          selectedImage={selectedImage}
          image={image} // Передаем image как пропс
        />
      )}
      </div>
    </div>
  );
}
