import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface YourRightsProps {
  lang: Language;
}

const titles: Record<Language, string> = {
  en: 'Your Rights',
  lv: 'Jūsu tiesības',
  de: 'Ihre Rechte',
  fr: 'Vos droits',
  es: 'Sus derechos',
};

const contentByLang: Record<Language, string> = {
  en: `
## Your Rights as a Passenger

When your flight is delayed, cancelled, or you are denied boarding, EU and UK law gives you concrete rights — not just optional courtesies. Airlines must respect these even if they don't mention them at the gate.

### 1. The Right to Care
If your flight is delayed by **2+ hours** (short-haul), **3+ hours** (medium-haul) or **4+ hours** (long-haul), the airline must provide, free of charge:

- Meals and refreshments proportional to the wait
- Two phone calls or emails
- Hotel accommodation if an overnight stay is required
- Transport between the airport and the hotel

**Important:** This applies regardless of the cause of delay — even in "extraordinary circumstances."

### 2. The Right to Reimbursement or Re-routing
If your flight is **cancelled** or delayed by **5+ hours**, you have a choice:

- **Full refund** of your ticket within 7 days, OR
- **Re-routing** to your final destination at the earliest opportunity, OR
- **Re-routing** at a later date of your convenience (subject to availability)

### 3. The Right to Compensation
On top of care and refunds, you may be entitled to a **fixed cash compensation**:

- **€250 / £220** — flights up to 1,500 km
- **€400 / £350** — intra-EU flights over 1,500 km, or other flights 1,500–3,500 km
- **€600 / £520** — flights over 3,500 km

Compensation is paid **in addition** to any refund. The airline cannot offer vouchers in place of cash unless you agree.

### 4. The Right to Information
Airlines must give you a **written notice** of your rights at the airport. If you weren't given one, ask. The absence of this notice does **not** waive your rights.

### 5. The Right to Downgrade Reimbursement
If you are placed in a lower class than booked:

- **30%** refund of the ticket price for flights up to 1,500 km
- **50%** for intra-EU flights over 1,500 km, or other flights 1,500–3,500 km
- **75%** for flights over 3,500 km

### 6. The Right to Claim — Time Limits
You don't lose your rights immediately. You can usually claim for past flights:

- **Most EU countries:** up to **3 years**
- **UK & Ireland:** up to **6 years**
- **Germany:** **3 years** from the end of the year of the flight
- **France:** **5 years**

### What the Airline Cannot Do
- They **cannot** force you to sign away your rights for a voucher
- They **cannot** refuse compensation by claiming "operational reasons" — only genuine extraordinary circumstances qualify
- They **cannot** pay less than the legal amount because of a fare sale or discount

### If the Airline Refuses
1. Submit a formal written claim to the airline (keep proof)
2. Wait their response window (usually 6–8 weeks)
3. Escalate to your **National Enforcement Body** (in Latvia: PTAC — Patērētāju tiesību aizsardzības centrs)
4. Use Small Claims Court or a claim management service as a last step

You have these rights regardless of nationality, ticket price, or whether you booked with miles. Use the calculator on the home page to estimate what you may be owed.
`,
  lv: `
## Jūsu tiesības kā pasažierim

Kad jūsu lidojums tiek aizkavēts, atcelts vai jums atsaka iekāpšanu, ES un AK likumi piešķir jums konkrētas tiesības — ne tikai izvēles laipnības. Aviokompānijām tās jāievēro pat tad, ja par tām nepiemin pie ielidošanas vārtiem.

### 1. Tiesības uz aprūpi
Ja jūsu lidojums kavējas **2+ stundas** (īsais maršruts), **3+ stundas** (vidējais maršruts) vai **4+ stundas** (tālais maršruts), aviokompānijai bez maksas jānodrošina:

- Ēdiens un dzērieni, kas atbilst gaidīšanas laikam
- Divi tālruņa zvani vai e-pasta ziņojumi
- Naktsmītne viesnīcā, ja nepieciešama palikšana pa nakti
- Transports starp lidostu un viesnīcu

**Svarīgi:** Tas attiecas neatkarīgi no kavējuma iemesla — pat "ārkārtējos apstākļos".

### 2. Tiesības uz atmaksu vai pārmaršrutēšanu
Ja jūsu lidojums **atcelts** vai kavējas **5+ stundas**, jums ir izvēle:

- **Pilna biļetes atmaksa** 7 dienu laikā, VAI
- **Pārmaršrutēšana** uz galamērķi pie pirmās iespējas, VAI
- **Pārmaršrutēšana** vēlākā jums izdevīgā datumā (atkarībā no pieejamības)

### 3. Tiesības uz kompensāciju
Papildus aprūpei un atmaksai jums var pienākties **fiksēta naudas kompensācija**:

- **€250 / £220** — lidojumiem līdz 1500 km
- **€400 / £350** — ES iekšējiem lidojumiem virs 1500 km vai citiem lidojumiem 1500–3500 km
- **€600 / £520** — lidojumiem virs 3500 km

Kompensācija tiek maksāta **papildus** jebkurai atmaksai. Aviokompānija nedrīkst piedāvāt vaučerus skaidras naudas vietā, ja vien jūs tam nepiekrītat.

### 4. Tiesības uz informāciju
Aviokompānijai lidostā jāizsniedz **rakstisks paziņojums** par jūsu tiesībām. Ja to nesaņēmāt, prasiet. Šī paziņojuma trūkums **neatceļ** jūsu tiesības.

### 5. Tiesības uz atmaksu klases pazemināšanas gadījumā
Ja jūs ievieto zemākā klasē, nekā rezervēts:

- **30%** atmaksa no biļetes cenas lidojumiem līdz 1500 km
- **50%** ES iekšējiem lidojumiem virs 1500 km vai citiem lidojumiem 1500–3500 km
- **75%** lidojumiem virs 3500 km

### 6. Tiesības iesniegt prasību — termiņi
Jūs nezaudējat tiesības uzreiz. Jūs parasti varat iesniegt prasību par iepriekšējiem lidojumiem:

- **Vairums ES valstu:** līdz **3 gadiem**
- **AK un Īrija:** līdz **6 gadiem**
- **Vācija:** **3 gadi** no lidojuma gada beigām
- **Francija:** **5 gadi**

### Ko aviokompānija nedrīkst darīt
- **Nedrīkst** piespiest jūs atteikties no tiesībām par vaučeru
- **Nedrīkst** atteikt kompensāciju, atsaucoties uz "operatīviem iemesliem" — tikai patiesi ārkārtēji apstākļi ir derīgi
- **Nedrīkst** maksāt mazāk par likumā noteikto summu izpārdošanas vai atlaides dēļ

### Ja aviokompānija atsaka
1. Iesniedziet aviokompānijai formālu rakstisku prasību (saglabājiet pierādījumus)
2. Gaidiet viņu atbildes termiņu (parasti 6–8 nedēļas)
3. Eskalējiet uz savu **Valsts izpildaģentūru** (Latvijā: PTAC — Patērētāju tiesību aizsardzības centrs)
4. Izmantojiet Maza apjoma prasību tiesu vai prasību pārvaldības pakalpojumu kā pēdējo soli

Jums šīs tiesības pienākas neatkarīgi no pilsonības, biļetes cenas vai tā, vai rezervējāt ar bonusa jūdzēm. Izmantojiet kalkulatoru sākumlapā, lai novērtētu, kas jums varētu pienākties.
`,
  de: `
## Ihre Rechte als Fluggast

Wenn Ihr Flug verspätet oder annulliert wird oder Ihnen die Beförderung verweigert wird, gewähren Ihnen das EU- und britische Recht konkrete Rechte — keine optionalen Gefälligkeiten. Fluggesellschaften müssen diese respektieren, auch wenn sie sie am Gate nicht erwähnen.

### 1. Das Recht auf Betreuung
Wenn Ihr Flug um **2+ Stunden** (Kurzstrecke), **3+ Stunden** (Mittelstrecke) oder **4+ Stunden** (Langstrecke) verspätet ist, muss die Fluggesellschaft kostenlos zur Verfügung stellen:

- Mahlzeiten und Erfrischungen entsprechend der Wartezeit
- Zwei Telefonate oder E-Mails
- Hotelunterkunft, falls eine Übernachtung erforderlich ist
- Transport zwischen Flughafen und Hotel

**Wichtig:** Dies gilt unabhängig von der Ursache der Verspätung — auch bei "außergewöhnlichen Umständen".

### 2. Das Recht auf Erstattung oder Umbuchung
Wenn Ihr Flug **annulliert** wird oder **5+ Stunden** Verspätung hat, haben Sie die Wahl:

- **Volle Erstattung** Ihres Tickets innerhalb von 7 Tagen, ODER
- **Umbuchung** zum Endziel zum frühestmöglichen Zeitpunkt, ODER
- **Umbuchung** zu einem späteren, für Sie passenden Termin (vorbehaltlich Verfügbarkeit)

### 3. Das Recht auf Entschädigung
Zusätzlich zur Betreuung und Erstattung kann Ihnen eine **feste Geldentschädigung** zustehen:

- **250 € / 220 £** — Flüge bis 1.500 km
- **400 € / 350 £** — innereuropäische Flüge über 1.500 km oder andere Flüge zwischen 1.500 und 3.500 km
- **600 € / 520 £** — Flüge über 3.500 km

Die Entschädigung wird **zusätzlich** zu jeder Erstattung gezahlt. Die Fluggesellschaft darf keine Gutscheine anstelle von Bargeld anbieten, es sei denn, Sie stimmen zu.

### 4. Das Recht auf Information
Fluggesellschaften müssen Ihnen am Flughafen eine **schriftliche Mitteilung** über Ihre Rechte aushändigen. Falls Sie keine erhalten haben, fragen Sie nach. Das Fehlen dieser Mitteilung hebt Ihre Rechte **nicht** auf.

### 5. Das Recht auf Erstattung bei Herabstufung
Wenn Sie in eine niedrigere Klasse als gebucht eingestuft werden:

- **30 %** Erstattung des Ticketpreises bei Flügen bis 1.500 km
- **50 %** bei innereuropäischen Flügen über 1.500 km oder anderen Flügen 1.500–3.500 km
- **75 %** bei Flügen über 3.500 km

### 6. Das Recht auf Anspruch — Fristen
Sie verlieren Ihre Rechte nicht sofort. In der Regel können Sie Ansprüche für vergangene Flüge geltend machen:

- **Die meisten EU-Länder:** bis zu **3 Jahre**
- **UK & Irland:** bis zu **6 Jahre**
- **Deutschland:** **3 Jahre** ab Ende des Jahres des Fluges
- **Frankreich:** **5 Jahre**

### Was die Fluggesellschaft nicht darf
- Sie **darf** Sie nicht zwingen, Ihre Rechte gegen einen Gutschein abzutreten
- Sie **darf** die Entschädigung nicht mit "betrieblichen Gründen" verweigern — nur echte außergewöhnliche Umstände zählen
- Sie **darf** wegen eines Sonderangebots oder Rabatts nicht weniger als den gesetzlichen Betrag zahlen

### Wenn die Fluggesellschaft ablehnt
1. Reichen Sie einen formellen schriftlichen Anspruch bei der Fluggesellschaft ein (Beweise aufbewahren)
2. Warten Sie auf deren Antwortfrist (in der Regel 6–8 Wochen)
3. Eskalieren Sie an Ihre **nationale Durchsetzungsstelle** (in Deutschland: Luftfahrt-Bundesamt / Schlichtungsstelle für den öffentlichen Personenverkehr — söp)
4. Nutzen Sie als letzten Schritt das Amtsgericht oder einen Inkassodienst

Sie haben diese Rechte unabhängig von Staatsangehörigkeit, Ticketpreis oder ob Sie mit Meilen gebucht haben. Verwenden Sie den Rechner auf der Startseite, um zu schätzen, was Ihnen zusteht.
`,
  fr: `
## Vos droits en tant que passager

Lorsque votre vol est retardé, annulé ou que l'embarquement vous est refusé, le droit de l'UE et du Royaume-Uni vous accorde des droits concrets — pas seulement des courtoisies optionnelles. Les compagnies aériennes doivent les respecter même si elles ne les mentionnent pas à la porte d'embarquement.

### 1. Le droit à la prise en charge
Si votre vol est retardé de **2+ heures** (court-courrier), **3+ heures** (moyen-courrier) ou **4+ heures** (long-courrier), la compagnie doit fournir gratuitement :

- Des repas et boissons proportionnels à l'attente
- Deux appels téléphoniques ou e-mails
- L'hébergement à l'hôtel si une nuitée est nécessaire
- Le transport entre l'aéroport et l'hôtel

**Important :** Cela s'applique quelle que soit la cause du retard — même en cas de "circonstances extraordinaires".

### 2. Le droit au remboursement ou au réacheminement
Si votre vol est **annulé** ou retardé de **5+ heures**, vous avez le choix :

- **Remboursement intégral** de votre billet sous 7 jours, OU
- **Réacheminement** vers votre destination finale dans les meilleurs délais, OU
- **Réacheminement** à une date ultérieure de votre convenance (sous réserve de disponibilité)

### 3. Le droit à l'indemnisation
En plus de la prise en charge et du remboursement, vous pouvez avoir droit à une **indemnisation fixe en espèces** :

- **250 € / 220 £** — vols jusqu'à 1 500 km
- **400 € / 350 £** — vols intra-UE de plus de 1 500 km, ou autres vols entre 1 500 et 3 500 km
- **600 € / 520 £** — vols de plus de 3 500 km

L'indemnisation est versée **en plus** de tout remboursement. La compagnie ne peut pas offrir de bons à la place d'espèces, sauf si vous l'acceptez.

### 4. Le droit à l'information
Les compagnies aériennes doivent vous remettre un **avis écrit** de vos droits à l'aéroport. Si vous n'en avez pas reçu, demandez-le. L'absence de cet avis **n'annule pas** vos droits.

### 5. Le droit au remboursement en cas de surclassement inverse
Si vous êtes placé dans une classe inférieure à celle réservée :

- **30 %** de remboursement du prix du billet pour les vols jusqu'à 1 500 km
- **50 %** pour les vols intra-UE de plus de 1 500 km, ou autres vols de 1 500 à 3 500 km
- **75 %** pour les vols de plus de 3 500 km

### 6. Le droit de réclamer — délais
Vous ne perdez pas vos droits immédiatement. Vous pouvez généralement réclamer pour des vols passés :

- **La plupart des pays de l'UE :** jusqu'à **3 ans**
- **Royaume-Uni et Irlande :** jusqu'à **6 ans**
- **Allemagne :** **3 ans** à compter de la fin de l'année du vol
- **France :** **5 ans**

### Ce que la compagnie aérienne ne peut pas faire
- Elle **ne peut pas** vous forcer à renoncer à vos droits contre un bon
- Elle **ne peut pas** refuser l'indemnisation en invoquant des "raisons opérationnelles" — seules les véritables circonstances extraordinaires sont valables
- Elle **ne peut pas** payer moins que le montant légal en raison d'une promotion ou d'une remise

### Si la compagnie refuse
1. Soumettez une réclamation écrite formelle à la compagnie (gardez les preuves)
2. Attendez leur délai de réponse (généralement 6–8 semaines)
3. Faites remonter à votre **organisme national d'exécution** (en France : la DGAC — Direction générale de l'aviation civile)
4. Utilisez le tribunal de proximité ou un service de gestion des réclamations en dernier recours

Vous avez ces droits quelle que soit votre nationalité, le prix du billet ou si vous avez réservé avec des miles. Utilisez le calculateur sur la page d'accueil pour estimer ce qui pourrait vous être dû.
`,
  es: `
## Sus derechos como pasajero

Cuando su vuelo se retrasa, se cancela o le deniegan el embarque, la legislación de la UE y el Reino Unido le otorga derechos concretos — no simples cortesías opcionales. Las aerolíneas deben respetarlos incluso si no los mencionan en la puerta de embarque.

### 1. El derecho a la asistencia
Si su vuelo se retrasa **2+ horas** (corto recorrido), **3+ horas** (medio recorrido) o **4+ horas** (largo recorrido), la aerolínea debe proporcionar gratuitamente:

- Comidas y refrescos proporcionales al tiempo de espera
- Dos llamadas telefónicas o correos electrónicos
- Alojamiento en hotel si es necesario pernoctar
- Transporte entre el aeropuerto y el hotel

**Importante:** Esto se aplica independientemente de la causa del retraso — incluso en "circunstancias extraordinarias".

### 2. El derecho al reembolso o reubicación
Si su vuelo es **cancelado** o se retrasa **5+ horas**, tiene la opción de:

- **Reembolso íntegro** de su billete en 7 días, O
- **Reubicación** a su destino final lo antes posible, O
- **Reubicación** en una fecha posterior conveniente para usted (sujeto a disponibilidad)

### 3. El derecho a la compensación
Además de la asistencia y los reembolsos, puede tener derecho a una **compensación económica fija**:

- **250 € / 220 £** — vuelos de hasta 1.500 km
- **400 € / 350 £** — vuelos dentro de la UE de más de 1.500 km, u otros vuelos de 1.500 a 3.500 km
- **600 € / 520 £** — vuelos de más de 3.500 km

La compensación se paga **además** de cualquier reembolso. La aerolínea no puede ofrecer bonos en lugar de dinero a menos que usted lo acepte.

### 4. El derecho a la información
Las aerolíneas deben entregarle un **aviso por escrito** de sus derechos en el aeropuerto. Si no se lo dieron, solicítelo. La ausencia de este aviso **no anula** sus derechos.

### 5. El derecho al reembolso por bajada de clase
Si lo colocan en una clase inferior a la reservada:

- **30 %** de reembolso del precio del billete para vuelos de hasta 1.500 km
- **50 %** para vuelos dentro de la UE de más de 1.500 km, u otros vuelos de 1.500 a 3.500 km
- **75 %** para vuelos de más de 3.500 km

### 6. El derecho a reclamar — plazos
No pierde sus derechos de inmediato. Por lo general puede reclamar por vuelos pasados:

- **La mayoría de países de la UE:** hasta **3 años**
- **Reino Unido e Irlanda:** hasta **6 años**
- **Alemania:** **3 años** desde el fin del año del vuelo
- **Francia:** **5 años**
- **España:** **5 años** (Ley de Navegación Aérea)

### Lo que la aerolínea no puede hacer
- **No puede** obligarle a renunciar a sus derechos a cambio de un bono
- **No puede** denegar la compensación alegando "razones operativas" — solo las circunstancias extraordinarias genuinas son válidas
- **No puede** pagar menos del importe legal por una oferta o descuento

### Si la aerolínea se niega
1. Presente una reclamación formal por escrito a la aerolínea (guarde pruebas)
2. Espere su plazo de respuesta (normalmente 6–8 semanas)
3. Eleve la queja a su **organismo nacional de ejecución** (en España: AESA — Agencia Estatal de Seguridad Aérea)
4. Use el Juzgado de lo Mercantil o un servicio de gestión de reclamaciones como último recurso

Tiene estos derechos independientemente de su nacionalidad, del precio del billete o de si ha reservado con millas. Use la calculadora en la página de inicio para estimar lo que podría corresponderle.
`,
};

export default function YourRights({ lang }: YourRightsProps) {
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
