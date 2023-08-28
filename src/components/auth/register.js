'use client'
import Link from "next/link"
export default function UserRegister () {

    return (
        <section className="login-page">
            <div className="card">
                <img src="/images/logo.jpg" className="logo-img"/>
                <h2>
                    Sign up to see photos and
                    videos from your friends.
                </h2>
                <p className="p-border">OR</p>
                <form>
                    <input className="input"  placeholder="Email"/>
                    <input className="input"  placeholder="Full Name"/>
                    <input className="input"  placeholder="Username"/>
                    <input className="input"  placeholder="Password"/>
                    <Link href="/login" className="button">Sign up</Link>
                </form>
            </div>
            <div className="card">
                <div className="card-signUp">
                    <p>
                        Have an account?
                        <Link href="/login" className="button-blue"> Log in</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}