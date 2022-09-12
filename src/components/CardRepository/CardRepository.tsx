// Libraries
import styled from "styled-components";

// Types
import { RepositoryDetails } from "../../utilities/getRepositoryData/getRepositoryData";




/**
 * Styled container for repository cards
 */
const StyledContainer = styled.li`
  background-color: gray;
  border-radius: 10px;
  border: 1px solid black;
  padding: .5rem;
  list-style: none;
  margin: 1rem .5rem;
  display: grid;
  box-shadow: 2px 2px 4px black; 

  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "title"
      "link"
      "picture"
      "description";
  };

  @media only screen and (min-width: 768px) {
    grid-template-areas:
      "title link"
      "description picture";
  };

  &:hover {
    filter: drop-shadow(0px 0px 4px yellow);
  }
`;

/**
 * Styled title
 */
const StyledTitle = styled.h3<{gridArea?: string}>`
  ${props => props.gridArea ? "grid-area: " + props.gridArea + ";" : ""}
`;

/**
 * Styled paragraph
 */
const StyledParagraph = styled.p<{gridArea?: string}>`
  ${props => props.gridArea ? "grid-area: " + props.gridArea + ";" : ""}
`;

/**
 * Styled card link
 */
 const StyledLink = styled.a<{gridArea?: string}>`
 color: white;
 place-self: end;
 ${props => props.gridArea ? "grid-area: " + props.gridArea + ";" : ""}
`;

/**
 * Picture placeholder
 */
const PicturePlaceholder = styled.div<{gridArea?: string}>`
  background-color: white;
  place-self: end;
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  ${props => props.gridArea ? "grid-area: " + props.gridArea + ";" : ""}
`;


/**
 * Card for displaying repository details
 */
const CardRepository = (props: RepositoryDetails): JSX.Element => {
  const { name, description, url } = props;
  const languages = props.languageInfo[0];

  return(
    <StyledContainer>
      <StyledTitle {...{gridArea: "title"}}>{name}</StyledTitle>
      <StyledParagraph {...{gridArea: "description"}}>{description}</StyledParagraph>
      <StyledLink href={url} target="_blank" {...{gridArea: "link"}}>GitHub</StyledLink>
      <PicturePlaceholder {...{gridArea: "picture"}}/>
    </StyledContainer>
  );
};

export default CardRepository;