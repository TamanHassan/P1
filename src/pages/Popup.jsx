import { useState } from "react";
import Popupwindows from "../components/Popupwindows.jsx";

function Popup() {
    const [count, setCount] = useState(0);
    const [popupInfo, setPopupInfo] = useState({
        title: "Popup",
        info: "This is a sample popup information."
    });
    const [isOpen, setIsopen] = useState(false);
    const closePopup = () => {
        setIsopen (false);
    };


    return (
        <div>
            <button onClick={ () => setIsopen(true)} > Open Popup </button>
            <h1>Counter:{count} </h1>
            <button onClick={() => setCount(count + 1)}> Increase Counter </button>
            <button onClick={() => setCount(count - 1)}> Decrease Counter </button>
            {isOpen && (
                <Popupwindows 
                title={popupInfo.title} 
                info ={popupInfo.title} onClick={closePopup} />
            )}
        </div>
    );

};
export default Popup;




            

                

       
                

        



