import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import About from './components/About';
import BackToTop from "./components/BackToTop";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SocialLink from "./components/SocialLink";
import Skills from "./components/pages/Skills";
import ContactPage from "./components/pages/ContactPage";

function App() {

  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
          
      
      <BackToTop/>
      <SocialLink/>
      <Footer/>
    </>
  )
}

export default App
