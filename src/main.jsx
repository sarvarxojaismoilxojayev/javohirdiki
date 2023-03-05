import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Provider } from 'react-redux'
import store from './store'
// axios
import axios from 'axios'
axios.defaults.baseURL = "https://nt-jobify.onrender.com";
axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["x-auth-token"] = `${token}`;
let token = localStorage.getItem("token")
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
    <App />
    <ToastContainer theme="colored"/>
    </Provider>
  </Router>
)