/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import { useGetAllProjectDataQuery } from '../services/ProjectData';
import { useEffect, useState } from 'react';
import CardSkeleton from "./CardSkeleton";

const ProjectSecHome = () => {

    const {data, error, isLoading} = useGetAllProjectDataQuery()

    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        if (data) {
            const latestproject = data.slice(-3);
            setProjects(latestproject);

        } else if (error) {
            console.log(error);
        }
    }, [data, error]);

    console.log(Projects);


    return (
        <section className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='mb-8'>
                        <h2 className="section-title text-center">My Projects</h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-sec-main">
                        {
                            isLoading ? <CardSkeleton cardCount={6} />  : Projects.map((project) => (
                                <div className="single-project max-w-[390px]" key={project.id}>
                                    <div className="project-img">
                                        <img src={project.image} alt="" />
                                    </div>
                                    <div className="project-details">
                                        <h2><NavLink to={`../project/${project.slug}`}>{ project.title }</NavLink></h2>
                                        <p>{ project.description.slice(0, 250) }...</p>
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

                    <div className='flex justify-end'>
                        <NavLink to="/projects" className="underline font-semibold text-[15px]">View All Projects</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProjectSecHome;