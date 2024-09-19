import React from 'react'
import "../assets/styles/Boarding.css"
import { Link } from 'react-router-dom';
const Boarding = () => (
    <main>
        <span>MAKE YOUR</span>
        <h1>HOME BEAUTIFUL</h1>
        <p>The best simple place where you discover most wonderful furnitures and make your home beautiful</p>
        <Link to={"/login"}>
            <button >Get Started</button>
        </Link>
    </main>
)
export default Boarding;