import React from 'react';
import { CalculationResult, CalculatorInputs } from '../types';
import { ShieldCheck, Calendar, MapPin, ExternalLink, Download, AlertTriangle, CheckCircle2, HelpCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { jsPDF } from 'jspdf';
import { Language, translations } from '../translations';

interface ResultCardProps {
  result: CalculationResult;
  inputs: CalculatorInputs;
  onReset: () => void;
  lang: Language;
}

export default function ResultCard({ result, inputs, onReset, lang }: ResultCardProps) {
  const t = translations[lang];
  const isHighConfidence = result.confidence === "High";
  const isMediumConfidence = result.confidence === "Medium";
  
  const generateClaimLetter = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    
    doc.setFontSize(20);
    doc.text('Flight Delay Compensation Claim', 20, 30);
    
    doc.setFontSize(12);
    doc.text(`Date: ${date}`, 20, 50);
    doc.text(`To: Customer Relations Department, ${inputs.airline?.name || '[Airline Name]'}`, 20, 60);
    
    doc.setFont("helvetica", "bold");
    doc.text(`Subject: Compensation Claim for Flight ${inputs.departureAirport?.code} to ${inputs.arrivalAirport?.code}`, 20, 80);
    
    doc.setFont("helvetica", "normal");
    const body = [
      `Date of Flight: ${inputs.flightDate}`,
      `Flight Direction: ${inputs.departureAirport?.name} to ${inputs.arrivalAirport?.name}`,
      `Distance: ${result.distanceKm} km`,
      `Nature of Issue: ${inputs.status} (Reason: ${inputs.reason})`,
      '',
      `I am writing to formally claim compensation for the ${inputs.status.toLowerCase()} of my flight.`,
      `According to ${result.jurisdiction === 'UK261' ? 'UK261' : 'EU Regulation 261/2004'}, I am entitled to`,
      `${result.jurisdiction === 'UK261' ? '£' + result.amountGbp : '€' + result.amountEur} per passenger.`,
      '',
      'Please acknowledge this claim within 14 days.',
      '',
      'Yours sincerely,',
      '[Your Name]'
    ];
    
    let y = 100;
    body.forEach(line => {
      doc.text(line, 20, y);
      y += 10;
    });
    
    doc.save(`FlightComp_Claim_${inputs.departureAirport?.code}.pdf`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Result Header */}
        <div className={`p-8 text-center border-b ${result.eligible ? 'bg-slate-50' : 'bg-red-50'}`}>
          {result.eligible ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-600 uppercase tracking-widest mb-2">Estimated Compensation</h2>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-6xl font-black text-brand-navy">
                  {result.jurisdiction === "UK261" ? `£${result.amountGbp}` : `€${result.amountEur}`}
                </span>
                {result.jurisdiction === "BOTH" && (
                  <span className="text-2xl text-slate-400 font-medium">or £{result.amountGbp}</span>
                )}
              </div>
              <p className="mt-4 text-slate-500 font-medium max-w-md mx-auto">
                {result.explanation}
              </p>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="h-10 w-10 text-red-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-red-900 mb-2">Not Eligible</h2>
              <p className="text-red-700 max-w-md mx-auto">{result.explanation}</p>
            </>
          )}
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
           <div className="bg-white p-6 flex items-start space-x-4">
              <div className="bg-brand-blue/10 p-2 rounded-lg"><MapPin className="h-6 w-6 text-brand-blue" /></div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Distance</p>
                <p className="text-lg font-bold text-brand-navy">{result.distanceKm} km</p>
                <p className="text-xs text-slate-400">Great-circle calculation</p>
              </div>
           </div>
           <div className="bg-white p-6 flex items-start space-x-4">
              <div className="bg-brand-gold/20 p-2 rounded-lg"><Calendar className="h-6 w-6 text-brand-gold" /></div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Claim Deadline</p>
                <p className="text-lg font-bold text-brand-navy">{result.deadlineDate}</p>
                <p className="text-xs text-slate-400">Based on local statute of limitations</p>
              </div>
           </div>
        </div>

        {/* Confidence & Nuances */}
        {result.eligible && (
          <div className="p-6 bg-white space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="flex items-center space-x-3">
                <ShieldCheck className={`h-6 w-6 ${isHighConfidence ? 'text-green-600' : isMediumConfidence ? 'text-blue-600' : 'text-amber-600'}`} />
                <div>
                  <p className="text-sm font-bold text-slate-900">Confidence: {result.confidence}</p>
                  <p className="text-xs text-slate-500">Based on rules and reason provided</p>
                </div>
              </div>
            </div>

            {result.reductionApplied && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>50% Reduction Applied:</strong> Under EC 261/2004, compensation may be halved if you were offered an alternative flight that arrived within 2-4 hours of your original time.
                </p>
              </div>
            )}

            {result.jurisdiction === "UK261" && (
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-800 leading-relaxed">
                    <strong>UK261 Notice:</strong> Since January 2021, UK airlines and flights departing from the UK fall under UK domestic law (UK261), not EC 261/2004. The rules are similar, but claims must be filed under UK jurisdiction.
                  </p>
                </div>
            )}
          </div>
        )}
      </div>

      {/* Action Section */}
      {result.eligible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <a 
            href="https://AIRHELP_AFFILIATE_PLACEHOLDER" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-brand-navy hover:bg-brand-blue text-white p-6 rounded-2xl shadow-xl transition-all flex flex-col justify-between items-start"
          >
            <div className="flex justify-between w-full mb-4">
              <div className="bg-brand-gold p-2 rounded-lg"><CheckCircle2 className="h-5 w-5 text-brand-navy" strokeWidth={3} /></div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg mb-1">Get this money fast</h3>
              <p className="text-slate-400 text-sm">Let experts handle the legal paperwork. No win, no fee.</p>
            </div>
          </a>

          <button 
            onClick={generateClaimLetter}
            className="group bg-white hover:bg-slate-50 text-brand-navy p-6 rounded-2xl shadow-xl transition-all border border-slate-200 flex flex-col justify-between items-start"
          >
            <div className="flex justify-between w-full mb-4">
              <div className="bg-slate-100 p-2 rounded-lg"><Download className="h-5 w-5 text-brand-navy" /></div>
              <HelpCircle className="h-4 w-4 text-slate-400" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg mb-1">Claim for free</h3>
              <p className="text-slate-500 text-sm">Download a customized claim letter to send to the airline yourself.</p>
            </div>
          </button>
        </div>
      )}

      <div className="text-center pt-4">
        <button 
          onClick={onReset}
          className="text-slate-500 hover:text-brand-navy text-sm font-medium underline underline-offset-4"
        >
          Back to calculator
        </button>
      </div>
    </motion.div>
  );
}
