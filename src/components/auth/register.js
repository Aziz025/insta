'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import { signUp } from "@/app/store/slices/authSlice"
import { useEffect, useState } from "react"

export default function UserRegister () {

    const [email, setEmail] = useState("")
    const [full_name, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()

    const handleSignup = () => {
        dispatch(signUp(email, full_name, username, password, router))
    }

    useEffect(() => {
        if(isAuth)router.push("/login")
        if(!isAuth)router.push("/register")
    }, [isAuth])

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
                    <input className="input"  placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input className="input"  placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} value={full_name}/>
                    <input className="input"  placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <input className="input"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button type="button" className="button" onClick={handleSignup}>Sign up</button>
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