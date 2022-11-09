import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from "./components/ProtectedRoute";

import {AuthContextProvider} from "./context/AuthContext";
import Navbar from "./components/navbar";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthContextProvider>
        <ProtectedRoute>
          <React.StrictMode>
              <Navbar/>
            <App />
          </React.StrictMode>
        </ProtectedRoute>
    </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
