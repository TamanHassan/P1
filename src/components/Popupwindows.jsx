import React from "react";

function Popupwindows({ title, info, onClick }) {
    return (
        <div className ="popup-window">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
            <button className="Close-button" onClick={Onclick}>
                Close window
            </button>
        </div>
    );
};
export default Popupwindows;