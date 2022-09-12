// Libraries
import React, { useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import CardRepository from "../../components/CardRepository/CardRepository";
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
      <CardRepository {...project}/>
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