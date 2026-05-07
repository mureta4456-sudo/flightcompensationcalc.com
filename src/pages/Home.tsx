import React from 'react';
import { CalculatorInputs, CalculationResult } from '../types';
import { calculateCompensation } from '../lib/compensationLogic';
import CalculatorForm from '../components/CalculatorForm';
import ResultCard from '../components/ResultCard';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, Globe, Scale } from 'lucide-react';
import { Language, translations } from '../translations';

interface HomeProps {
  lang: Language;
}

export default function Home({ lang }: HomeProps) {
  const [result, setResult] = React.useState<CalculationResult | null>(null);
  const [inputs, setInputs] = React.useState<CalculatorInputs | null>(null);
  const t = translations[lang];

  const handleCalculate = (calcInputs: CalculatorInputs) => {
    const res = calculateCompensation(calcInputs);
    setInputs(calcInputs);
    setResult(res);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              {t.heroTitlePart1}<br />
              <span className="text-brand-gold">{t.heroTitlePart2}</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              {t.heroSubtitle}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="flex items-center space-x-1.5 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              <span>EU Regulation 261/2004</span>
            </span>
            <span className="flex items-center space-x-1.5 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <Scale className="h-4 w-4 text-brand-gold" />
              <span>UK261 Rights Included</span>
            </span>
            <span className="flex items-center space-x-1.5 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <Zap className="h-4 w-4 text-brand-gold" />
              <span>No Login Required</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-12">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
            >
              <CalculatorForm onCalculate={handleCalculate} lang={lang} />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
            >
              <ResultCard result={result} inputs={inputs!} onReset={() => setResult(null)} lang={lang} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feature Grid */}
        {!result && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
            <div className="space-y-4">
              <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Globe className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Global Coverage</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Covers flights departing from all EU/EEA airports and UK hubs, plus EU/UK airlines arriving from anywhere.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Scale className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Legal Accuracy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Updated for post-Brexit regulations (UK261) and recent European Court of Justice rulings.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Zap className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Instant results</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No need to wait for a call. Get an immediate answer and a free claim template letter.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
