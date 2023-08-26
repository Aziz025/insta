import Post from "./post";

export default function Posts({ posts }) {
  const showPosts = posts.map((item) => <Post item={item} />);
  return (
    <div className="container posts-container">
      <div className="posts">
        <img src="/images/posts.jpg" />
        <p>POSTS</p>
      </div>
      <div className="posts-images-grid">{showPosts}</div>
    </div>
  );
}