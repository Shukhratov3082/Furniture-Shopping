import React from 'react'
import HeaderBg from "../assets/images/header-internet.svg"
import Armchair from "../assets/images/armchair.svg"
import "../assets/styles/Login.css"
import "../assets/styles/Signup.css"
import { Link } from 'react-router-dom'
export default function Signup() {
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
        <h2>WELCOME</h2>
      </div>
      <form className='login__form'>
        <label>Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="text" required />
        <label >Password</label>
        <input type="password" required />
        <label >Confirm Password</label>
        <input type="password" required />

        <button>Sign up</button>
        <Link to={"/login"}>
          Already have account? <span>Log in</span>
        </Link>
      </form>
    </section >
  )
}
