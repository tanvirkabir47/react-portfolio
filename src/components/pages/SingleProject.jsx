import { useParams } from "react-router-dom";
import { useGetSingleProjecBySlugQuery } from "../../services/ProjectData";
import { useEffect, useState } from "react";
import SingleProjectHero from "../HeroComponents/SingleProjectHero";
import CardSkeleton from "../CardSkeleton";

export default function SingleProject() {
    const { slug } = useParams();

    const {data, error, isLoading} = useGetSingleProjecBySlugQuery(slug);

    const [project, setProject] = useState([])

    useEffect(() => {
        if (data) {
            setProject(data);
        } else if (error) {
            console.log(error);
        }
    }, [data, error]);


  return (
    <>
        <SingleProjectHero/>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-details-main">
                            {
                                isLoading ? <CardSkeleton cardCount={4} /> : 

                                <div className="project-head">
                                    <h2 className="section-title">
                                        <a href={project.project_link} target="_blank">{project.title}</a>
                                    </h2>
                                    <p>{ project.description }</p>
                                    
                                    <div className="technology-used my-5 mb-9">
                                        <ul>
                                            {
                                                project.technologies?.map(tech => (
                                                    <li key={tech.id}>{tech.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="live-link my-5 mb-9">
                                        <h6>
                                            <p>Live link:</p>
                                            <a href={ project.project_link } target="_blank">{ project.project_link }</a>
                                        </h6>
                                    </div>

                                    <div className="project-image">
                                        <img src={project.image} alt="" />
                                        <p>More information will be updated as soon as possible. 🥱</p>
                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
