'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from "@/app/store/slices/authSlice";
import { useRouter } from "next/navigation"
export default function UserLogin (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const router = useRouter()

    const handleLogin = () => {
        dispatch(signIn(email, password))
    }

    useEffect(() => {
        if(isAuth) router.push("/profile")
    }, [isAuth])
    return (
        <div className="logIn">
            <div className="logIn-left">
                <img src="/images/logIn.jpg" className="logIn-img" />
            </div>
            <div className="logIn-right">
                <div className="card">
                    <img src="/images/logo.jpg" className="logo-img"/>
                    <form>
                        <input className="input"  placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <input className="input"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <button type="button" className="button link-button" onClick={handleLogin}>Log in</button>
                    </form>
                </div>
                <div className="card">
                    <div className="card-signUp">
                        <p>
                            Don't have an account? 
                            <Link href="/" className="button-blue"> Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

