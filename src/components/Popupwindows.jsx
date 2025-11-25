import React from "react";

function Popupwindows({ name, description, tech, whatYouLearned, role, challenges, onClose }) {
    return (
        <div className ="popup-window">
            <h1 className="title">{name}</h1>
            <p><strong>Description:</strong>{description}</p>
            <p><strong>Tech:</strong>{tech}</p>
            <p><strong>What you learned:</strong>{whatYouLearned}</p>
            {role && <p><strong>Role:</strong>{role}</p>}
            <p><strong>Challenges:</strong>{challenges}</p>
            <button className="close-button" onClick={onClose}>
                Close window
            </button>
        </div>
    );
};
export default Popupwindows;