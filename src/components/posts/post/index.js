import React from 'react';

export default function Post({ item, onClick }) {
  return (
    <div className="posts-images" onClick={onClick}>
      <img src={item.photo} />
    </div>
  );
}
