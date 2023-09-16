import React, { useState } from 'react';
export default function ModalCheckPosts({ close, selectedImage }) {
const [caption, setCaption] = useState('')
const [comments, setComments] = useState([]);

const сaptionChange = (e) => {
  const text = e.target.value;
  setCaption(text);
}

const addComment = () => {
  if (caption !== '') {
    const commentData = {
      username: 'senalov_025',
      profileImage: '/images/profile.jpg',
      text: caption,
    };
    setComments([...comments, commentData]);
    setCaption('');
  }
}

const deleteComment = (index) => {
  const newComments = [...comments];
  newComments.splice(index, 1);
  setComments(newComments);
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
              {comments.map((comment, index) => (
                <div className="check-posts-comment" key={index}>
                  <img src={comment.profileImage}/>
                  <h4>{comment.username}</h4>
                  <p>{comment.text}</p>
                  <button onClick={() => deleteComment(index)}>Удалить</button>
                </div>
              ))}
            </div>
            <div className='add-comment-on-post'>
              <div className="add-comment-icons">
                <img src="/images/like.jpg"/>
                <img src="/images/comment.jpg"/>
                <img src="/images/save.jpg"/>
              </div>
              <div className="posts-liked">
                <img src="/images/stories1.jpg"/>
                <img src="/images/stories2.svg"/>
                <p>Liked by senalov070 and 61 others</p>
              </div>
              <div className="add-a-comment">
                <img src="/images/smile.jpg"/>
                <textarea placeholder='Add a comment...' value={caption} onChange={сaptionChange}/>
                <button onClick={addComment}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
