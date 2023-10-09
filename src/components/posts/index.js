import { useState } from 'react';
import Post from "./post";
import ModalCheckPosts from '../ModalCheckPosts';

export default function Posts({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const showPosts = posts.map((item, index) => (
    <Post item={item} key={index} onClick={() => setSelectedPost(item.image)} />
  ));

  return (
    <div className="container posts-container">
      <div className="posts">
        <img src="/images/posts.jpg" />
        <h3>Posts</h3>
      </div>
      <div className="posts-images-grid">{showPosts}</div>
      {selectedPost && (
        <ModalCheckPosts selectedImage={selectedPost} close={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
