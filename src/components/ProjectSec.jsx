/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import xemblogImg from '../assets/projects/xemblog-django.png'
import carMatImg from '../assets/projects/carmatkings-co-uk.png'
import bdMapImg from '../assets/projects/bangladesh-location.png'
import MapImg from '../assets/projects/meinwunschgarten.png'
import bookImg from '../assets/projects/digilangua-co.png'
import taaplyImg from '../assets/projects/taaply-net.png'

const ProjectSec = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h2 className='text-[25px] font-semibold text-[--primary-color]'>Backend Project (Full-stack):</h2>
                        </div>
                        <div className="project-sec-main">
                            <div className="single-project max-w-[390px]">
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
                                    <img src={taaplyImg} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2>
                                        <NavLink to="https://taaply.net/" target="_blank"> Taaply - The Future of QR Codes</NavLink>
                                    </h2>
                                    <p>"At Taaply, specialists harness innovative technology, seeing QR codes as bridges between physical and digital realms. The platform offers secure, customizable options and an enhanced user experience. Analytics make managing QR codes simple via the personalized back-office. Whether personal or business, Taaply empowers users to create and manage QR codes effortlessly, unlocking digital potential."</p>
                                    <div className='technology-used mt-4'>
                                        <h3>Technologies Used:</h3>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Django</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='mt-[50px]'>
                            <h2 className='text-[25px] font-semibold text-[--primary-color]'>Frontend Project:</h2>
                        </div>
                        <div className="project-sec-main">
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
                            <div className="single-project">
                                <div className="project-img">
                                    <img src={MapImg} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2>
                                        <NavLink to="https://meinwunschgarten.com/" target="_blank"> Mein Wunschgarten </NavLink>
                                    </h2>
                                    <p>"Mein WunschGarten" is a German gardening website where users can find inspiration, advice, and products for their dream gardens. As a frontend developer, I helped create a user-friendly interface, making the site visually appealing and easy to navigate. My role was crucial in enhancing the overall user experience and ensuring compatibility across devices and browsers.</p>
                                    <div className='technology-used mt-4'>
                                        <h3>Technologies Used:</h3>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Django</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="single-project">
                                <div className="project-img">
                                    <img src={bookImg} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2>
                                        <NavLink to="https://digilangua.co/" target="_blank"> Digilangua - An E-Learning Reading site your students will love. </NavLink>
                                    </h2>
                                    <p>"DigiLangua" is a vibrant online hub for language learning, where users dive into engaging activities and lessons to improve their linguistic abilities. My role as a frontend developer was instrumental in shaping the website's look and feel, making it easy to navigate and use across different devices. <br /> [Design: Client Requirments]</p>
                                    <div className='technology-used mt-4'>
                                        <h3>Technologies Used:</h3>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Django</li>
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