// Interface

interface StyledLinkProps {
  path: string,
  text?: string,
  svgPath?: string,
};

interface NavbarProps {
  pagesProps: Array<StyledLinkProps>,
  styling: React.CSSProperties,
};

export type {
  StyledLinkProps,
  NavbarProps,
};