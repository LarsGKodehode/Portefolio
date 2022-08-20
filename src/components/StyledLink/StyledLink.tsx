// Components
import { useState } from "react";
import { Link } from "react-router-dom";

// Types
import { StyledLinkProps } from '../Sidebar/sidebar.d';

// Component
function StyledLink(props: StyledLinkProps) {
  const { path, text } = props;

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
    borderRadius: '50%',
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
      {text}
    </Link>
  );
};

export default StyledLink;