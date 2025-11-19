import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";


function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);

    
    return (
        <div style={{ padding: "20px" }}>
            <h1>Portfolio Page</h1>

    <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
    </button>

    {showProjects && (

        <>
      <ProjectCard 
        name="My Bucket list"
        screenshot="/images/mybucketlist.png"
        github="https://github.com/TamanHassan/My-bucket-list.git"
        tech="Html, Images and CSS"
        description= "My first piece of code, learning the basics of html"
        whatYouLearned="I learned how to write basic html code and structure a webpage."
        role="Front-end Developer"
        challenges= "A challenges was learning how styles and images can be integrated with html"
      />
    
     <ProjectCard
        name="Animation"
        screenshot="/images/animation.png"
        github= "https://github.com/TamanHassan/animation-birthday.git"
        tech="Html,Images and CSS"
        description= "This is an animation project"
        whatYouLearned= "I learned how to create animations using css and html"
        role= "Front-end Developer"
        challenges= "A challenges was learning how to create smooth animations using keyframes"
      />

       <ProjectCard
        name="Duck"
        screenshot="/images/duckform.png"
        github= "https://github.com/TamanHassan/Duck.git"
        tech= "Html,Images and CSS"
        description= "The is a recreated image of a duck"
        whatYouLearned= "Learned how to recreate an image from scracth using html and css"
        role= "Front-end Developer"
        challenges= " Getting the correct measurements and proportions to reflect the original image"
      />
        </>
    )}
      
      </div>
    );
}
export default Portfolio;