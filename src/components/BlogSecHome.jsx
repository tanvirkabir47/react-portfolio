/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import blogimg from "../assets/blog.jpg"

const BlogSecHome = () => {

    return (
        <section className="pb-[70px]">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='mb-8'>
                            <h2 className="section-title text-center">My Blogs</h2>
                        </div>
                    </div>
                    <div className="col-12">
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

                        <div className='flex justify-end'>
                            <NavLink to="/blogs" className="underline font-semibold text-[15px]">View All Blogs</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSecHome;