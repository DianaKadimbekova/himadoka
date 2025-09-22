import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Aside } from "./components/Aside/Aside";
import { Login } from "./components/Authorization/Login";
import { Register } from "./components/Authorization/Register";
import { Hello } from "./components/Hello";
import { MainPage } from "./components/MainPage/MainPage";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<><AboutMe/><Aside /></> } />
          <Route path="social" element={<SocialMedia />} />
          <Route path="posts" element={<Hello />} />
          <Route path="register" element={<Register />} />
          <Route path="achiv" element={<Hello />} />
          <Route path='login' element={<Login />}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);

