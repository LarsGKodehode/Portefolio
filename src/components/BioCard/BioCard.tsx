// Types
import { CSSProperties } from "styled-components";
import { BioCardProps, ColorHEX } from "../../@types/types";

// Material
import Material from "../../utilities/Material/Material";
import { MaterialGlass } from "../../utilities/Material/Material.d";

// Const variables

// Glass properties
const glassProperties: MaterialGlass = {
  material: 'glass',
  tint: [80, 80, 80],
  opacity: '0.3',
};
/**
 * Material: Glass
 */
const glassMaterial = Material(glassProperties);


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
    gridTemplateColumns: 'min(100px, 2fr) max(10em, 100px)',
    gridTemplateRows: 'repeat(2, 1fr)',
    borderRadius: '20px',
    padding: 'min(2%, 20px)',
    ...glassMaterial,
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