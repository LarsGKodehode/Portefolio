// Types
import { CSSProperties } from "styled-components";
import { BioCardProps, ColorHEX } from "../../@types/types";

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

  /**
   * Material: Glass
   */
  const glassMaterial = (tint: ColorHEX): CSSProperties => {
    return {
      backgroundColor: tint + '40',
    };
  };

  const cardStyle: CSSProperties = {
    display: 'grid',
    gridTemplateAreas: `
      'img name'
      'img bio'
    `,
    borderRadius: '20px',
    padding: 'min(2%, 40px)',
    ...glassMaterial('#ffffff'),
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