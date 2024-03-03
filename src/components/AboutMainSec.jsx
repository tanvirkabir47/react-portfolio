import AboutImg from '../assets/about-img.png'
const AboutMainSec = () => {
    return (
        <section className="section-padding my-10">
            <div className="container">
                <div className="flex gap-10 items-center flex-col md:flex-row w-full">
                    <div className="md:w-1/2 w-full">
                        <div className="about-img flex md:justify-start justify-center">
                            <img src={AboutImg} alt="" />
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full about-text">
                        <h2 className=''>I'm Tanvir Kabir</h2>
                        <h4>Front-End Web developer specializing in React JS.</h4>
                        <p>A self-motivated, energetic, and passionate professional web Development with valuable experience in HTML, CSS, JavaScript and React JS. I enjoy turning complex problems into simple, beautiful, and intuitive interface designs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMainSec;