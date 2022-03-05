import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const { user, login,logout } = useContext(AuthContext);

    let navigate = useNavigate();

    const onLogout = ()=> {
        logout()
        navigate('/')
    }
    const onLogin = ()=> {
        login()
        navigate('/login')
    }
    console.log(user);
    return (
        <header> 
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to = '/'>Book Exchange App</Link>
                </div>
                <ul className = 'nav-links'>
               
                {user ?
                <>
                 <li>
               <Link to = '/login' className='btn' onClick={onLogin}>Login</Link>
                </li>
               <li>
               <Link to = '/' className='btn' onClick={onLogout}>Logout</Link>
                </li>
                </>
                :
                <>
                <li>
                    <Link to = '/register'> Register</Link>
                </li>
                <li>
                    <Link to = '/login'>Login</Link>
                </li>
                </>
                }
                {/* <li>
                    <Link to = '/add' className='btn'>+Add</Link>
                </li>   */}
                   
                </ul>
            </div>
        </div>
        </header>
    )
}
export default Navbar
