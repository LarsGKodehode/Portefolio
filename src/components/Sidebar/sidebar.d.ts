// Interface

import React from "react";

interface StyledLinkProps {
  path: string,
  internal: boolean,
  name: string,
  svgPath?: string,
  style?: React.CSSProperties,
};

interface PresenceLinkProps {
  name: string,
  link: string,
  logoPath?: string,
  alt?: string,
};

interface SidebarProps {
  pagesProps: Array<StyledLinkProps>,
  presenceProps: Array<StyledLinkProps>,
  styling: React.CSSProperties,
};

export type {
  StyledLinkProps,
  PresenceLinkProps,
  SidebarProps,
};