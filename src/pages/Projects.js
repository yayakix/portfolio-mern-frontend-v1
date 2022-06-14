import { useState, useEffect } from "react";

function Projects(props) {
  const [projects, setProject] = useState([]);
  const getProjectData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProject(data);

  };

  useEffect(() => getProjectData, []);

  const loaded = () => {
    return projects.map((project, index) => (
      
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} alt='project' />
        <br></br>
        <a href={project.live}>live site</a>
        <br></br>
        <a href={project.git}>github link</a>
      </div>
    ));
  }

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
