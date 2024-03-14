import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Headers from './components/header';
import UserProfile from './components/userProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/header" element={<Headers/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
