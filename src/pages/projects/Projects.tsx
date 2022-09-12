// Libraries
import React, { useEffect, useState } from "react";
import getRepositoryData from "../../utilities/getRepositoryData/getRepositoryData";

// Types
import { RepositoryDetails } from '../../utilities/getRepositoryData/getRepositoryData';


/**
 * Page containing exhastive list of projects associated with my profile on GitHub
 */
function Projects() {
  // State managment
  const [ projects, setProjects ] = useState<Array<RepositoryDetails>>([]);

  /**
   * Initial fetching of projects details
   */
  useEffect(() => {
    const fetchGitHubData = async () => {
      console.log(`DEBUG:\t Fetching from GitHub.`)
      const initialData = await getRepositoryData("LarsGKodehode");
      if(initialData) {
        setProjects(initialData);
      };
    };

    fetchGitHubData();
  }, []);

  // Construct JSX elements from project details
  const projectsElements = projects.map((project) => {
    return(
      <a href={project.url}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <img loading="lazy" src={project.card} alt="" />
      </a>
    );
  });

  
  return(
    <div>
      <h1>Projects Page</h1>
      <ul>
        {React.Children.toArray(projectsElements)}
      </ul>
    </div>
  );
};

export default Projects;