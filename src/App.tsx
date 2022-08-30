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
  const sidebarStyling: React.CSSProperties = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    backgroundColor: 'rgb(50 50 50)',
  };
  const sidebarProps: SidebarProps = {
    pagesProps: [
      {path: 'home', svgPath: iconHome},
      {path: 'projects', text:'Projects'},
      {path: 'contact', text:'Contact'},
    ],
    presenceProps: [
      {name: 'GitHub', link: 'https://github.com/LarsGKodehode', logoPath: logoGitHub},
      {name: 'Linkedin', link: 'https://no.linkedin.com/in/lars-gunnar-solheim-99818b249', logoPath: logoLinkedin},
    ],
    styling: sidebarStyling,
  };

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