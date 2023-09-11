'use client';
import React, { useState } from 'react';
import Header from '@/components/header';
import ModalCheckStories from '@/components/ModalCheckStories';

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  }

  return (
    <main>
      <Header />
      <div className="container">
        <div className="home-about">
          <div>
            <div className="check-story">
              <img src="/images/stories1.jpg" onClick={() => openModal('/images/main1.jpg')} />
              <img src="/images/stories2.jpg" onClick={() => openModal('/images/main2.jpg')} />
              <img src="/images/stories3.jpg" onClick={() => openModal('/images/main3.jpg')} />
              <img src="/images/stories4.jpg" onClick={() => openModal('/images/main4.jpg')} />
              <img src="/images/stories5.jpg" onClick={() => openModal('/images/main5.jpg')} />
              <img src="/images/stories6.jpg" onClick={() => openModal('/images/main6.jpg')} />
            </div>
            <div className="home-info">
              <img src="/images/stories2.jpg" />
              <p>terrylucas</p>
              <img src="/images/dots.jpg" />
            </div>
            <div>
              <img src="/images/home-photo.svg" />
            </div>
          </div>
          <div className="follow">
            <div className="follow-navigation">
              <h4>Suggestions For You</h4>
              <p>See All</p>
            </div>
            <div className="follow-content">
              <div className="follow-content-info">
                <img src="/images/stories2.jpg" />
                <div className="follow-name">
                  <h4>terylucas</h4>
                  <p>Followed by terylucas + 2 more</p>
                </div>
                <a>Follow</a>
              </div>
              <div className="follow-content-info">
                <img src="/images/stories3.jpg" />
                <div className="follow-name">
                  <h4>lauramatthews</h4>
                  <p>Followed by lauramatthews + 2 more</p>
                </div>
                <a>Follow</a>
              </div>
              <div className="follow-content-info">
                <img src="/images/stories4.jpg" />
                <div className="follow-name">
                  <h4>harryprescott</h4>
                  <p>Followed by harryprescott + 2 more</p>
                </div>
                <a>Follow</a>
              </div>
              <div className="follow-content-info">
                <img src="/images/stories5.jpg" />
                <div className="follow-name">
                  <h4>ednamanz</h4>
                  <p>Followed by ednamanz + 2 more</p>
                </div>
                <a>Follow</a>
              </div>
              <div className="follow-content-info">
                <img src="/images/stories6.jpg" />
                <div className="follow-name">
                  <h4>christinasterling</h4>
                  <p>Followed by christinasterling + 2 more</p>
                </div>
                <a>Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalCheckStories close={closeModal} selectedImage={selectedImage} />}
    </main>
  );
}
