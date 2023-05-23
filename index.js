function endreSprak() {
    var sprakValgElement = document.getElementById('sprakValg');
    var valgtSprak = sprakValgElement.value;
  
    var overskriftElementer = document.querySelectorAll('h2');
    var paragrafElementer = document.querySelectorAll('p');
    var knappElementer = document.querySelectorAll('button');
    var lenkeElementer = document.querySelectorAll('a');
  
    for (var i = 0; i < overskriftElementer.length; i++) {
      var overskriftId = overskriftElementer[i].id;
      var oversettelse = hentOversettelse(valgtSprak, overskriftId);
      overskriftElementer[i].innerText = oversettelse || '';
    }
  
    for (var j = 0; j < paragrafElementer.length; j++) {
      var paragrafId = paragrafElementer[j].id;
      var oversettelse = hentOversettelse(valgtSprak, paragrafId);
      paragrafElementer[j].innerText = oversettelse || '';
    }
  
    for (var k = 0; k < knappElementer.length; k++) {
      var knappId = knappElementer[k].id;
      var oversettelse = hentOversettelse(valgtSprak, knappId);
      knappElementer[k].innerText = oversettelse || '';
    }
  
    for (var l = 0; l < lenkeElementer.length; l++) {
      var lenkeId = lenkeElementer[l].id;
      var oversettelse = hentOversettelse(valgtSprak, lenkeId);
      lenkeElementer[l].innerText = oversettelse || '';
    }
  }
  
  function hentOversettelse(sprak, elementId) {
    var oversettelser = {
      no: {
        heroOverskrift: 'FEEL',
        heroTekst: 'Vi leverer skreddersydde webdesignløsninger som er tilgjengelige for alle.',
        produkterOverskrift: 'Våre produkter',
        forstorOverskrift: 'Forstør/minsk tekst',
        forstorTekst: 'Her kan du legge til tekst og eventuelt implementere funksjonalitet for å forstørre eller forminske tekststørrelsen.',
        sprak: 'Endre språk',
        footerTekst: '&copy; 2023 FEEL. Alle rettigheter reservert.',
        'forstor-knapp': 'Forstør',
        'forminsk-knapp': 'Forminsk',
        seVareProdukter: 'Se våre produkter',
        nettsideWordpress: 'Nettside i Wordpress',
        driftNettside: 'Drift av nettside',
        strategiskKommunikasjon: 'Strategisk kommunikasjon',
        systemdokumentasjon: 'Systemdokumentasjon',
        nettpresentasjoner: 'Nettpresentasjoner',
        nettvideoSosialeMedier: 'Nettvideo til sosiale medier',
      },
      en: {
        heroOverskrift: 'Welcome to FEEL',
        heroTekst: 'We deliver customized web design solutions accessible to everyone.',
        produkterOverskrift: 'Our Products',
        forstorOverskrift: 'Enlarge/Reduce Text',
        forstorTekst: 'Here you can add text and optionally implement functionality to enlarge or reduce the text size.',
        sprak: 'Change Language',
        footerTekst: '&copy; 2023 Change Language - Example. All rights reserved.',
        'forstor-knapp': 'Enlarge',
        'forminsk-knapp': 'Reduce',
        seVareProdukter: 'See our products',
        nettsideWordpress: 'Website in Wordpress',
        driftNettside: 'Website hosting',
        strategiskKommunikasjon: 'Strategic communication',
        systemdokumentasjon: 'System documentation',
        nettpresentasjoner: 'Online presentations',
        nettvideoSosialeMedier: 'Social media videos',
      },
      fr: {
        heroOverskrift: 'Bienvenue sur FEEL',
        heroTekst: 'Nous proposons des solutions de conception Web personnalisées accessibles à tous.',
        produkterOverskrift: 'Nos produits',
        forstorOverskrift: 'Agrandir/Réduire le texte',
        forstorTekst: 'Ici, vous pouvez ajouter du texte et éventuellement implémenter une fonctionnalité pour agrandir ou réduire la taille du texte.',
        sprak: 'Changer de langue',
        footerTekst: '&copy; 2023 FEEL. Tous droits réservés.',
        'forstor-knapp': 'Agrandir',
        'forminsk-knapp': 'Réduire',
        seVareProdukter: 'Voir nos produits',
        nettsideWordpress: 'Site Web sous Wordpress',
        driftNettside: 'Hébergement de site Web',
        strategiskKommunikasjon: 'Communication stratégique',
        systemdokumentasjon: 'Documentation système',
        nettpresentasjoner: 'Présentations en ligne',
        nettvideoSosialeMedier: 'Vidéos pour les réseaux sociaux',
      },
      
    es: {
    heroOverskrift: 'Bienvenidos a FEEL',
    heroTekst: 'Entregamos soluciones de diseño web personalizadas que están disponibles para todos.',
    produkterOverskrift: 'Nuestros productos',
    forstorOverskrift: 'Aumentar/Disminuir texto',
    forstorTekst: 'Aquí puedes agregar texto e implementar opcionalmente la funcionalidad para aumentar o disminuir el tamaño del texto.',
    sprak: 'Cambiar idioma',
    footerTekst: '© 2023 Cambio de Idioma - Ejemplo. Todos los derechos reservados.',
    'forstor-knapp': 'Aumentar',
    'forminsk-knapp': 'Disminuir',
    seVareProdukter: 'Ver nuestros productos',
    nettsideWordpress: 'Sitio web en Wordpress',
    driftNettside: 'Mantenimiento de sitio web',
    strategiskKommunikasjon: 'Comunicación estratégica',
    systemdokumentasjon: 'Documentación del sistema',
    nettpresentasjoner: 'Presentaciones en línea',
    nettvideoSosialeMedier: 'Video para redes sociales',
    },

    sr: {
        heroOverskrift: 'Dobrodošli na Promena Jezika - Primer',
        heroTekst: 'Isporučujemo prilagođena rešenja za web dizajn koja su dostupna svima.',
        produkterOverskrift: 'Naši proizvodi',
        forstorOverskrift: 'Uvećaj/Smanji tekst',
        forstorTekst: 'Ovde možete dodati tekst i opciono implementirati funkcionalnost za uvećavanje ili smanjivanje veličine teksta.',
        sprak: 'Promeni jezik',
        footerTekst: '© 2023 Promena Jezika - Primer. Sva prava zadržana.',
        'forstor-knapp': 'Uvećaj',
        'forminsk-knapp': 'Smanji',
        seVareProdukter: 'Pogledajte naše proizvode',
        nettsideWordpress: 'Veb stranica u Wordpress-u',
        driftNettside: 'Održavanje veb stranice',
        strategiskKommunikasjon: 'Strateška komunikacija',
        systemdokumentasjon: 'Sistemsko dokumentovanje',
        nettpresentasjoner: 'Online prezentacije',
        nettvideoSosialeMedier: 'Video za društvene mreže',
        }  
    };
    
  
    var oversettelse = oversettelser[sprak][elementId];
  
    if (oversettelse === undefined) {
      return ''; // Return an empty string if translation is missing
    }
  
    return oversettelse;
  }
  
  function endreTekstStorrelse(endring) {
    var tekstForstorElement = document.getElementById('forstorTekst');
    var currentFontSize = window.getComputedStyle(tekstForstorElement).getPropertyValue('font-size');
    var currentFontSizeNumeric = parseFloat(currentFontSize);
    var newFontSize = currentFontSizeNumeric + endring;
    tekstForstorElement.style.fontSize = newFontSize + 'px';
  }
  