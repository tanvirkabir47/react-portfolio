import { useState } from "react";

const CustomeCursor = () => {

    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e)=>{
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    })

    return (
        <div className="customr_cursor" 
        style={{
            left: (cursorX-15) + 'px',
            top: (cursorY-15) + 'px',
        }}
        >
            
        </div>
    );
};

export default CustomeCursor;