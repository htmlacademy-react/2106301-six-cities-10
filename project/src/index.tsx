import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const places = 100;

root.render(
  <React.StrictMode>
    <App places ={places}/>
  </React.StrictMode>,
);
