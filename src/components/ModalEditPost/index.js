'use client'
import { useDispatch } from "react-redux"
import { useState } from "react"
import { END_POINT } from "@/config/end-point"


import Image from "next/image"

export default function ModalEditPost({ close}) {
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState('')
    const [contentVisible, setContentVisible] = useState(true);
    const [charCount, setCharCount] = useState(0);
    
    const changeFile = (event) => {
      const file = event.target.files[0];
        setSelectedImage(file); 
        setFileData(null); 
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFileData(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }

    const editFile = (e)=>{
        handleFileChange(e)
    }

    const handleSave = () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('description', description);
        dispatch(createPost(formData))
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
                    <img src={`${END_POINT}${selectedImage}`} alt="Выбранная фотография" />
                    <div className="select-posts-content">
                        <div className="select-posts-comments">
                            <img src="/images/profile.jpg" alt="User profile" />
                            <p>terrylucas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}