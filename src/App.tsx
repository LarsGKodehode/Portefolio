// CSS
import './App.css';

// Types
import { SidebarProps } from './components/Sidebar/sidebar.d';

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(50 50 50)',
  };
  const sidebarProps: SidebarProps = {
    pagesProps: [
      {path: 'home', text:'Home'},
      {path: 'projects', text:'Projects'},
      {path: 'contact', text:'Contact'},
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