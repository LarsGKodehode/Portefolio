// Types
import React from "react";
import { PresenceLinkProps } from "../sidebar.d";


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

  const imageStyle: React.CSSProperties = {
    width: '80%',
  };


  return(
    <a {...linkProps} >
      { logoPath ?
        <img
          src={logoPath}
          style={imageStyle}
        /> :
        name
      }
    </a>
  );
};

export default PresenceLink;