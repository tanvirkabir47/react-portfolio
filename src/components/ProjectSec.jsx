/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import { useGetAllProjectDataQuery } from '../services/ProjectData';
import { useEffect, useState } from 'react';
import CardSkeleton from "../components/CardSkeleton";

const ProjectSec = () => {


    const {data, error, isLoading} = useGetAllProjectDataQuery()

    const [frontendProjects, setFrontendProjects] = useState([]);
    const [backendProjects, setBackendProjects] = useState([]);

    useEffect(() => {
        if (data) {
            const frontendData = data.filter(project => project.role === 'frontend');
            const backendData = data.filter(project => project.role === 'fullstack');

            setFrontendProjects(frontendData);
            setBackendProjects(backendData);

        } else if (error) {
            console.log(error);
        }
    }, [data, error]);



    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className='mt-[50px]'>
                            <h2 className='text-[25px] font-semibold text-[--primary-color]'>Backend Project (Full-stack):</h2>
                        </div>

                        <div className="project-sec-main">
                            {
                                isLoading ? <CardSkeleton cardCount={3} />  : backendProjects.map((project) => (
                                    <div className="single-project max-w-[390px]" key={project.id}>
                                        <div className="project-img">
                                            <img src={project.image} alt="" />
                                        </div>
                                        <div className="project-details">
                                            <h2><NavLink to={`../project/${project.slug}`}>{ project.title }</NavLink></h2>
                                            <p>{ project.description }</p>
                                            <div className='technology-used mt-4'>
                                                <h3>Technologies Used:</h3>
                                                <ul>
                                                    {project.technologies.map( tech => (
                                                        <li key={tech.id}>{tech.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>



                        <div>
                            <h2 className='text-[25px] font-semibold text-[--primary-color]'>Frontend Project:</h2>
                        </div>
                        <div className="project-sec-main">
                           {
                                isLoading ? <CardSkeleton cardCount={6} />  : frontendProjects.map((project) => (
                                    <div className="single-project max-w-[390px]" key={project.id}>
                                        <div className="project-img">
                                            <img src={project.image} alt="" />
                                        </div>
                                        <div className="project-details">
                                            <h2><NavLink to={`../project/${project.slug}`}>{ project.title }</NavLink></h2>
                                            <p>{ project.description }</p>
                                            <div className='technology-used mt-4'>
                                                <h3>Technologies Used:</h3>
                                                <ul>
                                                    {project.technologies.map( tech => (
                                                        <li key={tech.id}>{tech.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSec;