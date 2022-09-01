// Types
import { HomeProps } from '../../@types/types';

// Components
import CustomSVG, { Color, CustomSVGProps } from "../../components/CustomSVG/CustomSVG";

/**
 * Homepage and landing page
 * - Picture
 * - 2-line-hook
 * - Skillset
 * - Top picks of projects to showcase
 */
function Home(props: HomeProps) {

  // Constructing the props
  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  };
  const SVGWrapperProps = {
    style: style,
  };

  const fill: Color = `rgb(${255}, ${255}, ${255})`;
  const SVGProps: CustomSVGProps = {
    width: 100,
    height: 100,
    fill: fill,
  };


  // Returned Components
  return(
    <div>
      <h1>Home Page</h1>
      <div {...SVGWrapperProps} >
        <CustomSVG {...SVGProps} />
      </div>
    </div>
  );
};

export default Home;