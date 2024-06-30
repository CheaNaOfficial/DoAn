import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext';
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51PNGzYP9QtsT4YaeEfU9LStUcXRToD66LErpKQgtATB28LBEWJJdKHaSt7jvPSsnVmJlPV8zfeyCmbwE3JE6dvE600C8nqtTUf');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Elements stripe={stripePromise}>
  <CartProvider>
      <App />
    </CartProvider>
  </Elements>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
