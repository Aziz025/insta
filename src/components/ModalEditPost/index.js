'use client'
import { useDispatch } from "react-redux"
import { useState } from "react"
import { END_POINT } from "@/config/end-point"
import { editPost } from "@/app/store/slices/postSlices"


export default function ModalEditPost({ close, item }) {
  const dispatch = useDispatch()
  const [description, setDescription] = useState(item.description);
  const [stateImage, setStateImage] = useState(`${END_POINT}${item.image}`);
  const [charCount, setCharCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

    
  const changeFile = (event) => {
    const file = event.target.files[0];
      setSelectedFile(file); 
      setStateImage(null); 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStateImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const editFile = (e)=>{
    changeFile(e)
  }

  const handleSave = ()=> {
    const formData = new FormData();
    formData.append('image', selectedFile); 
    formData.append('id', item.id); 
    formData.append('description', item.description)
    dispatch(editPost(formData))
    setDescription('')
    setSelectedFile(null)
    close()
  }
    

  const сaptionChange = (e) => {
    const text = e.target.value;
    setDescription(text);
    setCharCount(text.length);
  };

  return (
      <div className="modal modal-check-posts">
        <div className="modal-backdrop" onClick={close}></div>
        <div className="modal-inner modal-inner-posts">
          <div className="modal-posts-show">
            <div className="edit-image">
              <img src={stateImage} alt="Выбранная фотография" />
              <fieldset className="fieldset fieldset-edit">
                <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={editFile} />
                <label htmlFor="imageInput" className="edit-label">Change image</label>
              </fieldset>
            </div>
            <div className="select-posts-content">
              <div className="select-posts-comments">
                <img src="/images/profile.jpg" alt="User profile" />
                <p>terrylucas</p>
                <button type="button" className="modal-shear" onClick={handleSave}>Shear</button>
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
      </div>
  )
}