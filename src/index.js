import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoContextProvider } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/app' element={<TodoContextProvider> <App /></TodoContextProvider>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);
