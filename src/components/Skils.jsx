import { FaDownload } from "react-icons/fa";
import Resume from '../assets/file/Tanvir_frontend.pdf'

const Skils = () => {
    
    return (
        <section className="section-padding bg-[--bg-color]">
            <div className="container">
                <h2 className="section-title text-center">My Skills</h2>
                <div className="flex gap-10 flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <div className="skill-text">
                            <p>|| Special Skills</p>
                            <h2>My Special Skill Field Here.</h2>
                            <p>A self-motivated, energetic, and passionate professional web Development with valuable experience in HTML, CSS, JavaScript and Laravel. I enjoy turning complex problems into simple, beautiful, and intuitive interface designs.</p>
                            <a href={Resume} download className="primary-btn w-[fit-content] mt-5">Get Resume <FaDownload /></a>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="skillbar-bg">
                            <div className="skills html"><p>HTML</p>95%</div>
                            
                        </div>

                        <div className="skillbar-bg">
                            <div className="skills css"><p>CSS</p>90%</div>
                        </div>

                        <div className="skillbar-bg">
                            <div className="skills js"><p>JavaScript</p>65%</div>
                        </div>

                        <div className="skillbar-bg">
                            <div className="skills react"><p>React JS</p>50%</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skils;