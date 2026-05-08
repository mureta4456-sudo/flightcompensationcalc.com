import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface FAQProps {
  lang: Language;
}

const titles: Record<Language, string> = {
  en: 'Frequently Asked Questions',
  lv: 'Biežāk uzdotie jautājumi',
  de: 'Häufig gestellte Fragen',
  fr: 'Questions fréquentes',
  es: 'Preguntas frecuentes',
};

const contentByLang: Record<Language, string> = {
  en: `
## Common Questions

### How long does a claim take?
Most claims take 4–12 weeks, depending on the airline's internal processing speed. If a claim goes to court, it can take 6 months or more.

### How much does it cost to use this calculator?
It is 100% free. We provide this tool to help passengers understand their rights.

### Can I claim for a flight from 2 years ago?
Yes. In most EU countries, you can claim for flights up to 3 years old. In the UK and Ireland, you have up to 6 years.

### What if I was offered food and a hotel?
Receiving "Duty of Care" (food, drink, accommodation) does not waive your right to financial compensation under EC 261/2004. You are entitled to both.

### Does it matter if I am not an EU citizen?
No. EC 261 applies to all passengers on covered flights, regardless of nationality.

### Which airports and airlines are supported?
Our calculator supports over 6,000 airports and all major airlines worldwide. Whether you flew from a major hub like London Heathrow or a regional airport like Riga (RIX), we can calculate your eligibility.

### What if the airline claims "technical issue"?
Technical issues like engine failure or component wear are considered part of the airline's normal operations and are **not** extraordinary circumstances. You are usually eligible.
`,
  lv: `
## Bieži uzdotie jautājumi

### Cik ilgi prasība tiek izskatīta?
Lielākā daļa prasību tiek izskatītas 4–12 nedēļās atkarībā no aviokompānijas iekšējās apstrādes ātruma. Ja prasība nonāk tiesā, tā var ilgt 6 mēnešus vai ilgāk.

### Cik maksā kalkulatora lietošana?
Tas ir 100% bezmaksas. Mēs piedāvājam šo rīku, lai palīdzētu pasažieriem saprast viņu tiesības.

### Vai varu pieprasīt kompensāciju par lidojumu pirms 2 gadiem?
Jā. Vairumā ES valstu var pieprasīt par lidojumiem līdz 3 gadu vecumā. Apvienotajā Karalistē un Īrijā — līdz 6 gadiem.

### Ko darīt, ja man piedāvāja ēdienu un viesnīcu?
"Aprūpes pienākums" (ēdiens, dzeriens, naktsmītne) neatceļ jūsu tiesības uz finansiālu kompensāciju saskaņā ar EC 261/2004. Jums pienākas abi.

### Vai ir nozīme, ka neesmu ES pilsonis?
Nē. EC 261 attiecas uz visiem pasažieriem uz tā aptvertajiem lidojumiem neatkarīgi no pilsonības.

### Kuras lidostas un aviokompānijas tiek atbalstītas?
Mūsu kalkulators atbalsta vairāk nekā 6000 lidostu un visas lielākās aviokompānijas pasaulē. Vai jūs lidojāt no liela mezgla, piemēram, Londonas Hītrovas, vai reģionālas lidostas, piemēram, Rīgas (RIX), mēs varam aprēķināt jūsu tiesības.

### Ko darīt, ja aviokompānija apgalvo "tehnisku problēmu"?
Tehniskas problēmas, piemēram, dzinēja kļūme vai komponentu nodilums, tiek uzskatītas par daļu no aviokompānijas normālas darbības un **nav** ārkārtēji apstākļi. Jums parasti pienākas kompensācija.
`,
  de: `
## Häufige Fragen

### Wie lange dauert ein Anspruch?
Die meisten Ansprüche werden innerhalb von 4–12 Wochen bearbeitet, abhängig von der internen Bearbeitungszeit der Fluggesellschaft. Geht ein Anspruch vor Gericht, kann er 6 Monate oder länger dauern.

### Wie viel kostet die Nutzung dieses Rechners?
Er ist zu 100 % kostenlos. Wir stellen dieses Tool zur Verfügung, um Fluggästen zu helfen, ihre Rechte zu verstehen.

### Kann ich für einen Flug von vor 2 Jahren noch Anspruch erheben?
Ja. In den meisten EU-Ländern können Sie für Flüge bis zu 3 Jahre rückwirkend Anspruch erheben. Im Vereinigten Königreich und Irland sogar bis zu 6 Jahre.

### Was, wenn mir Essen und ein Hotel angeboten wurden?
Die Erfüllung der "Betreuungspflicht" (Essen, Getränke, Unterkunft) hebt Ihren Anspruch auf finanzielle Entschädigung nach EC 261/2004 nicht auf. Sie haben Anspruch auf beides.

### Spielt es eine Rolle, dass ich kein EU-Bürger bin?
Nein. EC 261 gilt für alle Fluggäste auf abgedeckten Flügen, unabhängig von der Staatsangehörigkeit.

### Welche Flughäfen und Fluggesellschaften werden unterstützt?
Unser Rechner unterstützt über 6.000 Flughäfen und alle großen Fluggesellschaften weltweit. Egal ob Sie von einem großen Drehkreuz wie London Heathrow oder einem regionalen Flughafen wie Riga (RIX) geflogen sind — wir können Ihre Ansprüche berechnen.

### Was, wenn die Fluggesellschaft "technische Probleme" angibt?
Technische Probleme wie Triebwerksausfall oder Bauteilverschleiß gelten als normale Betriebsvorgänge der Fluggesellschaft und sind **keine** außergewöhnlichen Umstände. Sie haben in der Regel Anspruch.
`,
  fr: `
## Questions courantes

### Combien de temps dure une réclamation ?
La plupart des réclamations prennent entre 4 et 12 semaines, selon la vitesse de traitement interne de la compagnie aérienne. Si une réclamation va devant les tribunaux, elle peut durer 6 mois ou plus.

### Combien coûte l'utilisation de ce calculateur ?
Il est 100 % gratuit. Nous fournissons cet outil pour aider les passagers à comprendre leurs droits.

### Puis-je faire une réclamation pour un vol d'il y a 2 ans ?
Oui. Dans la plupart des pays de l'UE, vous pouvez réclamer pour des vols jusqu'à 3 ans après. Au Royaume-Uni et en Irlande, vous avez jusqu'à 6 ans.

### Et si on m'a offert de la nourriture et un hôtel ?
Le "devoir d'assistance" (repas, boissons, hébergement) n'annule pas votre droit à une indemnisation financière en vertu du règlement CE 261/2004. Vous avez droit aux deux.

### Cela compte-t-il si je ne suis pas citoyen de l'UE ?
Non. Le règlement CE 261 s'applique à tous les passagers des vols couverts, quelle que soit leur nationalité.

### Quels aéroports et compagnies aériennes sont pris en charge ?
Notre calculateur prend en charge plus de 6 000 aéroports et toutes les principales compagnies aériennes du monde entier. Que vous ayez décollé d'un grand hub comme London Heathrow ou d'un aéroport régional comme Riga (RIX), nous pouvons calculer votre éligibilité.

### Et si la compagnie invoque un "problème technique" ?
Les problèmes techniques tels qu'une panne de moteur ou l'usure de composants sont considérés comme faisant partie des opérations normales de la compagnie et ne constituent **pas** des circonstances extraordinaires. Vous êtes généralement éligible.
`,
  es: `
## Preguntas habituales

### ¿Cuánto tarda una reclamación?
La mayoría de las reclamaciones tardan entre 4 y 12 semanas, según la velocidad de procesamiento interno de la aerolínea. Si una reclamación llega a los tribunales, puede tardar 6 meses o más.

### ¿Cuánto cuesta usar esta calculadora?
Es 100 % gratis. Ofrecemos esta herramienta para ayudar a los pasajeros a entender sus derechos.

### ¿Puedo reclamar por un vuelo de hace 2 años?
Sí. En la mayoría de los países de la UE, puede reclamar por vuelos de hasta 3 años de antigüedad. En el Reino Unido e Irlanda, hasta 6 años.

### ¿Qué pasa si me ofrecieron comida y un hotel?
Recibir el "deber de asistencia" (comida, bebida, alojamiento) no anula su derecho a una indemnización económica conforme al Reglamento CE 261/2004. Tiene derecho a ambos.

### ¿Importa si no soy ciudadano de la UE?
No. El Reglamento CE 261 se aplica a todos los pasajeros de los vuelos cubiertos, independientemente de su nacionalidad.

### ¿Qué aeropuertos y aerolíneas son compatibles?
Nuestra calculadora admite más de 6.000 aeropuertos y todas las principales aerolíneas del mundo. Tanto si voló desde un gran hub como London Heathrow o un aeropuerto regional como Riga (RIX), podemos calcular su elegibilidad.

### ¿Qué pasa si la aerolínea alega un "problema técnico"?
Los problemas técnicos como un fallo de motor o el desgaste de componentes se consideran parte de las operaciones normales de la aerolínea y **no** son circunstancias extraordinarias. Por lo general, tiene derecho a indemnización.
`,
};

export default function FAQ({ lang }: FAQProps) {
  const content = contentByLang[lang] || contentByLang.en;
  const title = titles[lang] || titles.en;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-brand-navy mb-8">{title}</h1>
      <div className="markdown-body prose lg:prose-xl text-slate-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
