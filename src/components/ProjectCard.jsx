function ProjectCard( {
    name,
    screenshot,
    github,
    tech,
    description,
    whatYouLearned,
    role,
    challenges,
    onClick
} ) {

    const projectData = {
        name,
        screenshot,
        repo: github,
        tech,
        description,
        whatYouLearned,
        role,
        challenges
    };


    return (
        <div style={styles.card} onClick={() => onClick(projectData)}>
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

export default ProjectCard;