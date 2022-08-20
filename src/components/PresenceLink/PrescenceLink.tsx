// Type
import { HTMLAttributeAnchorTarget } from "react";
import { PresenceLinkProps } from "../Sidebar/sidebar.d";


// Component
function PresenceLink(props: PresenceLinkProps) {
  const {
    name,
    link,
    alt,
    logoPath,
  } = props;


  return(
    <a
      href={link}
      target='_blank'
    >
      {name}
    </a>
  );
};

export default PresenceLink;