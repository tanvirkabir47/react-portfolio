import { NavLink } from "react-router-dom";
import serviceImg1 from "../assets/icons/service-icon-1.png"
import serviceImg2 from "../assets/icons/service-icon-2.png"

import { FaAngleDoubleRight } from "react-icons/fa";

const ServiceSec = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="my_services">
                    <p>|| My Services</p>
                    <h1 className="section-title pb-5">Service Provide For My Clients.</h1>
                    <div className="services-card">
                        <div className="single-service-card">
                            <img src={serviceImg1} alt="" />
                            <h2>
                                <NavLink to="/services">UI/UX Design</NavLink>
                            </h2>
                            <ul>
                                <li><FaAngleDoubleRight /> Landing Pages</li>
                                <li><FaAngleDoubleRight /> User Flow</li>
                                <li><FaAngleDoubleRight /> Wireframing</li>
                                <li><FaAngleDoubleRight /> Prototyping</li>
                                <li><FaAngleDoubleRight /> Admin Panel</li>
                                <li><FaAngleDoubleRight /> Mobile App Design</li>
                            </ul>
                        </div>
                        <div className="single-service-card">
                            <img src={serviceImg1} alt="" />
                            <h2>
                                <NavLink to="/services">Front-End Development</NavLink>
                            </h2>
                            <ul>
                                <li><FaAngleDoubleRight /> HTML/CSS</li>
                                <li><FaAngleDoubleRight /> JavaScript</li>
                                <li><FaAngleDoubleRight /> Bootstrap 5</li>
                                <li><FaAngleDoubleRight /> Tailwind CSS</li>
                                <li><FaAngleDoubleRight /> React JS</li>
                            </ul>
                        </div>
                        <div className="single-service-card">
                            <img src={serviceImg2} alt="" />
                            <h2>
                            <NavLink to="/services">Back-End Development</NavLink>
                            </h2>
                            <ul>
                                <li><FaAngleDoubleRight /> Python</li>
                                <li><FaAngleDoubleRight /> Djanog</li>
                                <li><FaAngleDoubleRight /> Django REST framwork (DRF)</li>
                                <li><FaAngleDoubleRight /> Sqlite, PostgreSQL (DB)</li>
                                <li><FaAngleDoubleRight /> AWS (Cloud Management)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSec;