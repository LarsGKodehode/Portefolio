// Interface

interface StyledLinkProps {
  path: string,
  text?: string,
  svgPath?: string,
};

interface PresenceLinkProps {
  name: string,
  link: string,
  logoPath?: string,
  alt?: string,
};

interface SidebarProps {
  pagesProps: Array<StyledLinkProps>,
  presenceProps: Array<PresenceLinkProps>,
  styling: React.CSSProperties,
};

export type {
  StyledLinkProps,
  PresenceLinkProps,
  SidebarProps,
};