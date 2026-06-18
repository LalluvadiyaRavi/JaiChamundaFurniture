import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import React from "react";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init({
  duration: 1000,
  once: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);