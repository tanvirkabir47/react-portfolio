import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [menubtn, setMenuBtn] = useState(false);

    window.addEventListener("scroll", () =>{
        if(window.scrollY > 100){
            setIsSticky(true);
        }else{
            setIsSticky(false);
        }
    })

    return (
        <header className={ isSticky ? "sticky" : "" }>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="header-logo flex justify-between items-center w-full">
                        <NavLink to='/'>
                            <h1>Tanvir</h1>
                        </NavLink>
                        <div onClick={()=> setMenuBtn(!menubtn)} className="menu-cl"> 
                                {
                                    menubtn ? <FaTimes className="md:hidden" /> : <FaBars className="md:hidden" />
                                }
                        </div>
                    </div>
                    <div className="menu-items">
                        <ul className={`flex gap-5 maenu-res ${menubtn ? 'left-0': 'left-[-100%]'}`}>
                            <li>
                                <NavLink to='/' onClick={()=> setMenuBtn(!menubtn)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' onClick={()=> setMenuBtn(!menubtn)}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/service' onClick={()=> setMenuBtn(!menubtn)}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/skill' onClick={()=> setMenuBtn(!menubtn)}>Skill</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' onClick={()=> setMenuBtn(!menubtn)}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;