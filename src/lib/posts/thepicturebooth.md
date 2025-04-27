---
title: "ThePictureBooth: Mijn eerste grote fullstack app"
date: "27-04-2025"
updated: "27-04-2025"
categories:
  - "project"
  - "sveltekit"
  - "javascript"
  - "nodejs"
coverImage: "/images/thepicturebooth-storefront.avif"
coverWidth: 16
coverHeight: 9
excerpt: Hoe ik een fullstack app heb gebouwd, compleet, met een CRM-systeem, factureringsysteem, klantbeheer en boekingbeheer
---

# ThePictureBooth; Een waanzinnige fullstack app

Dit is een klant van mij die heel dicht bij mij staat, een goede kerel. Van de ene op de andere dag had hij het idee om een photo booth verhuur bedrijf te beginnen, een paar dagen later had hij ze op bestelling, en een aantal weken verder heeft hij volgeboekte maanden. De groei ging dus exponentieel, en dat vraagt snel om goede boekhouding, financiële overzichten, klantoverzicht/CRM-systeem en boeking/reserveringssystemen.

Dus ik moest een fullstack app opleveren die veelzijdig en gepersonaliseerd was, iets unieks en functioneels. Een frontend die de concurrenten zou verpletteren en een backoffice die dag-tot-dag taken vereenvoudigen voor het personeel.

## De development stack
* SvelteKit - als framework, zeer flexibel, stabiel en snel te schrijven.
* TailwindCSS + DaisyUI - Razendsnelle designing, styling en prototyping.
* MariaDB - een beproefde en robuuste database.
* MinIO S3 - als storage voor foto's, bonnetjes, facturen.
* Sequelize - Stabiele en goed gedocumenteerde database ORM.
* PDFKit - Snel en efficient PDF's genereren voor facuren
*Mijn afhankelijkheid van externe dependencies probeer ik zoveel mogelijk te minimaliseren, dit draagt bij aan een hogere stabiliteit, veiligheid en langdurig onderhoudbaarheid van het project.*

<img src="/images/thepicturebooth-dashboard.avif">

## De functionaliteiten
Deze app bevat zowel een dashboard als een storefront voor klanten. De functionaliteiten kunnen we groeperen onder deze 4 groepen:

### Boekingen
* Het opvragen en bekijken, aanmaken, wijzigen en verwijderen van boekingen.
* Betaalstatus, boekingstatus en aanbetalingen beheren per boeking.
* Meldingen ontvangen via de mail wanneer nieuwe boekingen binnenkomen + bevestigingsmail naar de klant.
* Het kunnen accepteren/aannemen/annuleren van boekingen + bevestiging/annuleringsmail naar de klant.

<img src="/images/thepicturebooth-boekingen.avif">

### Klantbeheer
* Het  bekijken, aanmaken, wijzigen en verwijderen van boekingen.
* Gedetailleerde overzicht van het klantenbestand (met metrics zoals omzet per klant, terugkeerpercentage en dergelijken).
* Direct factureren en mailen via de app.
* Klantgegevens/bedrijfsgegevens inzien en makkelijk kunnen opvolgen na een boeking.

<img src="/images/thepicturebooth-klanten.avif">

### Financieel beheer/overzicht
* Complete omzet- en winstrapportages.
* Kosten medewerkers bijhouden, medewerkers kunnen zelf kosten aanmaken en bonnetjes/facturen bijvoegen.
* Facturen en offertes inzien, wijzigen en aanmaken.
* BTW overzichten en andere belastingtechnische berekeningen.

<img src="/images/thepicturebooth-financien.avif">

### Applicatie
* Mogelijkheid om accounts voor medewerkers aan te maken en te beheren.
* Mobile-first applicatie omdat deze veel onderweg en onsite word geraadpleegd
* Meldingen ontvangen wanneer er nieuwtjes (boekingen/betalingen e.d.) zijn (per mail of sms).

Waarschijnlijk vergeet ik hier en daar nog een feature die ik toegepast heb, en niet te vergeten zit er natuurlijk ook een goede overzichtelijke dashboard homepage bij waarop veel handige metrics en de laatste data, boekingen, meldingen en klanten worden weergegeven.

## Het ontwikkelproces
Na de werkprocessen bij de klant goed te hebben geanalyseerd, heb ik een database schema gemaakt op basis hen werkwijze en procedures. Vervolgens ging ik aan de slag met een huisthema en designs voor de dashboard. Storefront (wat klanten zien) liet ik hierin nog achterwege.

