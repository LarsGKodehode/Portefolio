// CSS
import './App.css';

// Types
import { SidebarProps } from './components/Sidebar/sidebar.d';

// Assets
import logoLinkedin from './assets/logos/Linkedin-square.svg';
import logoGitHub from './assets/logos/GitHub-square.svg';
import iconHome from './assets/icons/home.svg';

// Components
import {
  Outlet,
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';


// Component
function App() {

  // Constructing props
  const sidebarStyling: React.CSSProperties = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    backgroundColor: 'rgb(50 50 50)',
  };
  const sidebarProps: SidebarProps = {
    pagesProps: [
      {
        internal: true,
        path: 'home',
        name: 'Home',
        svgPath: iconHome,
      },
      {
        internal: true,
        path: 'projects',
        name:'Projects',
      },
      {
        internal: true,
        path: 'contact',
        name:'Contact',
      },
    ],
    presenceProps: [
      {
        internal: false,
        path: 'https://github.com/LarsGKodehode',
        name: 'GitHub',
        svgPath: logoGitHub,
      },
      {
        internal: false,
        path: 'https://no.linkedin.com/in/lars-gunnar-solheim-99818b249',
        name: 'Linkedin',
        svgPath: logoLinkedin,
      },
    ],
    styling: sidebarStyling,
  };

  // Return component
  return (
    <div className='App'>
      <Sidebar {...sidebarProps} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;