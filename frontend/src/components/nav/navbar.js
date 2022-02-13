import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header> 
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to = '/homepage'>Book App</Link>
                </div>
                <ul className = 'nav-links'>
                <li>
                        <Link to = '/homepage'>Home</Link>
                    </li>
                   
                    <li>
                    <Link to = '/register'> Register</Link>
                    </li>
                    <li>
                        <Link to = '/login'>Login</Link>
                    </li>
                    
                    <li>
                        <Link to = '/add' className='btn'>+Add</Link>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    )
}
