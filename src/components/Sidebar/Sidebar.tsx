// Libraries
import React from "react";

// Types
import { StyledLinkProps, PresenceLinkProps, SidebarProps } from './sidebar.d';

// Components
import StyledLink from '../StyledLink/StyledLink';
import PresenceLink from "../PresenceLink/PrescenceLink";


// Component
function Sidebar(props: SidebarProps) {
  const { pagesProps, presenceProps } = props;

  const barStyling: React.CSSProperties = {
    ...props.styling,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };
  
  const navWrapperStyling: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };
  

  function mapPages(pageArray: Array<StyledLinkProps>) {
    return(pageArray.map( (pageProps: StyledLinkProps) =>
      <StyledLink {...pageProps} />
    ));
  };

  function mapPresence(presenceArray: Array<PresenceLinkProps>) {
    return(presenceArray.map( (props: PresenceLinkProps) => 
      <PresenceLink {...props} />
    ));
  };

  return(
    <div
      style={barStyling}
    >

      <nav
        aria-labelledby="internal-navigation"
        style={navWrapperStyling}
      >
        {React.Children.toArray(mapPages(pagesProps))}
      </nav>

      <nav
        aria-labelledby="external-links"
        style={navWrapperStyling}
      >
        {React.Children.toArray(mapPresence(presenceProps))}
      </nav>

    </div>
    
  );
};

export default Sidebar;