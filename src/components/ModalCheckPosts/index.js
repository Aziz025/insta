import React, { useState } from 'react';

export default function ModalCheckPosts({ close, selectedImage, image }) {
  const [caption, setCaption] = useState('');
  const [comments, setComments] = useState([]);
  const [activeCommentIndex, setActiveCommentIndex] = useState(-1);

  const сaptionChange = (e) => {
    const text = e.target.value;
    setCaption(text);
  };

  const addComment = () => {
    if (caption !== '') {
      const commentData = {
        username: 'senalov_025',
        profileImage: selectedImage,
        text: caption,
      };
      setComments([...comments, commentData]);
      setCaption('');
    }
  };

  const handleEditComment = (index) => {
  };

  const handleDeleteComment = (index) => {
  };

  return (
    <div className="modal modal-check-posts">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner modal-inner-posts">
        <div className="modal-posts-show">
          <img src={image} alt="Выбранная фотография" />
          <div className="select-posts-content">
            <div className="select-posts-comments">
              <img src="/images/profile.jpg" alt="User profile" />
              <p>terrylucas</p>
              {comments.map((comment, index) => (
                <div key={index}>
                  <img src="/images/dots.jpg" alt="Options" onClick={() => setActiveCommentIndex(index)}/>
                  {activeCommentIndex === index && (
                    <div className="comment-actions">
                      <button onClick={() => handleEditComment(index)}>Редактировать</button>
                      <button onClick={() => handleDeleteComment(index)}>Удалить</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="modal-all-comments">
            {comments.map((comment, index) => (
                <div className="check-posts-comment" key={index}>
                  <img src={comment.profileImage}/>
                  <h4>{comment.username}</h4>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
            <div className="add-comment-on-post">
              <div className="add-comment-icons">
                <img src="/images/like.jpg" alt="Like" />
                <img src="/images/comment.jpg" alt="Comment" />
                <img src="/images/save.jpg" alt="Save" />
              </div>
              <div className="posts-liked">
                <img src="/images/stories1.jpg" alt="Liked by users" />
                <img src="/images/stories2.svg" alt="Liked by users" />
                <p>Liked by senalov070 and 61 others</p>
              </div>
              <div className="add-a-comment">
                <img src="/images/smile.jpg" alt="Smile" />
                <textarea placeholder="Add a comment..." value={caption} onChange={сaptionChange}/>
                <button onClick={addComment}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
