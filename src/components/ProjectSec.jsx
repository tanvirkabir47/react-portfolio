/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import xemblogImg from '../assets/projects/xemblog-django.png'
import carMatImg from '../assets/projects/carmatkings-co-uk.png'
import bdMapImg from '../assets/projects/bangladesh-location.png'

const ProjectSec = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-sec-main">
                            <div className="single-project">
                                <div className="project-img">
                                    <img src={xemblogImg} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2><NavLink to="https://xemblog-django.onrender.com" target="_blank">Xemblog - A Blogging Website </NavLink></h2>
                                    <p>This is my first Full-stack project. Xemblog is a full-stack web application developed using HTML, CSS, JavaScript, Python, and Django. It serves as a dynamic platform for reading and sharing blog posts. Secure user authentication system allows users to register, log in, and contribute their own content.</p>
                                    <div className='technology-used mt-4'>
                                        <h3>Technologies Used:</h3>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Python</li>
                                            <li>Django</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-project">
                                <div className="project-img">
                                    <img src={carMatImg} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2><NavLink to="https://carmatkings.co.uk" target="_blank">Car Mats King - Premium Custom-Fit Car Mats</NavLink></h2>
                                    <p>In this project I only did the frontend. The Carmat Kings website redesign project involved revamping an existing website to enhance its visual appeal, user experience, and functionality. The goal was to create a modern, responsive, user-friendly website that effectively showcases the company's products and services.</p>
                                    <div className='technology-used mt-4'>
                                        <h3>Technologies Used:</h3>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Python</li>
                                            <li>Django</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-project">
                                <div className="project-img">
                                    <img src={bdMapImg} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2>
                                        <NavLink to="https://bangladesh-location.netlify.app" target="_blank"> Bangladesh Location Explorer </NavLink>
                                    </h2>
                                    <p>The Bangladesh Location Explorer is a web application that provides users with an interactive map interface to explore various locations across Bangladesh. It serves as a valuable resource for tourists, researchers, and anyone interested in learning more about the geography and culture of Bangladesh.</p>
                                    <div className='technology-used mt-4'>
                                        <h3>Technologies Used:</h3>
                                        <ul>
                                            <li>React JS</li>
                                            <li>Redux</li>
                                            <li>Tailwind CSS</li>
                                            <li>Django REST Framework (DRF API)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSec;