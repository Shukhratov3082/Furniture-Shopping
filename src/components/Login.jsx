import React from 'react'
import HeaderBg from "../assets/images/header-internet.svg"
import Armchair from "../assets/images/armchair.svg"
import "../assets/styles/Login.css"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <section className='login'>
      <header>
        <b>9:41</b>
        <img src={HeaderBg} alt="" />
      </header>
      <div className='login__armchair'>
        <hr />
        <img src={Armchair} alt="" />
        <hr />
      </div>
      <div className='login__info'>
        <h2><span>Hello !</span>
          <br /> WELCOME BACK</h2>
      </div>
      <form className='login__form'>
        <label>Email</label>
        <input type="text" required />
        <label >Password</label>
        <input type="password" required />
        
        <span>Forgot Password</span>
        <button>Login in</button>
        <Link to={"/signup"}>
          <span>SIGN UP</span>
        </Link>
      </form>
    </section >
  )
}
