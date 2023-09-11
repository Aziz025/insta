'use client'
import { useState } from 'react';
import Header from "@/components/header"
import Posts from "@/components/posts"
import ModalAddStories from "@/components/ModalAddStories";
import ModalCheckFollowers from '@/components/ModalCheckFollowers';

export default function Profile() {
  const posts = [{
    photo: "/images/main1.jpg" 
  }, 
  {
    photo: "/images/main2.jpg" 
  },
  {
    photo: "/images/main3.jpg" 
  },
  {
    photo: "/images/main4.jpg" 
  },
  {
    photo: "/images/main5.jpg"        
  },
  {
    photo: "/images/main6.jpg"
  }]

  const [modalPostIsOpen, setModalPostIsOpen] = useState(false);
  const [modalFollowersIsOpen, setModalFollowersIsOpen] = useState(false);

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
            <p>1.250 following</p>
          </div>
          <div className="profile-info">
            <p>Terry Lucas</p>
          </div>
        </div>
      </div>
      <Posts posts={posts} />
      {modalPostIsOpen && <ModalAddStories close={closeModalPost} />}
      {modalFollowersIsOpen && <ModalCheckFollowers close={closeModalFollowers} />}
    </main>
  )
}
