// Interface

interface StyledLinkProps {
  path: string,
  text?: string,
  svgPath?: string,
};

interface SidebarProps {
  pagesProps: Array<StyledLinkProps>,
  styling: React.CSSProperties,
};

export type {
  StyledLinkProps,
  SidebarProps,
};