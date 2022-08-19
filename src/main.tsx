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


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<App />} />

        <Route path='*' element={<404 />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
