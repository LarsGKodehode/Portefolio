// Libraries
import React from "react";

// Types
import { StyledLinkProps, PresenceLinkProps, SidebarProps } from './sidebar.d';

// External Components
import StyledLink from './StyledLink/StyledLink';
import PresenceLink from "./PresenceLink/PrescenceLink";


// Component
function Sidebar(props: SidebarProps) {
  const {
    pagesProps,
    presenceProps
  } = props;

  /**
   * Create Links
   */
  // internal links
  function mapPages(pageArray: Array<StyledLinkProps>) {
    return(pageArray.map( (pageProps: StyledLinkProps) =>
      <StyledLink {...pageProps} />
    ));
  };

  // external links
  function mapPresence(presenceArray: Array<PresenceLinkProps>) {
    return(presenceArray.map( (props: PresenceLinkProps) => 
      <PresenceLink {...props} />
    ));
  };


  // Style Navbar
  const barStyling: React.CSSProperties = {
    ...props.styling,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2em .5em'
  };
  
  // Style nav sections
  const navContainerStyling: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };
  const internalNavStyling: React.CSSProperties = {
    ...navContainerStyling,
  };
  const externalNavStyling: React.CSSProperties = {
    ...navContainerStyling,
  };

  
  return(
    <div
      style={barStyling}
    >

      <nav
        aria-labelledby="internal-navigation"
        style={internalNavStyling}
      >
        {React.Children.toArray(mapPages(pagesProps))}
      </nav>

      <nav
        aria-labelledby="external-links"
        style={externalNavStyling}
      >
        {React.Children.toArray(mapPresence(presenceProps))}
      </nav>

    </div>
    
  );
};

export default Sidebar;