import React from 'react';
import { END_POINT } from '@/config/end-point';

export default function Post({ item, onClick }) {
  return (
    <div className="posts-images" onClick={onClick}>
      <img src={`${END_POINT}${item.image}`} alt="post" />
    </div>
  );
}
