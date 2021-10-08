import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav-par'>
            <section className='logo-continer'>
                <Link to="/">
                    <h1>COCKIL MJ</h1>
                </Link>
                    
            </section>
            <section className='menu-continer'>
                <ul className='menu-items'>
                    <li className='item' >
                        <Link to="/" className='itemss '>Home</Link>
                    </li>
                    <li className='item'>
                        <Link to="/about" className='itemss'>About</Link>
                    </li>
                    <li className='item'>
                        <Link to="/drinks" className='itemss'>Drinks</Link>
                    </li>
                </ul>
            </section>
            
        </nav>
    )
}

export default Nav
