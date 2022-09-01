import { CSSProperties } from "styled-components";
import { BioCardProps } from "../../@types/types";

/**
 * Card for displaying bio information
 */
function BioCard(props: BioCardProps): JSX.Element {
  // Destructure incomming props
  const {
    name,
    bioShort,
    pictureURL
  } = props;

  // Construct various props
  const pictureAlt = `Picture of ${name}`;

  const cardStyle: CSSProperties = {
    display: 'grid',
    gridTemplateAreas: `
      'img name'
      'img bio'
    `,
  };

  const pictureStyle: CSSProperties = {
    width: '80%',
    border: '1px solid gray',
    borderRadius: '20px',
    alignSelf: 'center',
    justifySelf: 'center',
  };

  const pictureProps = {
    src: pictureURL,
    alt: pictureAlt,
    title: pictureAlt,
    style: {
      ...pictureStyle,
      gridArea: 'img',
    },
  };

  const nameProps = {
    style: {
      gridArea: 'name',
    },
  };

  const bioShortProps = {
    style: {
      gridArea: 'bio',
    },
  };


  return(
    <section style={cardStyle}>
      <img {...pictureProps}/>
      <h1 {...nameProps}>{name}</h1>
      <p {...bioShortProps}>{bioShort}</p>
    </section>
  );
};

export default BioCard;