'use client'
import Post from "./post";
import { useEffect , useState} from 'react';
import ModalPosts from "../ModalPosts";

export default function Posts({ posts }) {
  const showPosts = posts.map((item, index) => <Post item={item} key={index}/>);
  const [modalPostIsOpen, setModalPostIsOpen] = useState(false)
  const closeModalPost = () => {
    setModalPostIsOpen(false)
  }
  return (
    <div className="container posts-container">
      <div className="posts">
        <img src="/images/posts.jpg" />
        {modalPostIsOpen && <ModalPosts close={closeModalPost}/>}
        <button onClick={()=> setModalPostIsOpen(true)}>POSTS</button>
      </div>
      <div className="posts-images-grid">{showPosts}</div>
    </div>
  );
}