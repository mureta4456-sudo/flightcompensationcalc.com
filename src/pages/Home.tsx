import React, { useState } from 'react';
import { CalculatorForm } from '../components/CalculatorForm';
import { ResultCard } from '../components/ResultCard';
import { calculateCompensation } from '../lib/compensationLogic';
import { CalculationResult, FlightFormData } from '../types';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (data: FlightFormData) => {
    const res = calculateCompensation(data);
    setResult(res);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Galvenais virsraksts un ievads, lai Google redzētu unikālu tekstu */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Lidojuma kompensācijas kalkulators – Atgūsti līdz €600
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Vai tavs lidojums tika atcelts, kavēts vai tev liedza iekāpt lidmašīnā? Saskaņā ar ES Regulu 261/2004 tu varat būt tiesīgs saņemt kompensāciju līdz pat 600 € apmērā. Pārbaudi savas tiesības dažu sekunžu laikā!
        </p>
      </div>

      {/* Kalkulatora un rezultātu daļa */}
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 mb-12">
        <CalculatorForm onCalculate={handleCalculate} />
        {result && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <ResultCard result={result} />
          </div>
        )}
      </div>

      {/* Informatīvais saturs, kas novērš "Mazvērtīgs saturs" (Low Value Content) kļūdu */}
      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-gray-900">
          Kā darbojas lidojuma kompensācija saskaņā ar ES Regulu 261/2004?
        </h2>
        <p>
          Eiropas Savienības Regula (EK) Nr. 261/2004 nosaka kopīgus noteikumus par kompensāciju un palīdzību pasažieriem iekāpšanas atteikuma un lidojumu atcelšanas vai ilgas kavēšanās gadījumā. Šie noteikumi aizsargā miljoniem gaisa satiksmes pasažieru katru gadu.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">Kādos gadījumos pienākas kompensācija?</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Lidojuma atcelšana:</strong> Ja lidsabiedrība paziņojusi par atcelšanu mazāk nekā 14 dienas pirms izlidošanas, un netika piedāvāts līdzvērtīgs alternatīvais lidojums.
          </li>
          <li>
            <strong>Lidojuma kavēšanās:</strong> Ja galamērķi sasniedzāt ar vairāk nekā 3 stundu nokavēšanos.
          </li>
          <li>
            <strong>Iekāpšanas atteikums:</strong> Ja jums atteica iekāpšanu lidmašīnā pārmerķēšanas (overbooking) dēļ pret Jūsu gribu.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Cik lielu kompensāciju var saņemt?</h3>
        <p>
          Kompensācijas apmērs ir atkarīgs no lidojuma attāluma:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>€250</strong> – visiem lidojumiem, kuru attālums ir līdz 1 500 km.</li>
          <li><strong>€400</strong> – visiem Kopienas iekšējiem lidojumiem virs 1 500 km un citiem lidojumiem no 1 500 km līdz 3 500 km.</li>
          <li><strong>€600</strong> – visiem pārējiem lidojumiem, kas neietilpst iepriekšējās kategorijās.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Biežāk uzdotie jautājumi (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">Vai par kavējumu var saņemt kompensāciju sliktu laika apstākļu dēļ?</h4>
            <p>Parasti ne. Ārkārtas apstākļi (piemēram, stipri laikapstākļi, lidostas slēgšana, streiki) atbrīvo aviokompāniju no kompensācijas maksāšanas pienākuma, tomēr tām joprojām jānodrošina aprūpe (ēdieni, dzērieni, viesnīca).</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Cik senus lidojumus var pieteikt?</h4>
            <p>Atkarībā no valsts likumdošanas, parasti prasību var iesniegt par lidojumiem, kas bijuši pēdējo 1 līdz 3 gadu laikā.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm text-blue-600">
          <Link to="/how-it-works" className="hover:underline">Uzzini vairāk par procesu</Link>
          <Link to="/faq" className="hover:underline">Biežāk uzdotie jautājumi</Link>
          <Link to="/privacy-policy" className="hover:underline">Privātuma politika</Link>
        </div>
      </div>
    </div>
  );
};
