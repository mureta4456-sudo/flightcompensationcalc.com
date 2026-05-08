import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Calculator, Info, ShieldCheck, HelpCircle, Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Layout({ children, lang, setLang }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = translations[lang];

  const navItems = [
    { name: t.calculator, href: '/', icon: Calculator },
    { name: t.howItWorks, href: '/how-it-works', icon: HelpCircle },
    { name: t.rights, href: '/your-rights', icon: ShieldCheck },
    { name: t.faq, href: '/faq', icon: Info },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'lv', label: 'Latviešu' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Plane className="h-6 w-6 text-brand-navy" strokeWidth={3} />
              </div>
              <span className="text-xl font-bold tracking-tight">FlightComp</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors flex items-center space-x-1"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}

              <div className="flex items-center space-x-2 border-l border-slate-700 pl-6 ml-2">
                <Languages className="h-4 w-4 text-slate-400" />
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-sm font-medium focus:outline-none text-slate-300 hover:text-white cursor-pointer"
                >
                  {languages.map(l => <option key={l.code} value={l.code} className="bg-brand-navy">{l.label}</option>)}
                </select>
              </div>
            </nav>

            <div className="md:hidden flex items-center space-x-4">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-sm font-medium focus:outline-none text-slate-300"
              >
                {languages.map(l => <option key={l.code} value={l.code} className="bg-brand-navy">{l.code.toUpperCase()}</option>)}
              </select>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-navy border-t border-slate-700"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 text-lg font-medium text-slate-300 hover:text-brand-gold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-5 w-5 text-brand-gold" />
                <span className="text-lg font-bold">FlightComp</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering passengers with free tools to understand their rights under EU 261/2004 and UK261 regulations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/privacy" className="hover:text-brand-gold">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-brand-gold">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Trust</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 px-3 py-1 rounded text-xs">EC 261/2004 Compliant</span>
                <span className="bg-slate-800 px-3 py-1 rounded text-xs">UK261 Ready</span>
                <span className="bg-slate-800 px-3 py-1 rounded text-xs">No Data Selling</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              Disclaimer: This is not legal advice. Calculations are based on EC 261/2004 and UK261 regulations and may not account for all specific legal circumstances.
              &copy; {new Date().getFullYear()} FlightComp.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
