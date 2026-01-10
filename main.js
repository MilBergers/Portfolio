    // Translation System
    const translations = {
        nl: {
          // Meta
          'meta.description': 'Portfolio van Emile Bergers — Interactive Media Development student: web, IoT, XR en interactieve installaties.',
          
          // Navigation
          'nav.about': 'Over mij',
          'nav.skills': 'Skills',
          'nav.live': 'Live',
          'nav.projects': 'Projecten',
          'nav.cv': 'CV',
          'nav.contact': 'Contact',
          'nav.menu': 'Menu openen',
          'nav.mainmenu': 'Hoofdmenu',
          
          // Hero
          'hero.prefix': 'Ik ben een',
          'hero.description': 'Ik bouw verrassende interactieve ervaringen met webtechnologie, IoT, XR en installaties — van idee en onderzoek tot eindproduct.',
          'hero.cta.projects': 'Bekijk mijn projecten',
          'hero.cta.contact': 'Neem contact op',
          
          // Typewriter words
          'typewriter.words': [" Digitale Maker", " Full-stack Developer", " Innovator", " Probleemoplosser", " Conceptbedenker", " Teamspeler", " Student"],
          
          // About
          'about.title': 'Over mij',
          'about.description': 'Ik ben <strong>Emile Bergers</strong>, student <em>Interactive Media Development</em> in Gent. Wat mij drijft, is de combinatie van creativiteit en techniek waarmee ik ideeën kan vertalen naar projecten die blijven hangen.',
          'about.bullet1': 'Creatief problemen oplossen & kritisch denken',
          'about.bullet2': 'User Experience Design & teamwork',
          'about.bullet3': 'Webdevelopment & reflectief werken',
          'about.photo.alt': 'Foto van Emile Bergers',
          
          // Skills
          'skills.title': 'Skills',
          'skills.aria': 'Skills carousel',
          
          // Toggle Section
          'toggle.title': 'Zie het verschil',
          'toggle.without': 'Zonder mij',
          'toggle.with': 'Met mij',
          'toggle.aria': 'Toggle broken CSS',
  
          // Live
          'live.title': 'Live in Gent',
          'live.time.label': 'Tijd',
          'live.weather.label': 'Weer',
          'live.weather.loading': 'Laden…',
          'live.music.label': 'Muziek',
          'live.music.loading': 'Laden…',
          'live.music.nowPlaying': 'Nu aan het spelen',
          'live.music.recent': 'Recent gespeeld',
          
          // Projects
          'projects.title': 'Projecten',
          'projects.note': 'Niet alle projecten zijn klikbaar of opgenomen in deze lijst, aangezien sommige projecten niet gepubliceerd zijn of bedrijfsgeheim zijn.',
          'projects.viewmore': 'Bekijk meer →',
          
          // Project 1: Sweet Control
          'project1.description': 'Interactieve installatie voor De Warmste Week waarbij gebruikers via hun smartphone een fysieke grijpmachine besturen. Een speelse combinatie van webtechnologie en IoT met een warm doel.',
          'project1.tag1': 'IoT',
          'project1.tag2': 'Web',
          'project1.tag3': 'Installatie',
          
          // Project 2: Atelier Atlas
          'project2.description': 'Startup-project binnen het Unizo Step Up traject dat 3D-geprinte miniaturen van steden en locaties realiseert. Een tastbare vertaling van geografische data naar gedetailleerde 3D-modellen.',
          'project2.tag1': 'Startup',
          'project2.tag2': '3D Print',
          
          // Project 3: Gimber
          'project3.title': 'Gimber Marketing Campagne',
          'project3.description': 'Marketingplan voor Gimber met strategische analyse en campagnevoorstellen.',
          'project3.tag1': 'Marketing',
          'project3.tag2': 'Strategie',
          'project3.tag3': 'Research',
          'project3.video.aria': 'Gimber Marketing Plan – preview',
          'project3.video.error': 'Je browser ondersteunt geen videoweergave.',
          
          // Project 4: Tembo
          'project4.title': 'Wintercircus — Tembo AR Experience',
          'project4.description': 'Webapp waarbij bezoekers een fysieke kleurplaat kunnen omzetten naar een digitaal interactief AR model. De ingekleurde olifant komt tot leven in augmented reality.',
          'project4.tag1': 'Web',
          'project4.tag2': 'AR',
          'project4.tag3': 'Creative Tech',
          'project4.alt': 'Tembo AR Experience — AR olifant die tot leven komt',
          
          // Project 5: Bacardi
          'project5.title': 'Bacardi Cocktail Visualizer',
          'project5.description': 'Interactieve web-ervaring waarbij gebruikers een live cocktail database kunnen doorzoeken, drankjes kunnen mixen en recepten zien tot leven komen als dynamische 3D-scènes in TouchDesigner via WebSocket verbinding.',
          'project5.tag1': 'Web',
          'project5.tag2': 'TouchDesigner',
          'project5.tag3': 'WebSocket',
          'project5.tag4': 'API',
          
          // Project 6: Hall of Painted Worlds
          'project6.description': 'Unreal Engine 5 museumervaring waarbij gebruikers verschillende schilderijen kunnen binnenstappen en beleven. Je wordt in de wereld van het schilderij geteleporteerd voor een immersieve ervaring. Bekroond met <strong>1e plaats IMX Expo</strong>.',
          'project6.tag1': 'Unreal Engine 5',
          'project6.tag2': 'Game/Experience',
          'project6.alt': 'The Hall of Painted Worlds — interactieve UE5 museumervaring',
          
          // Project 7: hARTbeat
          'project7.description': 'Interactieve installatie die biometrische data (hartslag, lichaamtemperatuur, leeftijd, geslacht, ...) omzet in AI-gegenereerde kunstwerken.',
          'project7.tag1': 'Installatie',
          'project7.tag2': 'AI',
          'project7.tag3': 'Data',
          'project7.alt': 'hARTbeat — biometrische data naar AI-kunst',
          
          // Project 8: Muzikale Spiegel
          'project8.title': 'Muzikale Spiegel',
          'project8.description': 'Smart mirror die live muziek genereert op basis van gezichtsuitdrukking.',
          'project8.tag1': 'IoT',
          'project8.tag2': 'Audio',
          'project8.tag3': 'Computer Vision',
          'project8.alt': 'Muzikale Spiegel — smart mirror genereert live muziek op expressie',
          
          // Project 9: 4TheWin
          'project9.description': 'Interactief AR-spel waar twee spelers 4 op een rij spelen via handtracking.',
          'project9.tag1': 'AR',
          'project9.tag2': 'Handtracking',
          'project9.tag3': 'Multiplayer',
          'project9.alt': '4TheWin — AR 4 op een rij met handtracking',
          
          // Project 10: Placeholder
          'project10.title': 'Jouw project hier?',
          'project10.description': 'Klaar om samen te werken?',
          'project10.tag1': 'Coming soon',
          
          // Contact
          'contact.title': 'Contact',
          'contact.email': 'Email:',
          'contact.phone': 'Tel.:',
          'contact.location': 'Locatie:',
          'contact.location.value': 'Gent & Grimbergen',
          'contact.cv': 'Download CV (PDF)',
          
          // Footer
          'footer.backtotop': 'Terug naar boven',
        },
        en: {
          // Meta
          'meta.description': 'Portfolio of Emile Bergers — Interactive Media Development student: web, IoT, XR and interactive installations.',
          
          // Navigation
          'nav.about': 'About me',
          'nav.skills': 'Skills',
          'nav.live': 'Live',
          'nav.projects': 'Projects',
          'nav.cv': 'CV',
          'nav.contact': 'Contact',
          'nav.menu': 'Open menu',
          'nav.mainmenu': 'Main menu',
          
          // Hero
          'hero.prefix': 'I am a',
          'hero.description': 'I build surprising interactive experiences with web technology, IoT, XR and installations — from concept and research to final product.',
          'hero.cta.projects': 'View my projects',
          'hero.cta.contact': 'Get in touch',
          
          // Typewriter words
          'typewriter.words': [" Digital Maker", " Full-stack Developer", " Innovator", " Problem Solver", " Concept Creator", " Team Player", " Student"],
          
          // About
          'about.title': 'About me',
          'about.description': 'I am <strong>Emile Bergers</strong>, an <em>Interactive Media Development</em> student in Ghent. What drives me is the combination of creativity and technology with which I can translate ideas into projects that make an impact.',
          'about.bullet1': 'Creative problem solving & critical thinking',
          'about.bullet2': 'User Experience Design & teamwork',
          'about.bullet3': 'Web development & reflective working',
          'about.photo.alt': 'Photo of Emile Bergers',
          
          // Skills
          'skills.title': 'Skills',
          'skills.aria': 'Skills carousel',
          
          // Toggle Section
          'toggle.title': 'See the difference',
          'toggle.without': 'Without me',
          'toggle.with': 'With me',
          'toggle.aria': 'Toggle broken CSS',
  
          // Live
          'live.title': 'Live in Ghent',
          'live.time.label': 'Time',
          'live.weather.label': 'Weather',
          'live.weather.loading': 'Loading…',
          'live.music.label': 'Music',
          'live.music.loading': 'Loading…',
          'live.music.nowPlaying': 'Now playing',
          'live.music.recent': 'Recently played',
          
          // Projects
          'projects.title': 'Projects',
          'projects.note': 'Not all projects are clickable or included in this list, as some projects are unpublished or confidential.',
          'projects.viewmore': 'View more →',
          
          // Project 1: Sweet Control
          'project1.description': 'Interactive installation for De Warmste Week where users control a physical claw machine via their smartphone. A playful combination of web technology and IoT for a heartwarming cause.',
          'project1.tag1': 'IoT',
          'project1.tag2': 'Web',
          'project1.tag3': 'Installation',
          
          // Project 2: Atelier Atlas
          'project2.description': 'Startup project within the Unizo Step Up program that creates 3D-printed miniatures of cities and locations. A tangible translation of geographic data into detailed 3D models.',
          'project2.tag1': 'Startup',
          'project2.tag2': '3D Print',
          
          // Project 3: Gimber
          'project3.title': 'Gimber Marketing Campaign',
          'project3.description': 'Marketing plan for Gimber with strategic analysis and campaign proposals.',
          'project3.tag1': 'Marketing',
          'project3.tag2': 'Strategy',
          'project3.tag3': 'Research',
          'project3.video.aria': 'Gimber Marketing Plan – preview',
          'project3.video.error': 'Your browser does not support video playback.',
          
          // Project 4: Tembo
          'project4.title': 'Wintercircus — Tembo AR Experience',
          'project4.description': 'Web app where visitors can transform a physical coloring page into a digital interactive AR model. The colored elephant comes to life in augmented reality.',
          'project4.tag1': 'Web',
          'project4.tag2': 'AR',
          'project4.tag3': 'Creative Tech',
          'project4.alt': 'Tembo AR Experience — AR elephant coming to life',
          
          // Project 5: Bacardi
          'project5.title': 'Bacardi Cocktail Visualizer',
          'project5.description': 'Interactive web experience where users can browse a live cocktail database, mix drinks and see recipes come to life as dynamic 3D scenes in TouchDesigner via WebSocket connection.',
          'project5.tag1': 'Web',
          'project5.tag2': 'TouchDesigner',
          'project5.tag3': 'WebSocket',
          'project5.tag4': 'API',
          
          // Project 6: Hall of Painted Worlds
          'project6.description': 'Unreal Engine 5 museum experience where users can step into and experience different paintings. You are teleported into the world of the painting for an immersive experience. Awarded <strong>1st place IMX Expo</strong>.',
          'project6.tag1': 'Unreal Engine 5',
          'project6.tag2': 'Game/Experience',
          'project6.alt': 'The Hall of Painted Worlds — interactive UE5 museum experience',
          
          // Project 7: hARTbeat
          'project7.description': 'Interactive installation that converts biometric data (heart rate, body temperature, age, gender, ...) into AI-generated artworks.',
          'project7.tag1': 'Installation',
          'project7.tag2': 'AI',
          'project7.tag3': 'Data',
          'project7.alt': 'hARTbeat — biometric data to AI art',
          
          // Project 8: Muzikale Spiegel
          'project8.title': 'Musical Mirror',
          'project8.description': 'Smart mirror that generates live music based on facial expression.',
          'project8.tag1': 'IoT',
          'project8.tag2': 'Audio',
          'project8.tag3': 'Computer Vision',
          'project8.alt': 'Musical Mirror — smart mirror generates live music based on expression',
          
          // Project 9: 4TheWin
          'project9.description': 'Interactive AR game where two players play Connect Four via hand tracking.',
          'project9.tag1': 'AR',
          'project9.tag2': 'Handtracking',
          'project9.tag3': 'Multiplayer',
          'project9.alt': '4TheWin — AR Connect Four with handtracking',
          
          // Project 10: Placeholder
          'project10.title': 'Your project here?',
          'project10.description': 'Ready to work together?',
          'project10.tag1': 'Coming soon',
          
          // Contact
          'contact.title': 'Contact',
          'contact.email': 'Email:',
          'contact.phone': 'Phone:',
          'contact.location': 'Location:',
          'contact.location.value': 'Ghent & Grimbergen',
          'contact.cv': 'Download CV (PDF)',
          
          // Footer
          'footer.backtotop': 'Back to top',
        }
      };
  
      // Translation function
      function setLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.content = translations[lang]['meta.description'];
        }
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
          const key = element.getAttribute('data-i18n');
          const translation = translations[lang][key];
          
          if (translation) {
            if (element.hasAttribute('data-i18n-html')) {
              element.innerHTML = translation;
            } else {
              element.textContent = translation;
            }
          }
        });
        
        // Update aria-label attributes
        document.querySelectorAll('[data-i18n-aria]').forEach(function(element) {
          const key = element.getAttribute('data-i18n-aria');
          const translation = translations[lang][key];
          if (translation) {
            element.setAttribute('aria-label', translation);
          }
        });
        
        // Update alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(function(element) {
          const key = element.getAttribute('data-i18n-alt');
          const translation = translations[lang][key];
          if (translation) {
            element.setAttribute('alt', translation);
          }
        });
        
        // Update typewriter words
        if (window.updateTypewriterWords) {
          window.updateTypewriterWords(translations[lang]['typewriter.words']);
        }
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update current language global variable
        window.currentLanguage = lang;
  
        // Re-render live widgets (time formatting / weather label language)
        if (window.liveGent && typeof window.liveGent.render === 'function') {
          window.liveGent.render();
        }
      }
  
      // Initialize language on page load
      (function() {
        const savedLang = localStorage.getItem('preferredLanguage') || 'nl';
        window.currentLanguage = savedLang;
        
        // Set initial flag state
        const langToggle = document.getElementById('lang-toggle');
        if (savedLang === 'en' && langToggle) {
          langToggle.classList.add('swapped');
        }
        
        // Apply translations if not Dutch
        if (savedLang !== 'nl') {
          setLanguage(savedLang);
        }
      })();
  
      // Live: Time + Weather (Ghent)
      (function() {
        var TIME_ZONE = 'Europe/Brussels';
        var GHENT = { latitude: 51.0543, longitude: 3.7174 };
  
        function getLang() {
          return window.currentLanguage || 'nl';
        }
  
        function formatTime(date) {
          var lang = getLang() === 'en' ? 'en-GB' : 'nl-BE';
          return new Intl.DateTimeFormat(lang, {
            timeZone: TIME_ZONE,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }).format(date);
        }
  
        function formatDate(date) {
          var lang = getLang() === 'en' ? 'en-GB' : 'nl-BE';
          return new Intl.DateTimeFormat(lang, {
            timeZone: TIME_ZONE,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(date);
        }
  
        function weatherLabelFromCode(code) {
          var lang = getLang();
          var labels = {
            nl: {
              0: 'Helder',
              1: 'Overwegend helder',
              2: 'Halfbewolkt',
              3: 'Bewolkt',
              45: 'Mist',
              48: 'Rijpmist',
              51: 'Lichte motregen',
              53: 'Motregen',
              55: 'Dichte motregen',
              56: 'Lichte ijsmotregen',
              57: 'Dichte ijsmotregen',
              61: 'Lichte regen',
              63: 'Regen',
              65: 'Zware regen',
              66: 'Lichte ijsregen',
              67: 'Zware ijsregen',
              71: 'Lichte sneeuw',
              73: 'Sneeuw',
              75: 'Zware sneeuw',
              77: 'Sneeuwkorrels',
              80: 'Lichte buien',
              81: 'Buien',
              82: 'Zware buien',
              85: 'Lichte sneeuwbuien',
              86: 'Zware sneeuwbuien',
              95: 'Onweer',
              96: 'Onweer met hagel',
              99: 'Hevig onweer met hagel'
            },
            en: {
              0: 'Clear',
              1: 'Mostly clear',
              2: 'Partly cloudy',
              3: 'Overcast',
              45: 'Fog',
              48: 'Depositing rime fog',
              51: 'Light drizzle',
              53: 'Drizzle',
              55: 'Dense drizzle',
              56: 'Light freezing drizzle',
              57: 'Dense freezing drizzle',
              61: 'Light rain',
              63: 'Rain',
              65: 'Heavy rain',
              66: 'Light freezing rain',
              67: 'Heavy freezing rain',
              71: 'Light snow',
              73: 'Snow',
              75: 'Heavy snow',
              77: 'Snow grains',
              80: 'Light rain showers',
              81: 'Rain showers',
              82: 'Heavy rain showers',
              85: 'Light snow showers',
              86: 'Heavy snow showers',
              95: 'Thunderstorm',
              96: 'Thunderstorm with hail',
              99: 'Severe thunderstorm with hail'
            }
          };
  
          var table = labels[lang] || labels.nl;
          return table[code] || (lang === 'en' ? 'Unknown' : 'Onbekend');
        }
  
        var els = {
          time: document.getElementById('gent-time'),
          date: document.getElementById('gent-date'),
          temp: document.getElementById('gent-temp'),
          weather: document.getElementById('gent-weather')
        };
  
        if (!els.time || !els.date || !els.temp || !els.weather) return;
  
        var state = {
          temperature: null,
          weatherCode: null,
          wind: null
        };
  
        function renderTime() {
          var now = new Date();
          els.time.textContent = formatTime(now);
          els.date.textContent = formatDate(now);
        }
  
        function renderWeather() {
          var lang = getLang();
  
          if (state.temperature === null || state.weatherCode === null) {
            els.weather.textContent = translations[lang]['live.weather.loading'] || (lang === 'en' ? 'Loading…' : 'Laden…');
            return;
          }
  
          els.temp.textContent = String(Math.round(state.temperature));
          var label = weatherLabelFromCode(state.weatherCode);
          var windText = (typeof state.wind === 'number')
            ? (lang === 'en' ? (' · Wind ' + Math.round(state.wind) + ' km/h') : (' · Wind ' + Math.round(state.wind) + ' km/u'))
            : '';
          els.weather.textContent = label + windText;
        }
  
        async function fetchWeather() {
          try {
            var url =
              'https://api.open-meteo.com/v1/forecast'
              + '?latitude=' + encodeURIComponent(GHENT.latitude)
              + '&longitude=' + encodeURIComponent(GHENT.longitude)
              + '&current=' + encodeURIComponent('temperature_2m,weather_code,wind_speed_10m')
              + '&timezone=' + encodeURIComponent(TIME_ZONE);
  
            var res = await fetch(url, { headers: { 'Accept': 'application/json' } });
            if (!res.ok) throw new Error('Weather request failed: ' + res.status);
  
            var data = await res.json();
            if (!data || !data.current) throw new Error('Weather payload missing "current"');
  
            state.temperature = data.current.temperature_2m;
            state.weatherCode = data.current.weather_code;
            state.wind = data.current.wind_speed_10m;
            renderWeather();
          } catch (e) {
            var lang = getLang();
            els.weather.textContent = (lang === 'en') ? 'Weather unavailable' : 'Weer niet beschikbaar';
          }
        }
  
        window.liveGent = {
          render: function() {
            renderTime();
            renderWeather();
          }
        };
  
        // Initial render + intervals
        renderTime();
        renderWeather();
        fetchWeather();
  
        setInterval(renderTime, 1000);
        setInterval(fetchWeather, 10 * 60 * 1000);
      })();

      // Last.fm Recently Played
      (function() {
        var els = {
          artwork: document.getElementById('lastfm-artwork'),
          track: document.getElementById('lastfm-track'),
          artist: document.getElementById('lastfm-artist'),
          status: document.getElementById('lastfm-status')
        };

        if (!els.artwork || !els.track || !els.artist || !els.status) return;

        var state = {
          title: null,
          artist: null,
          url: null,
          image: null,
          nowPlaying: false
        };

        function getLang() {
          return window.currentLanguage || 'nl';
        }

        function renderMusic() {
          var lang = getLang();

          if (!state.title || !state.artist) {
            els.track.textContent = '—';
            els.artist.textContent = '—';
            els.status.textContent = translations[lang]['live.music.loading'] || (lang === 'en' ? 'Loading…' : 'Laden…');
            els.artwork.innerHTML = '';
            return;
          }

          els.track.textContent = state.title;
          els.artist.textContent = state.artist;

          if (state.nowPlaying) {
            els.status.textContent = translations[lang]['live.music.nowPlaying'] || (lang === 'en' ? 'Now playing' : 'Nu aan het spelen');
          } else {
            els.status.textContent = translations[lang]['live.music.recent'] || (lang === 'en' ? 'Recently played' : 'Recent gespeeld');
          }

          if (state.image) {
            els.artwork.innerHTML = '<img src="' + state.image + '" alt="" aria-hidden="true" />';
          } else {
            els.artwork.innerHTML = '';
          }
        }

        async function fetchLastFm() {
          try {
            var res = await fetch('/api/lastfm', { headers: { 'Accept': 'application/json' } });
            if (!res.ok) throw new Error('Last.fm request failed: ' + res.status);

            var data = await res.json();
            if (data.error) throw new Error(data.error);

            state.title = data.title;
            state.artist = data.artist;
            state.url = data.url;
            state.image = data.image;
            state.nowPlaying = data.nowPlaying === true;
            renderMusic();
          } catch (e) {
            var lang = getLang();
            els.track.textContent = '—';
            els.artist.textContent = '—';
            els.status.textContent = (lang === 'en') ? 'Music unavailable' : 'Muziek niet beschikbaar';
            els.artwork.innerHTML = '';
          }
        }

        // Initial fetch + interval (update every 2 minutes)
        fetchLastFm();
        setInterval(fetchLastFm, 2 * 60 * 1000);
      })();
  
      // Mouse tracking for spotlight effect
      document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        document.body.style.setProperty('--mouse-x', x + 'px');
        document.body.style.setProperty('--mouse-y', y + 'px');
      });
  
      // Scroll Reveal using Intersection Observer
      (function() {
        var reveals = document.querySelectorAll('.reveal');
        
        var revealObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Optional: Stop observing once revealed to only animate once
              observer.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          threshold: 0.15, // Trigger when 15% of element is visible
          rootMargin: "0px 0px -50px 0px" // Offset a bit so it doesn't trigger at very bottom edge
        });
  
        reveals.forEach(function(element) {
          revealObserver.observe(element);
        });
      })();
  
      // 3D Tilt Effect for Cards
      (function() {
        const cards = document.querySelectorAll('.project-card');
  
        cards.forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation (max 10 degrees)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; // Invert Y for correct tilt direction
            const rotateY = ((x - centerX) / centerX) * 5;
  
            // Update CSS variables for glare
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Apply transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          });
  
          card.addEventListener('mouseleave', () => {
            // Reset transform on leave
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            // Add transition for smooth reset
            card.style.transition = 'transform 0.5s ease';
          });
  
          card.addEventListener('mouseenter', () => {
            // Remove transition on enter to avoid lag
            card.style.transition = 'none';
          });
        });
      })();
  
      // Typewriter effect with cycling words
      (function() {
        let words = translations[window.currentLanguage || 'nl']['typewriter.words'];
        const element = document.getElementById('typewriter');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typewriterTimeout = null;
        
        // Store timeout ID and type function globally so it can be controlled
        window.typewriterTimeout = null;
        window.restartTypewriter = null;
        window.updateTypewriterWords = null;
        
        function type() {
          // Check if broken mode is enabled
          if (document.getElementById('broken-stylesheet')) {
            return; // Stop typing if broken mode is active
          }
  
          const currentWord = words[wordIndex];
          
          if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
          } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
          }
          
          let typeSpeed = isDeleting ? 50 : 100;
          
          // If word is complete
          if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of word
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            typeSpeed = 500; // Pause before typing next word
          }
          
          typewriterTimeout = setTimeout(type, typeSpeed);
          window.typewriterTimeout = typewriterTimeout;
        }
        
        // Function to update words when language changes
        window.updateTypewriterWords = function(newWords) {
          words = newWords;
          wordIndex = 0;
          charIndex = 0;
          isDeleting = false;
          if (window.typewriterTimeout) {
            clearTimeout(window.typewriterTimeout);
          }
          element.textContent = '';
          typewriterTimeout = setTimeout(type, 100);
          window.typewriterTimeout = typewriterTimeout;
        };
        
        // Function to restart typewriter
        window.restartTypewriter = function() {
          if (window.typewriterTimeout) {
            clearTimeout(window.typewriterTimeout);
          }
          typewriterTimeout = setTimeout(type, 100);
          window.typewriterTimeout = typewriterTimeout;
        };
        
        // Start typing after a short delay
        typewriterTimeout = setTimeout(type, 500);
        window.typewriterTimeout = typewriterTimeout;
      })();
  
      // huidig jaar tonen in footer
      document.getElementById('year').textContent = new Date().getFullYear();
  
      // mobiel nav menu toggle
      (function(){
        var navToggle = document.querySelector('.nav-toggle');
        var nav = document.getElementById('site-nav');
        if(!navToggle || !nav) return;
        function closeOnOutsideClick(event){
          if(!nav.contains(event.target) && !navToggle.contains(event.target)){
            nav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeOnOutsideClick);
          }
        }
        navToggle.addEventListener('click', function(){
          var isOpen = nav.classList.toggle('is-open');
          navToggle.setAttribute('aria-expanded', String(isOpen));
          if(isOpen){
            setTimeout(function(){ document.addEventListener('click', closeOnOutsideClick); }, 0);
          } else {
            document.removeEventListener('click', closeOnOutsideClick);
          }
        });
      })();
  
      // Scroll Progress Ring & Back to Top
      window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = scrollTop / docHeight; // 0 to 1
        
        // Update Progress Ring
        var circle = document.querySelector('.progress-ring__circle');
        var radius = circle.r.baseVal.value;
        var circumference = 2 * Math.PI * radius;
        
        var offset = circumference - (scrollPercent * circumference);
        circle.style.strokeDashoffset = offset;
  
        // Toggle Visibility
        var backToTop = document.getElementById('back-to-top');
        if (scrollTop > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });
  
      // Broken CSS Toggle
      (function() {
        var toggle = document.getElementById('broken-toggle');
        var brokenStylesheet = null;
        var revealObserver = null;
  
        function enableBrokenMode() {
          // Load broken.css
          if (!brokenStylesheet) {
            brokenStylesheet = document.createElement('link');
            brokenStylesheet.rel = 'stylesheet';
            brokenStylesheet.href = 'broken.css';
            brokenStylesheet.id = 'broken-stylesheet';
            document.head.appendChild(brokenStylesheet);
          }
  
          // Stop typewriter animation
          if (window.typewriterTimeout) {
            clearTimeout(window.typewriterTimeout);
            window.typewriterTimeout = null;
          }
  
          // Hide back to top button
          var backToTop = document.getElementById('back-to-top');
          if (backToTop) {
            backToTop.style.display = 'none';
          }
  
          // Disable card tilt effects by removing event listeners
          var cards = document.querySelectorAll('.project-card');
          cards.forEach(function(card) {
            card.style.transform = 'none';
            card.style.transition = 'none';
            card.style.pointerEvents = 'auto';
          });
  
          // Disable scroll reveal observer
          var reveals = document.querySelectorAll('.reveal');
          if (revealObserver) {
            reveals.forEach(function(element) {
              revealObserver.unobserve(element);
            });
          }
          // Make all reveals visible immediately
          reveals.forEach(function(element) {
            element.classList.add('active');
          });
  
          // Stop marquee animations
          var marqueeTracks = document.querySelectorAll('.marquee-track');
          marqueeTracks.forEach(function(track) {
            track.style.animation = 'none';
          });
        }
  
        function disableBrokenMode() {
          // Remove broken.css
          if (brokenStylesheet) {
            brokenStylesheet.remove();
            brokenStylesheet = null;
          }
  
          // Restore back to top button
          var backToTop = document.getElementById('back-to-top');
          if (backToTop) {
            backToTop.style.display = '';
          }
  
          // Restore card tilt effects (event listeners are still attached)
          var cards = document.querySelectorAll('.project-card');
          cards.forEach(function(card) {
            card.style.transform = '';
            card.style.transition = '';
            card.style.pointerEvents = '';
          });
          
          // Restore scroll reveal
          var reveals = document.querySelectorAll('.reveal');
          reveals.forEach(function(element) {
            element.classList.remove('active');
          });
          
          // Re-initialize reveal observer
          revealObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
              }
            });
          }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
          });
          reveals.forEach(function(element) {
            revealObserver.observe(element);
          });
  
          // Restore marquee animations
          var marqueeTracks = document.querySelectorAll('.marquee-track');
          marqueeTracks.forEach(function(track) {
            track.style.animation = '';
          });
  
          // Restart typewriter
          if (window.restartTypewriter) {
            window.restartTypewriter();
          }
        }
  
        if (toggle) {
          // Enable broken mode on page load if toggle is unchecked (zonder mij)
          if (!toggle.checked) {
            enableBrokenMode();
          }
          
          toggle.addEventListener('change', function() {
            if (this.checked) {
              // Toggle ON = "met mij" = normal CSS
              disableBrokenMode();
            } else {
              // Toggle OFF = "zonder mij" = broken CSS
              enableBrokenMode();
            }
          });
        }
      })();
  
      // Language Toggle
      (function() {
        var langToggle = document.getElementById('lang-toggle');
        if (!langToggle) return;
        
        langToggle.addEventListener('click', function() {
          this.classList.toggle('swapped');
          
          // Toggle between nl and en
          const newLang = window.currentLanguage === 'nl' ? 'en' : 'nl';
          setLanguage(newLang);
        });
      })();
  