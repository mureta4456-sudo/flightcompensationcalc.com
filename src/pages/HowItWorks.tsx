import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface HowItWorksProps {
  lang: Language;
}

const titles: Record<Language, string> = {
  en: 'Understanding EC 261/2004',
  lv: 'Izpratne par EC 261/2004',
  de: 'EC 261/2004 verstehen',
  fr: 'Comprendre le règlement CE 261/2004',
  es: 'Entendiendo el Reglamento CE 261/2004',
};

const contentByLang: Record<Language, string> = {
  en: `
## How EC 261/2004 Works

EU Regulation 261/2004 was established to protect passenger rights when air travel doesn't go as planned. It mandates that airlines compensate passengers for significant disruptions.

### When are you eligible?
You are likely eligible for compensation if:
- **Your flight departed from an EU/EEA airport.**
- **OR your flight arrived at an EU/EEA airport on an airline based in the EU.**
- **And one of the following happened:**
  - You arrived at your final destination more than **3 hours late**.
  - Your flight was cancelled with less than **14 days notice**.
  - You were denied boarding due to overbooking.

### Compensation Amounts
Compensation is fixed based on the flight distance:
- **€250** for flights up to 1,500 km.
- **€400** for intra-EU flights over 1,500 km, or other flights between 1,500 km and 3,500 km.
- **€600** for all other flights over 3,500 km.

### Extraordinary Circumstances
Airlines do not have to pay if the disruption was caused by "extraordinary circumstances" that could not have been avoided. This includes:
- Adverse weather conditions (e.g., heavy snow, hurricanes).
- Airport or Air Traffic Control (ATC) strikes.
- Political instability or security risks.
- **Note:** Technical issues and airline staff strikes are generally NOT considered extraordinary.

### UK261 (Post-Brexit)
Since 2021, the UK has its own domestic version called UK261. It works almost identically but applies to UK airlines and flights departing from the UK. Compensation is paid in GBP (£220 / £350 / £520).
`,
  lv: `
## Kā darbojas EC 261/2004

ES Regula 261/2004 tika izveidota, lai aizsargātu pasažieru tiesības, kad lidojums nenotiek kā plānots. Tā uzliek aviokompānijām pienākumu kompensēt pasažieriem nopietnus traucējumus.

### Kad jums ir tiesības?
Jūs, visticamāk, varat saņemt kompensāciju, ja:
- **Jūsu lidojums atgāja no ES/EEZ lidostas.**
- **VAI jūsu lidojums ielidoja ES/EEZ lidostā ar ES bāzētu aviokompāniju.**
- **Un noticis viens no šiem:**
  - Jūs galamērķī ierados vairāk nekā **3 stundas vēlāk**.
  - Lidojums tika atcelts ar mazāk nekā **14 dienu brīdinājumu**.
  - Jums tika atteikts iekāpt pārmērīgas rezervācijas dēļ.

### Kompensācijas summas
Kompensācija ir fiksēta atkarībā no lidojuma attāluma:
- **€250** lidojumiem līdz 1500 km.
- **€400** ES iekšējiem lidojumiem virs 1500 km vai citiem lidojumiem starp 1500 km un 3500 km.
- **€600** visiem citiem lidojumiem virs 3500 km.

### Ārkārtēji apstākļi
Aviokompānijām nav jāmaksā, ja traucējumu izraisīja "ārkārtēji apstākļi", no kuriem nav bijis iespējams izvairīties. Tas ietver:
- Nelabvēlīgi laikapstākļi (piem., spēcīgs sniegs, viesuļvētras).
- Lidostas vai Gaisa satiksmes vadības (ATC) streiki.
- Politiska nestabilitāte vai drošības riski.
- **Piezīme:** Tehniskas problēmas un aviokompānijas personāla streiki parasti **netiek** uzskatīti par ārkārtējiem apstākļiem.

### UK261 (pēc Brexit)
Kopš 2021. gada Apvienotajai Karalistei ir sava versija ar nosaukumu UK261. Tā darbojas gandrīz identiski, bet attiecas uz UK aviokompānijām un lidojumiem, kas atgāj no AK. Kompensāciju izmaksā mārciņās (£220 / £350 / £520).
`,
  de: `
## Wie EC 261/2004 funktioniert

Die EU-Verordnung 261/2004 wurde geschaffen, um die Rechte von Fluggästen zu schützen, wenn Flüge nicht wie geplant verlaufen. Sie verpflichtet Fluggesellschaften, Passagiere bei erheblichen Störungen zu entschädigen.

### Wann haben Sie Anspruch?
Sie haben wahrscheinlich Anspruch auf Entschädigung, wenn:
- **Ihr Flug von einem EU/EWR-Flughafen abgegangen ist.**
- **ODER Ihr Flug an einem EU/EWR-Flughafen mit einer EU-Fluggesellschaft angekommen ist.**
- **Und einer der folgenden Fälle eingetreten ist:**
  - Sie sind mehr als **3 Stunden verspätet** am Endziel angekommen.
  - Ihr Flug wurde mit weniger als **14 Tagen Vorlaufzeit** annulliert.
  - Ihnen wurde wegen Überbuchung die Beförderung verweigert.

### Entschädigungssummen
Die Entschädigung ist nach Flugdistanz festgelegt:
- **250 €** für Flüge bis 1.500 km.
- **400 €** für innereuropäische Flüge über 1.500 km oder andere Flüge zwischen 1.500 und 3.500 km.
- **600 €** für alle anderen Flüge über 3.500 km.

### Außergewöhnliche Umstände
Fluggesellschaften müssen nicht zahlen, wenn die Störung durch "außergewöhnliche Umstände" verursacht wurde, die nicht hätten vermieden werden können. Dazu zählen:
- Schlechte Wetterbedingungen (z. B. starker Schneefall, Wirbelstürme).
- Streiks am Flughafen oder bei der Flugsicherung (ATC).
- Politische Instabilität oder Sicherheitsrisiken.
- **Hinweis:** Technische Probleme und Streiks von Mitarbeitern der Fluggesellschaft gelten in der Regel **nicht** als außergewöhnliche Umstände.

### UK261 (nach dem Brexit)
Seit 2021 hat das Vereinigte Königreich eine eigene Version namens UK261. Sie funktioniert nahezu identisch, gilt aber für britische Fluggesellschaften und Flüge ab dem Vereinigten Königreich. Die Entschädigung wird in GBP gezahlt (£220 / £350 / £520).
`,
  fr: `
## Comment fonctionne le règlement CE 261/2004

Le règlement européen 261/2004 a été créé pour protéger les droits des passagers lorsque les voyages aériens ne se déroulent pas comme prévu. Il oblige les compagnies aériennes à indemniser les passagers en cas de perturbations importantes.

### Quand êtes-vous éligible ?
Vous êtes probablement éligible à une indemnisation si :
- **Votre vol est parti d'un aéroport de l'UE/EEE.**
- **OU votre vol est arrivé à un aéroport de l'UE/EEE avec une compagnie aérienne basée dans l'UE.**
- **Et l'un des éléments suivants s'est produit :**
  - Vous êtes arrivé à votre destination finale avec plus de **3 heures de retard**.
  - Votre vol a été annulé avec moins de **14 jours de préavis**.
  - On vous a refusé l'embarquement en raison d'une surréservation.

### Montants d'indemnisation
L'indemnisation est fixée selon la distance du vol :
- **250 €** pour les vols jusqu'à 1 500 km.
- **400 €** pour les vols intra-UE de plus de 1 500 km, ou autres vols entre 1 500 km et 3 500 km.
- **600 €** pour tous les autres vols de plus de 3 500 km.

### Circonstances extraordinaires
Les compagnies aériennes ne sont pas tenues de payer si la perturbation a été causée par des "circonstances extraordinaires" qui n'auraient pas pu être évitées. Cela inclut :
- Conditions météorologiques défavorables (par ex. fortes chutes de neige, ouragans).
- Grèves de l'aéroport ou du contrôle aérien (ATC).
- Instabilité politique ou risques pour la sécurité.
- **Note :** Les problèmes techniques et les grèves du personnel des compagnies aériennes ne sont généralement **pas** considérés comme des circonstances extraordinaires.

### UK261 (après le Brexit)
Depuis 2021, le Royaume-Uni dispose de sa propre version nommée UK261. Elle fonctionne presque à l'identique, mais s'applique aux compagnies britanniques et aux vols au départ du Royaume-Uni. L'indemnisation est versée en GBP (220 £ / 350 £ / 520 £).
`,
  es: `
## Cómo funciona el Reglamento CE 261/2004

El Reglamento (CE) 261/2004 se creó para proteger los derechos de los pasajeros cuando los viajes aéreos no se desarrollan según lo previsto. Obliga a las aerolíneas a indemnizar a los pasajeros por las interrupciones importantes.

### ¿Cuándo tiene derecho?
Probablemente tenga derecho a una indemnización si:
- **Su vuelo salió de un aeropuerto de la UE/EEE.**
- **O su vuelo llegó a un aeropuerto de la UE/EEE con una aerolínea con base en la UE.**
- **Y ocurrió alguno de los siguientes:**
  - Llegó a su destino final con más de **3 horas de retraso**.
  - Su vuelo fue cancelado con menos de **14 días de antelación**.
  - Se le denegó el embarque por sobreventa.

### Importes de la compensación
La compensación es fija según la distancia del vuelo:
- **250 €** para vuelos de hasta 1.500 km.
- **400 €** para vuelos dentro de la UE de más de 1.500 km, u otros vuelos entre 1.500 km y 3.500 km.
- **600 €** para todos los demás vuelos de más de 3.500 km.

### Circunstancias extraordinarias
Las aerolíneas no están obligadas a pagar si la interrupción se debió a "circunstancias extraordinarias" que no podrían haberse evitado. Esto incluye:
- Condiciones meteorológicas adversas (p. ej., fuertes nevadas, huracanes).
- Huelgas del aeropuerto o del Control de Tráfico Aéreo (ATC).
- Inestabilidad política o riesgos para la seguridad.
- **Nota:** Los problemas técnicos y las huelgas del personal de la aerolínea generalmente **no** se consideran circunstancias extraordinarias.

### UK261 (después del Brexit)
Desde 2021, el Reino Unido tiene su propia versión llamada UK261. Funciona casi de forma idéntica, pero se aplica a las aerolíneas británicas y los vuelos que salen del Reino Unido. La compensación se paga en GBP (220 £ / 350 £ / 520 £).
`,
};

export default function HowItWorks({ lang }: HowItWorksProps) {
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
