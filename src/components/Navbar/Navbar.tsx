// Libraries
import React from "react";
// Types
import StyledLink, { StyledLinkProps } from "../StyledLink/StyledLink";

// Interface
interface NavbarProps {
  pagesProps: Array<StyledLinkProps>,
  styling: React.CSSProperties,
};

// Component
function Navbar(props: NavbarProps) {
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

export default Navbar;

export type {
  NavbarProps,
};