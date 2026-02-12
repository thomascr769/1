import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
<<<<<<< HEAD
//import './index.css';
=======
>>>>>>> 6e656ca (Inital commit)
=======
import './index.css';
>>>>>>> 5d8d9f5 (fix: force case-sensitive rename for Gallery component)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);