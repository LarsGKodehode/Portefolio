// Libraries
import React, { useEffect, useState } from "react";
// import getRepositoryData, { RepositoryDetails } from "../../utilities/getRepositoryData/getRepositoryData";

// Types
import { RepositoryDetails } from '../../utilities/getRepositoryData/getRepositoryData';


/**
 * Page containing exhastive list of projects associated with my profile on GitHub
 */
function Projects() {
  // State managment
  const [ projects, setProjects ] = useState<Array<RepositoryDetails>>([]);

  console.log("logging key:");
  console.log(import.meta.env.VITE_GITHUB_ACCESS_TOKEN);

  /**
   * Initial fetching of projects
   */
  useEffect(() => {
    const fetchGitHubData = async () => {
      // const dataGitHub = await getRepositoryData("LarsGKodehode");
      // setProjects(dataGitHub);
    };

    fetchGitHubData();
  }, []);

  // Construct JSX elements from project details
  const projectsElements = projects.map((project) => {
    return(
      <li>
        <h3>Project Name</h3>
        <p>Project description</p>
      </li>
    );
  });

  
  return(
    <div>
      <h1>Projects Page</h1>
      {React.Children.toArray(projectsElements)}
    </div>
  );
};

export default Projects;