import { NavLink } from "react-router-dom";
import NotFoutImg from "../../assets/not-found.png"
import { FaAngleDoubleLeft } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <section className="hero-section-not">
                <div className="container">
                    <div className="">
                        <img src={NotFoutImg} alt="" />
                        <h6 className='text-center section-hero-title'>Page Not Found</h6>
                        <NavLink to="/" className="primary-btn w-[fit-content] m-auto mt-3"><FaAngleDoubleLeft /> Back To Home</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;