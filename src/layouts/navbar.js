'use strict'
import React, { useEffect, useState } from 'react';
import '../assets/navbar.scss'

const NavBar = ({ navOp }) =>{
const[animatedProps, setAnimate] = useState({ navClass: 'nav', navTrigger: false });
  
const listeningScroll = (e) => {
  const scroll = e.currentTarget.scrollY
  scroll > 50 ? setAnimate({...animatedProps, navClass: 'nav affix'}) : setAnimate({...animatedProps, navClass: 'nav'})
}

const burguerMenu = () => {setAnimate({...animatedProps, navTrigger: !animatedProps.navTrigger })}
useEffect(() =>{ 
    window.addEventListener('scroll', listeningScroll)
}, [])

return(
    <nav className={animatedProps.navClass}>
    <div className='container'>
        <div className='logo'>
            <span>Logo Here</span>
        </div>
        <div className={animatedProps.navTrigger ? 'main_list show_list':'main_list'} id='mainListDiv'>
            <ul>
            {navOp.map(({name, link}) =>(
                <li key={name}> <a href={link}>{name}</a></li>
            ))}
            </ul>
        </div>
        <span 
        className={animatedProps.navTrigger ? 'navTrigger active':'navTrigger'} 
        onClick={burguerMenu}>
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
    </nav>
)}

export default NavBar;