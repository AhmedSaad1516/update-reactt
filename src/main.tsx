import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Auth/Login/login.tsx';
import Home from './layout/home/home.tsx'; 
import ar from './i18n/ar/ar.json'; 
import en from './i18n/en/en.json'; 
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import AuthGuard from './core/AuthGuard/AuthGuard.tsx'; // 
// import AuthLayout from './core/AuthLayout/AuthLayout.tsx'; // 

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
          <Route 
          
          path="/login" 
         
          element={
    
              < Login/>
        
          } />
          <Route
            path="/dashboard"
            element={
             
                <Home />
            
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
);

i18next.on('languageChanged', (lng) => {
  setDirection(lng);
});
