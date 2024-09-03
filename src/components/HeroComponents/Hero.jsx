import bannerImg from '../../assets/profile-1.jpeg'

const Home = () => {
    return (
        <>
            <section className="hero-section h-full">
                <div className="container">
                    <div className='flex justify-between gap-[50px] flex-wrap md:flex-nowrap flex-col-reverse md:flex-row'>
                        <div className="hero-content flex items-center">
                            <div>
                                <h2>Hello! I’m</h2>
                                <h1>Tanvir Kabir</h1>
                                <p>Full-Stack Web developer specializing in Python, Django.</p>
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