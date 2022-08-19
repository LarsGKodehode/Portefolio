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
// Components
import App from './App';
import Missing404 from './pages/missing404/Missing404';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<App />}>

        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />

        </Route>

        <Route path='*' element={<Missing404 />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
