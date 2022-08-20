// CSS
import './App.css';

// Types
import { NavbarProps } from './components/Navbar/navbar.d';

// Components
import {
  Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


// Component
function App() {

  const navbarStyling: React.CSSProperties = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    display: 'flex',
    flexDirection: 'column',
  };
  const navbarProps: NavbarProps = {
    pagesProps: [
      {path: 'home', text:'Home'},
      {path: 'projects', text:'Projects'},
      {path: 'contact', text:'Contact'},
    ],
    styling: navbarStyling,
  };

  return (
    <div className='App'>
      <Navbar {...navbarProps} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;