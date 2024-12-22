import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import About from './components/About';
import BackToTop from "./components/BackToTop";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SocialLink from "./components/SocialLink";
import Blogs from "./pages/Blogs";
import ContactPage from "./pages/ContactPage";
import Project from "./pages/Project";
import SingleProject from "./pages/SingleProject";
import SingleBlog from "./pages/SingleBlog";

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/:slug" element={<SingleProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog/:slug" element={<SingleBlog/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
          
      
      <BackToTop/>
      <SocialLink/>
      <Footer/>
    </div>
  )
}

export default App
