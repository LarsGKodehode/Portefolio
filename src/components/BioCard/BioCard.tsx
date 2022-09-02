// Types
import { useRef } from "react";
import { CSSProperties } from "styled-components";
import { BioCardProps } from "../../@types/types";

// Material
import Material from "../../utilities/Material/Material";
import { MaterialGlass } from "../../utilities/Material/Material.d";

// Const variables

// Glass properties
const glassProperties: MaterialGlass = {
  material: 'glass',
  tint: [120, 120, 120],
  opacity: '0.3',
};
/**
 * Material: Glass
 */
const glassMaterial = Material(glassProperties);


/**
 * Card for displaying bio information with picture
 */
function BioCard(props: BioCardProps): JSX.Element {
  // Destructure incomming props
  const {
    name,
    bioShort,
    pictureURL
  } = props;

  // Get refrence to this instance
  const reference = useRef<HTMLDivElement | null>(null);

  // Construct various props
  const pictureAlt = `Picture of ${name}`;

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

  const cardProps = {
    style: cardStyle,
    ref: reference,
  };


  // Return Component
  return(
    <div {...cardProps}>
      <img {...pictureProps}/>
      <h1 {...nameProps}>{name}</h1>
      <p {...bioShortProps}>{bioShort}</p>
    </div>
  );
};

export default BioCard;