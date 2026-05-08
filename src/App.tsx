import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import YourRights from './pages/YourRights';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Language } from './translations';
 
export default function App() {
  const [lang, setLang] = React.useState<Language>('en');
 
  return (
    <BrowserRouter>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/how-it-works" element={<HowItWorks lang={lang} />} />
          <Route path="/your-rights" element={<YourRights lang={lang} />} />
          <Route path="/faq" element={<FAQ lang={lang} />} />
          <Route path="/privacy" element={<PrivacyPolicy lang={lang} />} />
          <Route path="/terms" element={<TermsOfService lang={lang} />} />
        </Routes>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}
 

