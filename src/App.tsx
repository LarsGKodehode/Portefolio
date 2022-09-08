// CSS
import './App.css';

// Types
import { SidebarProps } from './components/Sidebar/sidebar.d';

// Assets
import logoLinkedin from './assets/logos/Linkedin-square.svg';
import logoGitHub from './assets/logos/GitHub-square.svg';
import iconHome from './assets/icons/home.svg';
import iconProjects from './assets/icons/projects.svg';
import iconContact from './assets/icons/contact.svg';

// Components
import {
  Outlet,
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';


// Component
function App() {

  // Constructing props
  const sidebarStyling: React.CSSProperties = {
    gridArea: 'nav',
    backgroundColor: 'rgb(50 50 50)',
  };

  const sidebarProps: SidebarProps = {
    pagesProps: [
      {
        internal: true,
        path: '/',
        name: 'Home',
        svgPath: iconHome,
      },
      {
        internal: true,
        path: 'projects',
        name: 'Projects',
        svgPath: iconProjects,
      },
      {
        internal: true,
        path: 'contact',
        name:'Contact',
        svgPath: iconContact,
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
      <main style={{gridArea: "main", padding: '2rem 4rem 1rem 0px'}}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;