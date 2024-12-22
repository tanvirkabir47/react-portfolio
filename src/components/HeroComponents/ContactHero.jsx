import Resume from '../../assets/file/Tanvir_frontend.pdf'
import { FaDownload } from "react-icons/fa";
const ContactHero = () => {
    return (
        <section className="hero-section-contact">
            <div className="container">
                <div className="flex items-center justify-center">
                    <h1 className='text-center section-hero-title'>Contact with Me !</h1>
                </div>
                <div className="flex items-center justify-center">
                    <a href={Resume} download className="primary-btn w-[fit-content] mt-5">Get Resume <FaDownload /></a>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;