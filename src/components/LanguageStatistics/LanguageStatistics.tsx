// Types
import React from 'react';
import { LanguagesInfo } from '../../utilities/getRepositoryData/getRepositoryData';

/**
 * Showcasing the 3 most prominent languages in a repository
 */
const LanguageStatistics = (props: {languageDetails: LanguagesInfo}): JSX.Element => {
  const { languageDetails } = props;
  console.log(languageDetails)

  // Create badges
  const badges = languageDetails.map((prop: any) => {
    return(
      <>
        {prop.language ? <h6>{prop.language}</h6> : ""}
        {prop.ratio ? <svg
          viewBox='0 0 100 2'
        >
          <rect height="2px" width="100%" fill="#444444"/>
          <rect height="2px" width={prop.ratio ? prop.ratio * 100 : 0} fill={prop.color ? prop.color : "black"}/>

        </svg> : ""}
      </>
    );
  });

  // Return
  return(
    <div>
      {React.Children.toArray(badges)}
    </div>
  );
};

export default LanguageStatistics;