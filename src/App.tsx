// CSS
import './App.css';
// Components
import {
  Link, Outlet,
} from 'react-router-dom';


// Component
function App() {
  return (
    <div className='App'>
      <nav>
      <Link
        style={{margin: '2em'}}
        to='home'
      >
        Home
      </Link>

      <Link
        style={{margin: '2em'}}
        to='projects'
      >
        Projects
      </Link>

      <Link
        style={{margin: '2em'}}
        to='contact'
      >
        Contact
      </Link>
      </nav>

      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default App;