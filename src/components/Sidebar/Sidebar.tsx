// Libraries
import React from "react";

// Types
import { StyledLinkProps, SidebarProps } from './sidebar.d';

// Components
import StyledLink from '../StyledLink/StyledLink';


// Component
function Sidebar(props: SidebarProps) {
  const { pagesProps, styling } = props;

  function mapPages(pageArray: Array<StyledLinkProps>) {
    return(pageArray.map( (pageProps: StyledLinkProps) =>
      <StyledLink {...pageProps} />
    ));
  };

  return(
    <nav
      style={styling}
    >
      {React.Children.toArray(mapPages(pagesProps))}
    </nav>
  );
};

export default Sidebar;