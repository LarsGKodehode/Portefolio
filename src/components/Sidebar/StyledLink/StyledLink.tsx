// Libraries
import { useState } from "react";

// Types
import { StyledLinkProps } from '../sidebar.d';

// External Components
import { Link } from "react-router-dom";


// Component
function StyledLink(props: StyledLinkProps) {
  const { internal, path, name, svgPath, style } = props;

  // state managment
  const [ isHover, setIsHover ] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // construct props
  const handlers = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
  const styling: React.CSSProperties = {
    margin: '1em',
    backgroundColor: isHover ? 'purple' : '',
    padding: '1em',
    width: '80%', 
    borderRadius: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    ...style,
  };

  return(
    // Is link to same site?
    internal ?
      <Link
        style={styling}
        to={path}
        {...handlers}
      >

        {svgPath && <img src={svgPath} /> || name}

      </Link>
    : // This is an external linkg
      <a
        style={styling}
        href={path}
        target='_blank'
        title={name}
        {...handlers}
      >

        { svgPath && <img src={svgPath} /> || name}

      </a>
  );
};

export default StyledLink;