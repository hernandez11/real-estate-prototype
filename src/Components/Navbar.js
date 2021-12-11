import React from 'react';
import '../Styling/Navbar.css';
import { Nav, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <nav  className='navbar'>
                <div className='nav_container'>
                    {/* logo */}
                    <NavLink exact to='/' className='nav_image'>
                        {/* <img className='nav_img'
                        src=''
                        alt='' /> */}
                        <h1>REAL ESTATE</h1>
                    </NavLink>

                    {/* central page links */}
                    <ul className='nav_menuCentral'>
                        <li className='nav_item'>
                            <NavLink exact to='/' className='nav_link'>
                                HOME
                            </NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink exact to='/About' className='nav_link'>
                                ABOUT
                            </NavLink>
                        </li>                        
                        <li className='nav_item'>
                            <NavLink exact to='/Gallery' className='nav_link'>
                                GALLERY
                            </NavLink>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
