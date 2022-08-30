// Libraries
import { useState } from "react";

// Types
import { StyledLinkProps } from '../sidebar.d';

// External Components
import { Link } from "react-router-dom";


// Component
function StyledLink(props: StyledLinkProps) {
  const { path, text, svgPath } = props;

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
    textDecoration: 'none'
  };
  // Finish construction of props
  const linkProps = {
    style: styling,
    to: path,
    ...handlers,
  };



  return(
    <Link {...linkProps}>
      {text && text}
      {svgPath && <img src={svgPath} />}
    </Link>
  );
};

export default StyledLink;