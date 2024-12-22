import AboutHome from "../components/AboutHome";
import BlogSecHome from "../components/BlogSecHome";
import Hero from "../components/HeroComponents/Hero"
import ProjectSecHome from "../components/ProjectSecHome";
import ServiceSec from "../components/ServiceSec";
import Skils from "../components/Skils";

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutHome/>
            <Skils/>
            <ServiceSec/>
            <ProjectSecHome/>
            <BlogSecHome/>
        </>
    )};

export default Home;