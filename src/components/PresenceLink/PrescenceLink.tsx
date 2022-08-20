// Types
import React from "react";
import { PresenceLinkProps } from "../Sidebar/sidebar.d";


// Component
function PresenceLink(props: PresenceLinkProps) {
  const {
    name,
    link,
    alt,
    logoPath,
  } = props;

  const linkStyle: React.CSSProperties = {
    textAlign: 'center',
  };
  const linkProps: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>  = {
    href: link,
    target: '_blank',
    title: name,
    style: linkStyle,
  };


  return(
    <a {...linkProps} >
      { logoPath ?
        <img src={logoPath} /> :
        name
      }
    </a>
  );
};

export default PresenceLink;