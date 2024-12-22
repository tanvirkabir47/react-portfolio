import BlogHero from "../components/HeroComponents/BlogHero";
import blogimg from "../assets/blog.jpg"
import { NavLink } from "react-router-dom";
const Blogs = () => {
    return (
        <div>
            <BlogHero/>

            <section className="py-[30px] mt-2 mb-5">
                <div className="container">
                    <div className="blog-sec-head">
                        <p>|| Articles</p>
                        <h2>Latest Blogs</h2>
                    </div>

                    <div className="blog-card">
                        <div className="single-blog-card">
                            <div className="blog-card-cover">
                                <img src={blogimg} alt="blog-image" />
                            </div>
                            <div className="blog-card-body">
                                <a href="" className="catagory">Catagory</a>
                                <h3>
                                    <NavLink to="../blog/single">Blockchain Technology: Beyond Cryptocurrency...</NavLink>
                                </h3>
                                <div className="blog-card-footer">
                                    <span>Date: 15th Feb, 2022</span>
                                    <span>Comments: 5</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog-card">
                            <div className="blog-card-cover">
                                <img src={blogimg} alt="blog-image" />
                            </div>
                            <div className="blog-card-body">
                                <a href="" className="catagory">Catagory</a>
                                <h3>
                                    <NavLink to="../blog/single">Blockchain Technology: Beyond Cryptocurrency...</NavLink>
                                </h3>
                                <div className="blog-card-footer">
                                    <span>Date: 15th Feb, 2022</span>
                                    <span>Comments: 5</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog-card">
                            <div className="blog-card-cover">
                                <img src={blogimg} alt="blog-image" />
                            </div>
                            <div className="blog-card-body">
                                <a href="" className="catagory">Catagory</a>
                                <h3>
                                    <NavLink to="../blog/single">Blockchain Technology: Beyond Cryptocurrency...</NavLink>
                                </h3>
                                <div className="blog-card-footer">
                                    <span>Date: 15th Feb, 2022</span>
                                    <span>Comments: 5</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;