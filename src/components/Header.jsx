import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

import logoImg from '../assets/icons/logo.svg';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [menubtn, setMenuBtn] = useState(false);

    window.addEventListener("scroll", () =>{
        if(window.scrollY > 50){
            setIsSticky(true);
        }else{
            setIsSticky(false);
        }
    })

    return (
        <header className={ isSticky ? "sticky" : "" }>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="header-logo flex justify-between items-center w-full md:w-auto">
                        <NavLink to='/'>
                            <h1>
                                <img className="w-[120px] md:w-[150px]" src={logoImg} alt="" />
                            </h1>
                        </NavLink>
                        <div onClick={()=> setMenuBtn(!menubtn)} className="menu-cl"> 
                                {
                                    menubtn ? <FaTimes className={`md:hidden ${menubtn ? 'text-[--primary-color]' : ''}`} /> : <FaBars className="md:hidden" />
                                }
                        </div>
                    </div>
                    <div className="menu-items"> 
                        <ul className={`flex gap-[2.25rem] maenu-res ${menubtn ? 'left-0': 'left-[-100%]'}`}>
                            <li>
                                <NavLink to='/' onClick={()=> setMenuBtn(!menubtn)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' onClick={()=> setMenuBtn(!menubtn)}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' onClick={()=> setMenuBtn(!menubtn)}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/skill' onClick={()=> setMenuBtn(!menubtn)}>Skill</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blogs' onClick={()=> setMenuBtn(!menubtn)}>Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' onClick={()=> setMenuBtn(!menubtn)}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hire-me-head hidden md:block">
                        <NavLink to='/contact'>Hire Me <FaAnglesRight /></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;