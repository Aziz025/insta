import Post from "./post";
import ModalPosts from "../ModalPosts";

export default function Posts({ posts }) {
  const showPosts = posts.map((item) => <Post item={item} />);
  return (
    <div className="container posts-container">
      <div className="posts">
        <img src="/images/posts.jpg" />
        <button>POSTS</button>
        <ModalPosts />
      </div>
      <div className="posts-images-grid">{showPosts}</div>
    </div>
  );
}