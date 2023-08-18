'use client'
import {useState} from 'react'
export default function UserLogin () {
    const [step , setStep] = useState(1)

    return (
        <section className="login-page">
            { step == 1 && <div className="card">
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
                    <button className="button" onClick={()=>setStep(2)}>Sign up</button>
                </form>
            </div>}
            { step == 1 && <div className="card">
                <div className="card-signUp">
                    <p>
                        Have an account?
                        <button className="button-blue" onClick={()=>setStep(2)}> Log in</button>
                    </p>
                </div>
            </div>}
            
            { step == 2 && <div className="logIn">
                <div className="logIn-left">
                    <img src="/images/logIn.jpg" className="logIn-img" />
                </div>
                <div className="logIn-right">
                    <div className="card">
                        <img src="/images/logo.jpg" className="logo-img"/>
                        <form>
                            <input className="input"  placeholder="Email"/>
                            <input className="input"  placeholder="Password"/>
                            <button className="button">Log in</button>
                        </form>
                    </div>
                    <div className="card">
                        <div className="card-signUp">
                            <p>
                                Don't have an account? 
                                <button className="button-blue" onClick={()=>setStep(1)}> Sign up</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}