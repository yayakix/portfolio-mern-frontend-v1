import { useState, useEffect } from "react";

function Projects(props) {
  const [projects, setProject] = useState([]);
  const getProjectData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    console.log(data);
    setProject(data);
  };
  useEffect(() => getProjectData, []);

  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>{project.live}</p>
        <p>{project.git}</p>
      </div>
    ));

  }
   

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
