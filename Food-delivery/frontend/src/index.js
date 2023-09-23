import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './page/Home';
import Orders from './page/Orders';
import Contact from './page/Contact';
import Login from './page/Login';
import Food from './page/Food';
import Restaurant from './page/Restaurant';
import Signup from './page/Signup';
import {store} from './redux/index'
import {Provider} from "react-redux"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='orders' element={<Orders/>} />
      <Route path='contact'element={<Contact/>} />
      <Route path='food' element= {<Food/>} />
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>} />
      <Route path='admin' element={<Restaurant/>} />
      <Route/>
    </Route>
  )  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