Nadat de designs klaar waren, ging ik ieder functionaliteitsgroep af en schreef ik deze pagina's in code, maakte tweaks waar nodig, zorgde ik dat er ook daadwerkelijk data vanuit de database werd gefetcht via **server side rendering**. Hierna heb ik voor ieder functionaliteitsgroep meerdere REST API routes opgezet, zodat er ook data richting de server en database kan gaan.

Iedere form heeft zijn eigen input velden en moest ik dus tientallen API's opzetten om deze forms daadwerkelijk functioneel te maken. Het testen van de API's die ik zelf schreef en het koppelen van forms was moeizaam en langzaam werk. Er kwam veel debugging bij kijken en heeft enorm veel tijd gekost.

Nadat het zware development werk af was (database, API's, forms en functionaliteiten) heb ik de UX goed onder de loep genomen, animaties en transities toegevoegd, workflows onder de loep genomen en die versimpeld. Hoe simpeler hoe beter, aangezien de klant soms snel onderweg een wijziging moet kunnen doorvoeren. 

Als laatste heb ik een storefront gemaakt, een prachtige website waar mensen boekingen kunnen plaatsen, een aanbetaling kunnen verrichten via Pay.NL, onze payment provider (custom payment integration via hen SDK). UX/UI moest hier ook echt top zijn, SEO gerelateerde aspecten ook. Het moest betrouwbaarheid uitstralen. Dit was het laatste 

## Uitdagingen en oplossingen: Wat ging er mis en hoe heb ik het opgelost?

In verschillende stages in het project heb ik veel moeten fetchen vanuit de database, vervolgens moeten mappen in een array van objecten. Dit bracht veel moeilijkheden met zich mee, omdat ik hier voornamelijk in de avonduren aan heb gewerkt en ik vergat hoe ik mijn variabelen heb genoemd in mijn andere reeds afgeronde pagina's en modules.

Dus ik moest nadat alles klaar en werkend was, langs iedere Javascript bestandje om naming conventions langs te gaan en alles snake_case te maken. En dan terug naar de frontend om dezelfde aanpassing te doen. Dit was heel moeizaam en veroorzaakte veel stress en twijfel over of het project nog stabiel is.

## Prestaties en optimalisatie: Hoe werkt de app in de praktijk?
De app is stabiel, momenteel in de eerste test- en feedbackfase bij de klant, ik verwacht dat er nog veel verbeterpuntjes zijn en bugs die opgelost kunnen worden. Dit krijg ik naderhand te horen.

## Lessen geleerd: Wat neem ik mee naar toekomstige projecten?
Omdat ik solo een hele fullstack enterprise-grade app heb gebouwd, ben ik nu een stuk zelfverzekerder in mijn skills om grotere projecten aan te nemen, en twijfel ik niet meer aan mijzelf. Ook ben ik beter geworden in het achterwege laten van onnodige dependencies en ben ik beter geworden in het schrijven van mijn eigen, simpele oplossingen in plaats van afhankelijk te zijn van packages voor bijvoorbeeld user authenticatie en met cookies werken.

## Toekomstplannen: Wat is de volgende stap voor de app?
Op dit moment is de website live en in gebruik, feature requests worden gedaan, bugs worden gemeld, en zo wil ik beetje bij beetje terecht komen bij een perfect product voor de klant. Dit is een lang proces, hoewel het al een stabiel en goed product is die op de klant is afgestemd, kan het altijd beter. Ik neem aan dat benodigdheden van het bedrijf ook veranderen naarmate ze groeien. 

## Hoe kan jij meer leren of bijdragen? 
Het project is open source. Pull requests zijn altijd welkom. Je bent vrij om dit project te forken en te gebruiken voor jezelf of eigen klanten. Er staat een GPLv3 licentie op, dat betekend dat je vrij bent om het te gebruiken op welke manier je wilt, zolang verbeteringen, optimalisaties en features die je toevoegt ook open-sourced. Dit vind ik eerlijk aangezien ik hier zelf ook tientallen uren in heb gestoken en het vrij heb gedeeld. Hier is een <a href="https://github.com/utrechtsedev/thepicturebooth]" style="color: blue;">link naar het project.</a>
Bedankt voor het lezen en tot de volgende keer!
