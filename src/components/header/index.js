'use client'
import Link from "next/link"
export default function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <Link href="/">
                        <img src="/images/logo.jpg" />
                    </Link>
                </div>
                <div className="header-input">
                    <img src="/images/search.jpg" />
                    <input placeholder="Search"/>
                </div>
                <div className="header-icons">
                    <img src="/images/header-icon1.jpg" />
                    <img src="/images/header-icon2.jpg" />
                    <img src="/images/header-icon3.jpg" />
                    <img src="/images/header-icon4.jpg" />
                    <img src="/images/header-icon5.jpg" />
                    <img src="/images/header-icon6.jpg" />
                </div>
            </div>
        </header>
    )
}