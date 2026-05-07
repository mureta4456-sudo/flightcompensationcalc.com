import React from 'react';
import { CalculatorInputs, FlightStatus, Reason } from '../types';
import Autocomplete from './Autocomplete';
import { Calendar, Clock, AlertCircle, Info, Layers } from 'lucide-react';
import { Language, translations } from '../translations';

interface CalculatorFormProps {
  onCalculate: (inputs: CalculatorInputs) => void;
  lang: Language;
}

export default function CalculatorForm({ onCalculate, lang }: CalculatorFormProps) {
  const t = translations[lang];
  const [inputs, setInputs] = React.useState<CalculatorInputs>({
    departureAirport: null,
    arrivalAirport: null,
    flightDate: new Date().toISOString().split('T')[0],
    status: "Delayed at arrival",
    delayHours: 3,
    airline: null,
    reason: "Other/unknown",
    isConnecting: false,
    cancelNoticeDays: 0,
    alternativeFlightArrivedLateHours: 3
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(inputs);
  };

  const reasons: Reason[] = [
    "Crew shortage",
    "Airline staff strike",
    "Technical issue",
    "Weather",
    "Airport/ATC strike",
    "Security issue",
    "Other/unknown"
  ];

  const statuses: FlightStatus[] = [
    "Delayed at arrival",
    "Cancelled",
    "Denied boarding (overbooked)"
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
      <div className="space-y-8">
        {/* Route Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-brand-navy border-b border-slate-100 pb-2">
            <Clock className="h-5 w-5" />
            <h2 className="font-bold uppercase tracking-wider text-sm">{t.calcStep1}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Autocomplete 
              label={t.depAirport} 
              type="airport" 
              value={inputs.departureAirport} 
              onChange={(v) => setInputs({...inputs, departureAirport: v})}
              placeholder={t.depPlaceholder}
              id="dep-airport"
            />
            <Autocomplete 
              label={t.arrAirport} 
              type="airport" 
              value={inputs.arrivalAirport} 
              onChange={(v) => setInputs({...inputs, arrivalAirport: v})}
              placeholder={t.arrPlaceholder}
              id="arr-airport"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">{t.flightDate}</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="date"
                  value={inputs.flightDate}
                  onChange={(e) => setInputs({...inputs, flightDate: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                />
              </div>
            </div>
            <Autocomplete 
              label={t.airline} 
              type="airline" 
              value={inputs.airline} 
              onChange={(v) => setInputs({...inputs, airline: v})}
              placeholder={t.airlinePlaceholder}
              id="airline-select"
            />
          </div>
          <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg">
            <input 
              type="checkbox" 
              id="connecting" 
              checked={inputs.isConnecting}
              onChange={(e) => setInputs({...inputs, isConnecting: e.target.checked})}
              className="h-4 w-4 text-brand-blue rounded border-slate-300 focus:ring-brand-blue"
            />
            <label htmlFor="connecting" className="text-sm text-slate-600 flex items-center space-x-1 cursor-pointer">
              <Layers className="h-4 w-4 inline mr-1" />
              <span>{t.connecting}</span>
            </label>
          </div>
        </section>

        {/* What Happened Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-brand-navy border-b border-slate-100 pb-2">
            <AlertCircle className="h-5 w-5" />
            <h2 className="font-bold uppercase tracking-wider text-sm">{t.calcStep2}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">{t.flightStatus}</label>
              <select 
                value={inputs.status}
                onChange={(e) => setInputs({...inputs, status: e.target.value as FlightStatus})}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              >
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">{t.reason}</label>
              <select 
                value={inputs.reason}
                onChange={(e) => setInputs({...inputs, reason: e.target.value as Reason})}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              >
                {reasons.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>

          <div className="pt-2">
            {(inputs.status === "Delayed at arrival" || inputs.status === "Cancelled") && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-1">
                 <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-blue-900 group">
                        {t.hoursLate}
                        <Info className="h-3 w-3 inline ml-1 text-blue-400 group-hover:text-blue-600 transition-colors" />
                      </label>
                      <div className="flex items-center space-x-4">
                        <input 
                          type="range" 
                          min="0" 
                          max="24" 
                          step="0.5"
                          value={inputs.delayHours}
                          onChange={(e) => setInputs({...inputs, delayHours: parseFloat(e.target.value)})}
                          className="flex-grow accent-brand-blue"
                        />
                        <span className="font-bold text-lg text-brand-navy min-w-[3rem]">{inputs.delayHours}h</span>
                      </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        </section>

        <button 
          type="submit"
          disabled={!inputs.departureAirport || !inputs.arrivalAirport}
          className="w-full bg-brand-navy hover:bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Calculate Compensation</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </form>
  );
}
