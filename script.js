document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    
    const translations = {
        en: {
            'hero.title': 'Welcome to our Website!',
            'hero.description': 'This is a demonstration of language localization using JavaScript.',
            'hero.button': 'Learn More',
            'about.title': 'About Us',
            'about.content': 'We provide amazing services to our customers worldwide.',
            'footer.copyright': '&copy; 2023 My Company'
        },
        es: {
            'hero.title': '¡Bienvenido a nuestro sitio web!',
            'hero.description': 'Esta es una demostración de localización de idiomas usando JavaScript.',
            'hero.button': 'Aprende más',
            'about.title': 'Sobre nosotros',
            'about.content': 'Ofrecemos servicios increíbles a nuestros clientes en todo el mundo.',
            'footer.copyright': '&copy; 2023 Mi Compañía'
        },
        fr: {
            'hero.title': 'Bienvenue sur notre site web !',
            'hero.description': 'Ceci est une démonstration de la localisation linguistique à l\'aide de JavaScript.',
            'hero.button': 'En savoir plus',
            'about.title': 'À propos de nous',
            'about.content': 'Nous fournissons des services incroyables à nos clients du monde entier.',
            'footer.copyright': '&copy; 2023 Mon Entreprise'
        },
        hi: { // Hindi
            'hero.title': 'हमारी वेबसाइट में आपका स्वागत है!',
            'hero.description': 'यह जावास्क्रिप्ट का उपयोग करके भाषा स्थानीयकरण का एक प्रदर्शन है।',
            'hero.button': 'और जानें',
            'about.title': 'हमारे बारे में',
            'about.content': 'हम दुनिया भर के अपने ग्राहकों को अद्भुत सेवाएं प्रदान करते हैं।',
            'footer.copyright': '&copy; 2023 मेरी कंपनी'
        },
        or: { // Odia
            'hero.title': 'ଆମ ୱେବସାଇଟ୍‌କୁ ସ୍ଵାଗତ!',
            'hero.description': 'ଏହା ଜାଭାସ୍କ୍ରିପ୍ଟ ବ୍ୟବହାର କରି ଭାଷା ସ୍ଥାନୀୟକରଣର ଏକ ପ୍ରଦର୍ଶନ ଅଟେ।',
            'hero.button': 'ଆହୁରି ଜାଣନ୍ତୁ',
            'about.title': 'ଆମ ବିଷୟରେ',
            'about.content': 'ଆମେ ବିଶ୍ଵବ୍ୟାପୀ ଆମର ଗ୍ରାହକମାନଙ୍କୁ ଚମତ୍କାର ସେବା ପ୍ରଦାନ କରୁ।',
            'footer.copyright': '&copy; 2023 ମୋ କମ୍ପାନୀ'
        },
        bn: { // Bengali
            'hero.title': 'আমাদের ওয়েবসাইটে স্বাগতম!',
            'hero.description': 'এটি জাভাস্ক্রিপ্ট ব্যবহার করে ভাষা স্থানীয়করণের একটি প্রদর্শনী।',
            'hero.button': 'আরও জানুন',
            'about.title': 'আমাদের সম্পর্কে',
            'about.content': 'আমরা বিশ্বব্যাপী আমাদের গ্রাহকদের চমৎকার পরিষেবা প্রদান করি।',
            'footer.copyright': '&copy; ২০২৩ আমার কোম্পানি'
        }
    };

    function translatePage(lang) {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

   
    const initialLang = 'en'; 
    translatePage(initialLang);
    languageSelect.value = initialLang;


    languageSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        translatePage(selectedLang);
    });
});