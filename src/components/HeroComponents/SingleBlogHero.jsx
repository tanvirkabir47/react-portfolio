import { FaArrowDown } from "react-icons/fa";
const SingleBlogHero = () => {
    return (
        <section className="hero-section-about" style={{padding: "50px"}}>
            <div className="container">
                <div className="blog-hero">
                    <h1 className='text-center'>Read the article </h1>
                    <p className="arrow-ani"><FaArrowDown /></p>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogHero;