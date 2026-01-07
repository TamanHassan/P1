import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import Popupwindows from "../components/Popupwindows.jsx";



function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    console.log("Selected project:", selectedProject);




    const projects = [
        {


        name: "My Bucket list",
        screenshot: "/images/mybucketlist.png",
        github: "https://github.com/TamanHassan/My-bucket-list.git",
        tech: "Html, Images and CSS",
        description: "My first piece of code, learning the basics of html",
        whatYouLearned: "I learned how to write basic html code and structure a webpage.",
        role: "Front-end Developer",
        challenges: "A challenges was learning how styles and images can be integrated with html",

      },
      {
    
        name:"Animation",
        screenshot: "/images/animation.png",
        github: "https://github.com/TamanHassan/animation-birthday.git",
        tech: "Html,Images and CSS",
        description: "This is an animation project",
        whatYouLearned: "I learned how to create animations using css and html",
        role: "Front-end Developer",
        challenges: "A challenges was learning how to create smooth animations using keyframes",
      
      },
      {


        name: "Duck",
        screenshot: "/images/duckform.png",
        github: "https://github.com/TamanHassan/Duck.git",
        tech: "Html,Images and CSS",
        description: "The is a recreated image of a duck",
        whatYouLearned: "Learned how to recreate an image from scracth using html and css",
        role: "Front-end Developer",
        challenges: " Getting the correct measurements and proportions to reflect the original image",
      },
    ];

    const filteredProjects = projects.filter (
        (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style= {{ padding: "20px" }}>
            <h1>Portfolio</h1>
            <input
            type="text"
            placeholder="Search projects by name or tech"
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
            style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
            />

            <button onClick={() => setShowProjects(!showProjects)}>
                {showProjects ? "Hide Projects" : "Show Projects"}
            </button>

            {showProjects && (
              <>
                {filteredProjects.map((project) => (
                    <ProjectCard
                    key={project.name}
                    name={project.name}
                    screenshot={project.screenshot}
                    github={project.github}
                    tech={project.tech}
                    description={project.description}
                    whatYouLearned={project.whatYouLearned}
                    role={project.role}
                    challenges={project.challenges}
                    onClick={(data)=> setSelectedProject(data)}
                    />
                ))}
              </>
            )}

            {selectedProject && (
                <Popupwindows {...selectedProject} onClose={() => setSelectedProject (null)} />
            )} 
        </div>
    );
}

       
export default Portfolio;