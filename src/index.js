import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import NavigatorProvider from './components/navigations/navigatorProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavigatorProvider />
    </Router>
  </React.StrictMode>
);
