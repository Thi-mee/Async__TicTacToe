import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-nihel.us.auth0.com"
        clientId='LR3Dwc3UO99XCfGdZLbsPTe7M8SREDoa'
        authorizationParams={{
          redirect_uri: window.location.origin + '/home'
        }}
      >
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);