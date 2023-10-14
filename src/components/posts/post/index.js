import React from 'react';
import { END_POINT } from '@/config/end-point';

export default function Post({ item, setSelectedPost }) {
  return (
  <div className="posts-images" onClick={() => setSelectedPost(item.image)}>
      <img src={`${END_POINT}${item.image}`} alt="post" />
    </div>
  );
}
