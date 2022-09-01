// Types
import { HomeProps } from '../../@types/types';

// Components
import BioCard from '../../components/BioCard/BioCard';

/**
 * Homepage and landing page
 * - Picture
 * - 2-line-hook
 * - Skillset
 * - Top picks of projects to showcase
 */
function Home(props: HomeProps) {
  // Destructuring incomming prop
  const { bio } = props;

  // Constructing the props
  const style: React.CSSProperties = {
    height: '100%',
  };
  const SVGWrapperProps = {
    style: style,
  };


  // Returned Components
  return(
    <div>
      <div {...SVGWrapperProps} >
        <BioCard {...bio} />
      </div>
    </div>
  );
};

export default Home;