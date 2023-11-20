import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";
import HomePage from './js/HomePage/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-1amhow0a0ahynq64.eu.auth0.com"
        clientId="uhFlwMcdC6oEmQB1cjPbQR3jCOTOu900"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
  <React.StrictMode>
    <Hotel/>
  </React.StrictMode>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
