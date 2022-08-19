// CSS
import './App.css';
// Components
import {
  Link, Outlet,
} from 'react-router-dom';
import Navbar, { NavbarProps } from './components/Navbar/Navbar';




// Component
function App() {

  const navbarProps: NavbarProps = {
    pagesProps: [
      {path: 'home', text:'Home'},
      {path: 'projects', text:'Projects'},
      {path: 'contact', text:'Contact'},
    ],
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