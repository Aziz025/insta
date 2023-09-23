'use client'
import Link from "next/link";
import { useState } from "react";
import ModalPosts from "../ModalPosts"; 

export default function Header() {
  const [modalPostIsOpen, setModalPostIsOpen] = useState(false);

  const openModalPost = () => {
    setModalPostIsOpen(true);
  };

  const closeModalPost = () => {
    setModalPostIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link href="/home-page">
            <img src="/images/logo.jpg" />
          </Link>
        </div>
        <div className="header-input">
          <img src="/images/search.jpg" />
          <input placeholder="Search" />
        </div>
        <div className="header-icons">
          <img src="/images/header-icon1.jpg" />
          <img src="/images/header-icon2.jpg" />
          <img src="/images/header-icon3.jpg" onClick={openModalPost} style={{ cursor: "pointer" }} />
          <img src="/images/header-icon4.jpg" />
          <img src="/images/header-icon5.jpg" />
          <Link href="/profile">
            <img src="/images/header-icon6.jpg"/>
          </Link>
        </div>
      </div>
        {modalPostIsOpen && <ModalPosts close={closeModalPost} />}
    </header>
  );
}
