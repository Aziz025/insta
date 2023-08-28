'use client'
import Link from "next/link"
export default function UserLogin (){
    return (
        <div className="logIn">
            <div className="logIn-left">
                <img src="/images/logIn.jpg" className="logIn-img" />
            </div>
            <div className="logIn-right">
                <div className="card">
                    <img src="/images/logo.jpg" className="logo-img"/>
                    <form>
                        <input className="input"  placeholder="Email"/>
                        <input className="input"  placeholder="Password"/>
                        <Link href="/profile" className="button">Log in</Link>
                    </form>
                </div>
                <div className="card">
                    <div className="card-signUp">
                        <p>
                            Don't have an account? 
                            <Link href="/register" className="button-blue"> Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

