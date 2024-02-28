import NotFoundHero from './HeroComponents/NotFoundHero'
import { FaAngleDoubleLeft } from "react-icons/fa";

import NotFountImg from "../assets/404-error.png"
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <NotFoundHero />

            <section className='not_found_sec section-padding'>
                <div className="container">
                    <div className="flex items-start md:items-center justify-between gap-3 md:flex-row flex-col-reverse">
                        <div className='flex-1'>
                            <h2 className='section-title'>Sorry!</h2>
                            <h5>This Page is Not Found.</h5>
                            <NavLink to="/"><FaAngleDoubleLeft /> Back To Home</NavLink>
                        </div>
                        <div className='flex-1'>
                            <img src={NotFountImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;