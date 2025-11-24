import "../Popup.css";

export default function ProjectPopup ({ 
    name,
    screenshot,
    repo,
    tech,
    description,
    whatYouLearned,
    role,
    challenges,
    onClose
}) {
    return (
        <div className="popup-overlay" onClick={onClose}>  
            <div className="popup-container" onClick={(e) => e.stopPropagation()}> 
                <button className="close-btn" onClick={onClose}>X</button>

                <h2>{name}</h2>
                <img src={screenshot} alt={name} className="popup-image"/>

                <p><strong>Description:</strong> {description}</p>
                <p><strong>Tech Used:</strong> {tech}</p>
                <p><strong>What I Learned:</strong> {whatYouLearned}</p>

                {role && <p><strong>Role:</strong> {role}</p>} 
                {challenges && <p><strong>Challenges:</strong> {challenges}</p>}

                <a href={repo} target="_blank" rel="noreferrer" className="repo-link"> 
                    View Repository
                </a>
            </div>
        </div>
    );
}




            

                

       
                

        



