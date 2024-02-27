import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {


    const backToTop = () => {
        window.scrollTo(0, 0);
    }

    const [isTopVisible, setIsTopVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsTopVisible(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <button className={`backtotop-btn ${isTopVisible ? 'block' : 'hidden'}`} onClick={backToTop}>
                <FaArrowUp />
            </button>
        </div>
    );
};

export default BackToTop;