// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// CSS
import './index.css';

// Content
import DataHome from './pages/home/data.home';

// Components
import App from './App';
import Missing404 from './pages/missing404/Missing404';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';



/**
 * DEVELOPMENT
 * clears console of error messages between hotswaps
 * @link https://github.com/vitejs/vite/discussions/3143
 */ 
 if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}
// DEVELOPMENT

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<App />}>

        <Route path='/' element={<Home {...DataHome} />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />

        </Route>

        <Route path='*' element={<Missing404 />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
