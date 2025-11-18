import { useEffect } from "react";
import ProjectCard from "./src/components/ProjectCard.jsx";

function ProjectCard( {
    name,
    screenshot,
    github,
    tech,
    description,
    whatYouLearned,
    role,
    challenges,
} ) {

    useEffect(() => {
        document.title = `${name} - react project`;
    }, [name] );


    return (
        <div style={styles.card}>
            <img src={screenshot} alt={name} style= {styles.image}/>

            <h2>{name}</h2>
            <p><strong> Teach Used:</strong>{tech} </p>
            <p><strong> Description:</strong>{description} </p>
            <p><strong> What You Learned:</strong>{whatYouLearned} </p>

            {role && <p><strong> Your Role:</strong>{role} </p>}
            <p><strong>Challenges Solved:</strong>{challenges} </p>

            <a href={github} target="_blank">View on GitHub</a>
        </div>
    );
    }

    const styles = {
        card: {
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            width: "350px"
        },
        image: {
            width: "100%",
            borderRadius: "8px",

        }
        };


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Portfolio</h1>
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
      </div>
  );
}




    export default ProjectCard;



            



    