import React, { useState } from 'react';
import '../Styling/Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [nav, setNav] = useState(false);
    const showNav = () => setNav(!nav)

    return (
        <>
        <div  className='navbar'>
            {/* logo */}
            <div className='logo__container'>
                <NavLink exact to='/' className='nav__logo'> <img className='logo__img' src='./Assets/navabr__logo.png' alt='' /> </NavLink>
            </div>
            
            <div onClick={showNav} className={nav ? 'menuToggle__container inactive' : 'menuToggle__container'}>
                <p className='menu__toggle'>MENU</p>
                <span  className='toggle__icon'> <img src='./Assets/forward__arrow__icon.png' alt='' />  </span>
            </div>
            {/* central page links */}
            <div className={nav ? 'navlink__container active' : 'navlink__container'}>
                <ul className='navlink__wrapper'>
                    <li className='nav__item'>
                        <NavLink exact to='/' className='nav__link'> HOME </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink exact to='/About' className='nav__link'> ABOUT </NavLink>
                    </li>                        
                    <li className='nav__item'>
                        <NavLink exact to='/Gallery' className='nav__link'> GALLERY </NavLink>
                    </li>
                    <li className='nav__item'>
                        <img onClick={showNav} className='toggle__icon__close' src='./Assets/close__icon.png' alt='' />
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar
