import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Auth/Login/login.tsx';
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
import Accountants from './layout/Users/Accountants/Accountants.tsx';
import Requests from './layout/Requests/Requests.tsx';
import EditAccuntants from './layout/Users/Edit-Accuntants/EditAccuntants.tsx';
import Certified from './layout/Users/Certified/Certified.tsx';
import EditCertidied from './layout/Users/Edit-Certidied/EditCertidied.tsx';
import Interviewers from './layout/Users/Interviewers/Interviewers.tsx';
import EditInterviewer from './layout/Users/EditInterviewer/Edit-Interviewer.tsx';
import Availability from './layout/Users/Availability/Availability.tsx';
import Instructor from './layout/Users/Instructor/Instructor.tsx';
import EditInstructor from './layout/Users/Edit-Instructor/Edit-Instructor.tsx';
import UserCompany from './layout/Users/Company/Company.tsx';
import EditCompany from './layout/Users/Edit-Company/Edit-Company.tsx';
import JobOffers from './layout/Users/Company/SubPages/Job-Offers/Job-Offers.tsx';
import JopOffersview from './layout/Users/Company/SubPages/Jop-Offers-view/JopOffersview.tsx';
import Subscription from './layout/Users/Subscription/Subscription.tsx';
import EditSubscription from './layout/Users/Subscription/Sub-Pages/Edit-Subscription/Edit-Subscription.tsx';
import Payments from './layout/User-Management/Payments/Payments.tsx';
import AddPayment from './layout/User-Management/SubPages/Add Payment/AddPayment.tsx';

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
  <Route index element={<Requests/>} />  
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
  <Route path="/user-accountants" element={<SideBar />}>
    <Route index element={<Accountants />} />  
  </Route>
  <Route path="/edit-accuntant" element={<SideBar />}>
    <Route index element={<EditAccuntants />} />  
  </Route>
  <Route path="/user-certified" element={<SideBar />}>
    <Route index element={<Certified />} />  
  </Route>
  <Route path="/edit-certified" element={<SideBar />}>
    <Route index element={<EditCertidied />} />  
  </Route>
  <Route path="/user-interviewers" element={<SideBar />}>
    <Route index element={< Interviewers />} />  
  </Route>
  <Route path="/edit-Interviewer" element={<SideBar />}>
    <Route index element={< EditInterviewer />} />  
  </Route>
 
  <Route path="/user-availability" element={<SideBar />}>
    <Route index element={< Availability />} />  
  </Route>
   
  <Route path="/user-instructor" element={<SideBar />}>
    <Route index element={< Instructor />} />  
  </Route>
 
     
  <Route path="/edit-instructor" element={<SideBar />}>
    <Route index element={< EditInstructor />} />  
  </Route>
  <Route path="/user-company" element={<SideBar />}>
    <Route index element={< UserCompany />} />  
  </Route>
  <Route path="/edit-company" element={<SideBar />}>
    <Route index element={< EditCompany />} />  
  </Route>

  <Route path="/Job-Offers" element={<SideBar />}>
    <Route index element={<  JobOffers />} />  
  </Route>
  
  <Route path="/Job-Offers-View" element={<SideBar />}>
    <Route index element={< JopOffersview />} />  
  </Route>
   
  <Route path="/user-subscription" element={<SideBar />}>
    <Route index element={< Subscription />} />  
  </Route>
  <Route path="/edit-subscription" element={<SideBar />}>
    <Route index element={< EditSubscription />} />  
  </Route>
  <Route path="/payments" element={<SideBar />}>
    <Route index element={< Payments />} />  
  </Route>
 
  <Route path="/add-payment" element={<SideBar />}>
  <Route index element={<AddPayment />} />  
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
