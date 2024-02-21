import bannerImg from '../assets/profile-1.png'

const Home = () => {
    return (
        <>
            <section className="hero-section h-full">
                <div className="container">
                    <div className='flex justify-between gap-[50px] flex-wrap md:flex-nowrap flex-col-reverse md:flex-row'>
                        <div className="hero-content flex items-center">
                            <div>
                                <h2>Hello, my name is</h2>
                                <h1>Tanvir Kabir</h1>
                                <h4>Im a Web Developer</h4>
                                <p>From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique. </p>
                            </div>
                        </div>
                        <div className='banner-img'>
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;