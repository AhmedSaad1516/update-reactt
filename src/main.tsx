import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Auth/Login/login.tsx';
import Home from './layout/home/home.tsx'; 
import ar from './i18n/ar/ar.json'; 
import en from './i18n/en/en.json'; 
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AuthGuardLogin from './core/AuthLayout/AuthLayout.tsx';
import SideBar from './layout/side-bar/sideBar.tsx';
import AccountRequest from './layout/Account/Account-requset.tsx';
import CompanyRequest from './layout/Company-request/Company-request.tsx';
import CertifiedRequest from './layout/Certified-request/Certified-request.tsx';


 import  './index.css';

const savedLang = localStorage.getItem("lang") || "en";
i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLang,
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
});

const setDirection = (lang: string) => {
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
};
setDirection(savedLang);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

      
          <Route path="/login" element={
           
              <Login />
        
          } />

        
         
  <Route path="/request" element={<SideBar />}>
=    <Route index element={<Home />} />  
  </Route>
  <Route path="/Acc" element={<SideBar />}>
    <Route index element={<AccountRequest />} />  
  </Route>
  <Route path="/company-request" element={<SideBar />}>
    <Route index element={<CompanyRequest />} />  
  </Route>
  <Route path="/certified-request" element={<SideBar />}>
    <Route index element={<CertifiedRequest />} />  
  </Route>
 
 

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
);

i18next.on('languageChanged', (lng) => {
  setDirection(lng);
});
