import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import YourRights from './pages/YourRights';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Language } from './translations';

const VALID_LANGS: Language[] = ['en', 'lv', 'de', 'fr', 'es'];

function getLang(lang: string | undefined): Language {
  return lang && VALID_LANGS.includes(lang as Language) ? (lang as Language) : 'en';
}

// Layout wrapper that reads current language from URL and validates it.
// Used as the layout route for all pages.
function LayoutOutlet() {
  const { lang: urlLang } = useParams<{ lang?: string }>();
  // If URL has a lang prefix that isn't a valid language, redirect to English home.
  if (urlLang && !VALID_LANGS.includes(urlLang as Language)) {
    return <Navigate to="/" replace />;
  }
  const lang = getLang(urlLang);
  return (
    <Layout lang={lang}>
      <Outlet />
    </Layout>
  );
}

// Generic page wrapper that reads lang from URL and passes as prop.
function PageWithLang({ Component }: { Component: React.ComponentType<{ lang: Language }> }) {
  const { lang } = useParams<{ lang?: string }>();
  return <Component lang={getLang(lang)} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* English routes (no language prefix) */}
        <Route element={<LayoutOutlet />}>
          <Route path="/" element={<PageWithLang Component={Home} />} />
          <Route path="/how-it-works" element={<PageWithLang Component={HowItWorks} />} />
          <Route path="/your-rights" element={<PageWithLang Component={YourRights} />} />
          <Route path="/faq" element={<PageWithLang Component={FAQ} />} />
          <Route path="/privacy" element={<PageWithLang Component={PrivacyPolicy} />} />
          <Route path="/terms" element={<PageWithLang Component={TermsOfService} />} />
        </Route>

        {/* Language-prefixed routes (lv, de, fr, es) */}
        <Route path="/:lang" element={<LayoutOutlet />}>
          <Route index element={<PageWithLang Component={Home} />} />
          <Route path="how-it-works" element={<PageWithLang Component={HowItWorks} />} />
          <Route path="your-rights" element={<PageWithLang Component={YourRights} />} />
          <Route path="faq" element={<PageWithLang Component={FAQ} />} />
          <Route path="privacy" element={<PageWithLang Component={PrivacyPolicy} />} />
          <Route path="terms" element={<PageWithLang Component={TermsOfService} />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
