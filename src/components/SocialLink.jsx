import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

const SocialLink = () => {
    return (
        <div className="social-links-com">
            <ul>
                <li>
                    <a href="https://www.facebook.com/tanvirkabir47/" title="Facebook" target="_blank"><FaFacebookSquare /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tanvirkabir47/" title="Linkedin" target="_blank"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://github.com/tanvirkabir47" title="Github" target="_blank"><FaGithubSquare /></a>
                </li>
                <li>
                    <a href="https://wa.me/8801719048200" title="WhatsApp" target="_blank"><FaWhatsappSquare /></a>
                </li>
                <li>
                    <a href="https://www.fiverr.com/s/BRRKmDb" title="Fiverr" target="_blank"><TbBrandFiverr /></a>
                </li>
                <li>
                    <a href="https://www.upwork.com/freelancers/~01b798179948478f4f?mp_source=share" title="UpWork" target="_blank"><TbBrandUpwork /></a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLink;