// Libraries
import React from "react";

// Types
import { StyledLinkProps, SidebarProps } from './sidebar.d';

// External Components
import StyledLink from './StyledLink/StyledLink';


// Component
function Sidebar(props: SidebarProps) {
  const {
    pagesProps,
    presenceProps
  } = props;

  /**
   * Create Links
   */
  function mapLinks(pageArray: Array<StyledLinkProps>) {
    return(pageArray.map( (pageProps: StyledLinkProps) =>
      <StyledLink {...pageProps} />
    ));
  };

  const internalLinks = mapLinks(pagesProps);
  const externalLinks = mapLinks(presenceProps);


  // Style Navbar
  const barStyling: React.CSSProperties = {
    ...props.styling,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2em .1em'
  };
  
  // Style nav sections
  const navContainerStyling: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  
  return(
    <div
      style={barStyling}
    >

      <nav
        aria-labelledby="internal-navigation"
        style={navContainerStyling}
      >
        {React.Children.toArray(internalLinks)}
      </nav>

      <nav
        aria-labelledby="external-links"
        style={navContainerStyling}
      >
        {React.Children.toArray(externalLinks)}
      </nav>

    </div>
    
  );
};

export default Sidebar;