import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaWhatsappSquare, FaTelegramPlane } from "react-icons/fa";
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
                    <a href="https://t.me/tanvirkabir47" title="Telegram" target="_blank"><FaTelegramPlane /></a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLink;