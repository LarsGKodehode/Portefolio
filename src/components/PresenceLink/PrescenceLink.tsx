// Types
import { PresenceLinkProps } from "../Sidebar/sidebar.d";


// Component
function PresenceLink(props: PresenceLinkProps) {
  const {
    name,
    link,
    alt,
    logoPath,
  } = props;

  const linkProps: React.CSSProperties = {

  };


  return(
    <a
      href={link}
      target='_blank'
      title={name}
    >
      { logoPath ?
        <img src={logoPath} /> :
        name
      }
    </a>
  );
};

export default PresenceLink;