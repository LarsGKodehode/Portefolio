// Libraries
import { useState } from "react";

// Types
import { StyledLinkProps } from '../sidebar.d';

// External Components
import { Link } from "react-router-dom";


// Component
function StyledLink(props: StyledLinkProps) {
  // Extract prop
  const { internal, path, name, svgPath, style } = props;

  // State managment
  const [ isHover, setIsHover ] = useState(false);

  // Event handlers
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // Construct props
  const handlers = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  // Center content config
  const centerContent = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  };

  // Shape
  const shape = {
    borderRadius: '5px',
    margin: '15% 1%',
    padding: '10%',
  };

  const styling: React.CSSProperties = {
    backgroundColor: isHover ? 'purple' : '',
    textDecoration: 'none',
    cursor: 'pointer',
    ...centerContent,
    ...shape,
    ...style,
  };

  // Icon style
  const iconStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
  };



  return(
    // Is link to same site?
    internal ?
      <Link
        style={styling}
        to={path}
        title={name}
        {...handlers}
      >

        {svgPath && <img src={svgPath} style={iconStyle} /> || name}

      </Link>
    : // This is an external link
      <a
        style={styling}
        href={path}
        target='_blank'
        title={name}
        {...handlers}
      >

        { svgPath && <img src={svgPath} style={iconStyle} /> || name}

      </a>
  );
};

export default StyledLink;