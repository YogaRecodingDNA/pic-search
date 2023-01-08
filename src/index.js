import React from 'react';
import reactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages(); //temporary

const el = document.getElementById('root');

const root = reactDOM.createRoot(el);

root.render(<App />);