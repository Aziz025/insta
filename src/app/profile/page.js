'use client'
import { useState, useEffect } from 'react';
import Header from "@/components/header"
import Posts from "@/components/posts"
import ModalAddStories from "@/components/ModalAddStories";
import ModalCheckFollowers from '@/components/ModalCheckFollowers';
import ModalCheckFollowing from '@/components/ModalCheckFollowing';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '@/app/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { getMyPosts } from '../store/slices/postSlices';

export default function Profile() {
  const dispatch = useDispatch()
  const router = useRouter();

  const isAuth = useSelector((state) => state.auth.isAuth)
  const posts = useSelector((state) => state.post.posts)

  const didMount = () => {
    dispatch(getMyPosts())
  }

  useEffect(didMount, [

  ])

const [modalPostIsOpen, setModalPostIsOpen] = useState(false);
const [modalFollowersIsOpen, setModalFollowersIsOpen] = useState(false);
const [modalFollowingIsOpen, setModalFollowingIsOpen] = useState(false);

const handleLogout = () => {
  dispatch(logOut());
  router.push("/login");
};

const openModalPost = () => {
  setModalPostIsOpen(true);
};

const closeModalPost = () => {
  setModalPostIsOpen(false);
};

const openModalFollowers = () => {
  setModalFollowersIsOpen(true);
};

const closeModalFollowers = () => {
  setModalFollowersIsOpen(false);
};

const openModalFollowing = () => {
  setModalFollowingIsOpen(true);
};

const closeModalFollowing = () => {
  setModalFollowingIsOpen(false);
};

  return (
    <main>
      <Header />
      <div className="profile container profile-container">
        <div className="profile-left" onClick={openModalPost}>
          <img src="/images/profile.jpg"/>
        </div>
        <div className="profile-right">
          <div className="profile-name">
            <h2>terrylucas</h2>
            <button>follow</button>
            <img src="/images/dots.jpg"/>
          </div>
          <div className="profile-stats">
            <p>1.258 posts</p>
            <button onClick={openModalFollowers}>4M followers</button>
            <button onClick={openModalFollowing}>1.250 following</button>
          </div>
          <div className="profile-info">
            <p>Terry Lucas</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <Posts posts={posts} />
      {modalPostIsOpen && <ModalAddStories close={closeModalPost} />}
      {modalFollowersIsOpen && <ModalCheckFollowers close={closeModalFollowers} />}
      {modalFollowingIsOpen && <ModalCheckFollowing close={closeModalFollowing} />}
    </main>
  )
}
