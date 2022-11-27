import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "/Users/latoshiawilliams/Development/code/Phase-2/my-app/src/components/App.js"
import { BrowserRouter } from "react-router-dom"
import "./App.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

