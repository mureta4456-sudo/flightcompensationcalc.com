import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface TermsOfServiceProps {
  lang: Language;
}

const lastUpdated = 'May 2026';

const titles: Record<Language, string> = {
  en: 'Terms of Service',
  lv: 'Lietošanas noteikumi',
  de: 'Nutzungsbedingungen',
  fr: 'Conditions d\'utilisation',
  es: 'Condiciones de uso',
};

const contentByLang: Record<Language, string> = {
  en: `
*Last updated: ${lastUpdated}*

By using FlightComp at flightcompensationcalc.com (the "service"), you agree to these Terms of Service. If you do not agree, please do not use the service.

## 1. What This Service Is

FlightComp is a **free informational tool** that estimates whether you may be eligible for compensation under EC 261/2004 and UK261.

## 2. Not Legal Advice

The information provided by FlightComp **does not constitute legal advice** and is **not a substitute for advice from a qualified lawyer**. Compensation outcomes depend on the specific facts of each case.

## 3. No Guarantee of Accuracy

We make reasonable efforts to keep the calculator up to date. However, airline policies and rulings change, and the calculator does not have access to your full ticket records or evaluate "extraordinary circumstances" defences. We make no guarantee that the result matches what an airline or court will pay.

## 4. Permitted Use

You may use the service for personal, non-commercial purposes, education, or preparing your own claim. You may **not** scrape, republish without permission, harass others, or use automated tools for high-volume queries.

## 5. No Account, No Fees

The service does not require registration and is provided free of charge. There are no premium features. We do not handle your money or file claims on your behalf.

## 6. Third-Party Services

Some explanations may be generated using Google's Gemini AI. AI-generated content may be incomplete or occasionally inaccurate. Treat it as a starting point.

## 7. Intellectual Property

The calculator code, design, and original content are owned by the project maintainers. Airline and airport names belong to their respective owners.

## 8. Limitation of Liability

To the fullest extent permitted by law, FlightComp and its maintainers are **not liable** for any decision you make based on the calculator's output, any compensation you fail to receive, or service interruptions. Maximum liability is limited to **€100**. This does not limit any rights you have as a consumer that cannot be waived under your local law.

## 9. Changes

We may update the service and these Terms at any time. Material changes will be reflected by an updated "Last updated" date.

## 10. Termination

We may suspend or discontinue the service at any time. Sections 2, 3, and 8 survive termination.

## 11. Governing Law

These Terms are governed by the laws of **Latvia**, except where mandatory consumer protection law gives you the right to bring a claim in your country of residence.

## 12. Contact

For questions, contact us through the email listed in our GitHub repository.
`,
  lv: `
*Pēdējoreiz atjaunināts: ${lastUpdated}*

Izmantojot FlightComp vietnē flightcompensationcalc.com (turpmāk — "pakalpojums"), jūs piekrītat šiem Lietošanas noteikumiem. Ja nepiekrītat, lūdzu, neizmantojiet pakalpojumu.

## 1. Kas ir šis pakalpojums

FlightComp ir **bezmaksas informatīvs rīks**, kas novērtē, vai jums varētu pienākties kompensācija saskaņā ar EC 261/2004 un UK261.

## 2. Nav juridiska konsultācija

FlightComp sniegtā informācija **nav juridiska konsultācija** un **nav aizvietojums kvalificēta advokāta padomam**. Kompensācijas iznākums ir atkarīgs no katra konkrētā gadījuma faktiem.

## 3. Nav garantēta precizitāte

Mēs cenšamies uzturēt kalkulatoru aktuālu. Tomēr aviokompāniju politikas un tiesu prakse mainās, un kalkulators nepiekļūst jūsu pilnam biļetes ierakstam un neizvērtē "ārkārtēju apstākļu" iebildumus. Mēs negarantējam, ka rezultāts atbilst tam, ko maksās aviokompānija vai tiesa.

## 4. Atļautā lietošana

Jūs varat izmantot pakalpojumu personīgiem, nekomerciāliem mērķiem, izglītībai vai savas prasības sagatavošanai. Jūs **nedrīkstat** nokopēt, pārpublicēt bez atļaujas, aizskart citus vai izmantot automatizētus rīkus liela apjoma pieprasījumiem.

## 5. Nav konta, nav maksas

Pakalpojums neprasa reģistrāciju un tiek sniegts bez maksas. Nav premium funkciju. Mēs neapstrādājam jūsu naudu un neiesniedzam prasības jūsu vārdā.

## 6. Trešo pušu pakalpojumi

Daži paskaidrojumi var tikt ģenerēti, izmantojot Google Gemini AI. AI ģenerēts saturs var būt nepilnīgs vai reizēm neprecīzs. Uztveriet to kā sākumpunktu.

## 7. Intelektuālais īpašums

Kalkulatora kods, dizains un oriģinālais saturs pieder projekta uzturētājiem. Aviokompāniju un lidostu nosaukumi pieder to atbilstošajiem īpašniekiem.

## 8. Atbildības ierobežojums

Likumā maksimāli atļautajā apmērā FlightComp un tā uzturētāji **nav atbildīgi** par jebkuru lēmumu, ko jūs pieņemat, balstoties uz kalkulatora rezultātu, par kompensāciju, kuru jūs nesaņemat, vai par pakalpojuma traucējumiem. Maksimālā atbildība ir ierobežota līdz **€100**. Tas neierobežo nevienu jūsu kā patērētāja tiesību, no kuras nevar atteikties saskaņā ar jūsu vietējo likumu.

## 9. Izmaiņas

Mēs varam atjaunināt pakalpojumu un šos Noteikumus jebkurā laikā. Būtiskas izmaiņas atspoguļos atjaunināts datums "Pēdējoreiz atjaunināts".

## 10. Pakalpojuma izbeigšana

Mēs varam apturēt vai pārtraukt pakalpojumu jebkurā laikā. Sadaļas 2, 3 un 8 paliek spēkā arī pēc izbeigšanas.

## 11. Piemērojamie likumi

Šos Noteikumus regulē **Latvijas** likumi, izņemot gadījumus, kad obligāti patērētāju tiesību aizsardzības likumi piešķir jums tiesības iesniegt prasību savā dzīvesvietas valstī.

## 12. Kontakti

Jautājumiem sazinieties ar mums caur e-pastu, kas norādīts mūsu GitHub repozitorijā.
`,
  de: `
*Zuletzt aktualisiert: ${lastUpdated}*

Durch die Nutzung von FlightComp unter flightcompensationcalc.com (der "Dienst") stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie nicht zustimmen, nutzen Sie den Dienst bitte nicht.

## 1. Was dieser Dienst ist

FlightComp ist ein **kostenloses Informationswerkzeug**, das schätzt, ob Sie nach EC 261/2004 und UK261 anspruchsberechtigt sein könnten.

## 2. Keine Rechtsberatung

Die von FlightComp bereitgestellten Informationen **sind keine Rechtsberatung** und **ersetzen nicht die Beratung durch einen qualifizierten Anwalt**. Das Ergebnis hängt von den konkreten Fakten jedes Einzelfalls ab.

## 3. Keine Gewähr für Genauigkeit

Wir bemühen uns, den Rechner aktuell zu halten. Allerdings ändern sich Fluggesellschaftsrichtlinien und Gerichtsentscheidungen, und der Rechner hat keinen Zugriff auf Ihre vollständigen Ticketdaten und kann "außergewöhnliche Umstände" nicht prüfen. Wir geben keine Garantie, dass das Ergebnis mit dem übereinstimmt, was eine Fluggesellschaft oder ein Gericht zahlt.

## 4. Erlaubte Nutzung

Sie dürfen den Dienst für persönliche, nicht-kommerzielle Zwecke, Bildung oder zur Vorbereitung Ihrer eigenen Reklamation nutzen. Sie dürfen **nicht** Scraping betreiben, ohne Genehmigung erneut veröffentlichen, andere belästigen oder automatisierte Tools für große Mengen einsetzen.

## 5. Kein Konto, keine Gebühren

Der Dienst erfordert keine Registrierung und ist kostenlos. Es gibt keine Premium-Funktionen. Wir verwalten kein Geld und reichen keine Ansprüche in Ihrem Namen ein.

## 6. Drittanbieter-Dienste

Einige Erklärungen können mit Googles Gemini AI generiert werden. KI-generierte Inhalte können unvollständig oder gelegentlich ungenau sein. Nutzen Sie sie als Ausgangspunkt.

## 7. Geistiges Eigentum

Code, Design und Originalinhalte des Rechners gehören den Projektpflegern. Namen von Fluggesellschaften und Flughäfen gehören ihren jeweiligen Inhabern.

## 8. Haftungsbeschränkung

Im gesetzlich maximal zulässigen Umfang haften FlightComp und seine Pfleger **nicht** für Entscheidungen, die Sie auf Basis des Rechner-Ergebnisses treffen, für ausgebliebene Entschädigungen oder Dienstunterbrechungen. Die maximale Haftung ist auf **100 €** begrenzt. Dies schränkt keine Verbraucherrechte ein, auf die nach Ihrem örtlichen Recht nicht verzichtet werden kann.

## 9. Änderungen

Wir können den Dienst und diese Bedingungen jederzeit aktualisieren. Wesentliche Änderungen werden durch ein aktualisiertes "Zuletzt aktualisiert"-Datum kenntlich gemacht.

## 10. Beendigung

Wir können den Dienst jederzeit aussetzen oder einstellen. Die Abschnitte 2, 3 und 8 gelten auch nach der Beendigung.

## 11. Anwendbares Recht

Diese Bedingungen unterliegen dem **Recht Lettlands**, außer wo zwingendes Verbraucherschutzrecht Ihnen das Recht gewährt, Ansprüche in Ihrem Wohnsitzland geltend zu machen.

## 12. Kontakt

Bei Fragen kontaktieren Sie uns über die in unserem GitHub-Repository angegebene E-Mail-Adresse.
`,
  fr: `
*Dernière mise à jour : ${lastUpdated}*

En utilisant FlightComp à flightcompensationcalc.com (le "service"), vous acceptez ces Conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le service.

## 1. Ce qu'est ce service

FlightComp est un **outil d'information gratuit** qui estime si vous pouvez être éligible à une indemnisation au titre du règlement CE 261/2004 et UK261.

## 2. Pas de conseil juridique

Les informations fournies par FlightComp **ne constituent pas un conseil juridique** et **ne remplacent pas l'avis d'un avocat qualifié**. L'issue de l'indemnisation dépend des faits spécifiques de chaque cas.

## 3. Aucune garantie de précision

Nous nous efforçons de maintenir le calculateur à jour. Cependant, les politiques des compagnies et la jurisprudence évoluent, et le calculateur n'a pas accès à votre dossier complet ni n'évalue les "circonstances extraordinaires". Nous ne garantissons pas que le résultat corresponde à ce qu'une compagnie ou un tribunal paiera.

## 4. Utilisation autorisée

Vous pouvez utiliser le service à des fins personnelles, non commerciales, éducatives ou pour préparer votre propre réclamation. Vous **ne pouvez pas** scraper, republier sans autorisation, harceler d'autres personnes ou utiliser des outils automatisés pour des requêtes en masse.

## 5. Pas de compte, pas de frais

Le service ne nécessite pas d'inscription et est gratuit. Il n'y a pas de fonctionnalités premium. Nous ne gérons pas votre argent et n'introduisons pas de réclamations en votre nom.

## 6. Services tiers

Certaines explications peuvent être générées avec l'IA Gemini de Google. Le contenu généré par IA peut être incomplet ou parfois inexact. Considérez-le comme un point de départ.

## 7. Propriété intellectuelle

Le code, le design et le contenu original du calculateur appartiennent aux mainteneurs du projet. Les noms des compagnies aériennes et aéroports appartiennent à leurs propriétaires respectifs.

## 8. Limitation de responsabilité

Dans les limites maximales autorisées par la loi, FlightComp et ses mainteneurs **ne sont pas responsables** des décisions que vous prenez sur la base du résultat du calculateur, des indemnisations non perçues ou des interruptions de service. La responsabilité maximale est limitée à **100 €**. Cela ne limite aucun droit que vous avez en tant que consommateur auquel il ne peut être renoncé selon la loi locale.

## 9. Modifications

Nous pouvons mettre à jour le service et ces Conditions à tout moment. Les changements importants seront reflétés par une date "Dernière mise à jour" actualisée.

## 10. Résiliation

Nous pouvons suspendre ou interrompre le service à tout moment. Les sections 2, 3 et 8 survivent à la résiliation.

## 11. Droit applicable

Ces Conditions sont régies par le droit de **la Lettonie**, sauf lorsque le droit impératif de la consommation vous donne le droit d'agir dans votre pays de résidence.

## 12. Contact

Pour toute question, contactez-nous via l'e-mail indiqué dans notre dépôt GitHub.
`,
  es: `
*Última actualización: ${lastUpdated}*

Al usar FlightComp en flightcompensationcalc.com (el "servicio"), usted acepta estas Condiciones de uso. Si no las acepta, no utilice el servicio.

## 1. Qué es este servicio

FlightComp es una **herramienta informativa gratuita** que estima si puede tener derecho a una indemnización según el Reglamento CE 261/2004 y UK261.

## 2. No es asesoramiento legal

La información proporcionada por FlightComp **no constituye asesoramiento legal** y **no sustituye el consejo de un abogado cualificado**. El resultado de la indemnización depende de los hechos concretos de cada caso.

## 3. Sin garantía de precisión

Hacemos esfuerzos razonables para mantener la calculadora actualizada. Sin embargo, las políticas de las aerolíneas y la jurisprudencia cambian, y la calculadora no tiene acceso a su registro completo del billete ni evalúa las "circunstancias extraordinarias". No garantizamos que el resultado coincida con lo que pagará una aerolínea o un tribunal.

## 4. Uso permitido

Puede usar el servicio con fines personales, no comerciales, educativos o para preparar su propia reclamación. **No puede** hacer scraping, republicar sin permiso, acosar a otros ni usar herramientas automatizadas para consultas masivas.

## 5. Sin cuenta, sin tarifas

El servicio no requiere registro y es gratuito. No hay funciones premium. No gestionamos su dinero ni presentamos reclamaciones en su nombre.

## 6. Servicios de terceros

Algunas explicaciones pueden ser generadas usando la IA Gemini de Google. El contenido generado por IA puede ser incompleto u ocasionalmente impreciso. Considérelo un punto de partida.

## 7. Propiedad intelectual

El código, diseño y contenido original de la calculadora pertenecen a los mantenedores del proyecto. Los nombres de aerolíneas y aeropuertos pertenecen a sus respectivos propietarios.

## 8. Limitación de responsabilidad

En la máxima medida permitida por la ley, FlightComp y sus mantenedores **no son responsables** de cualquier decisión que tome con base en el resultado de la calculadora, de cualquier indemnización que no reciba, ni de interrupciones del servicio. La responsabilidad máxima se limita a **100 €**. Esto no limita ningún derecho que tenga como consumidor al que no se pueda renunciar según su legislación local.

## 9. Cambios

Podemos actualizar el servicio y estas Condiciones en cualquier momento. Los cambios importantes se reflejarán mediante una fecha "Última actualización" actualizada.

## 10. Terminación

Podemos suspender o interrumpir el servicio en cualquier momento. Las secciones 2, 3 y 8 sobreviven a la terminación.

## 11. Ley aplicable

Estas Condiciones se rigen por las leyes de **Letonia**, excepto cuando la ley obligatoria de protección al consumidor le otorgue el derecho a presentar una reclamación en su país de residencia.

## 12. Contacto

Para preguntas, contáctenos a través del correo electrónico indicado en nuestro repositorio de GitHub.
`,
};

export default function TermsOfService({ lang }: TermsOfServiceProps) {
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
