// calculator/static/js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS & STATE ---
    const body = document.querySelector("body");
    const nightmode = document.getElementById("nightmode");
    const languagebutton = document.getElementById("language");
    const languagepopup = document.getElementById("language-popup");
    const pageLoadTime = new Date();
    const shownBubbles = new Set();

    // --- TRANSLATIONS & LANGUAGE DATA ---
    const local = {
        en: {
            top: "This is how much Elon Musk made...",
            bottom: "...since you started reading this page.",
            link: "See how this number was calculated",
            day: "day", days: "days", hour: "hour", hours: "hours",
            minute: "minute", minutes: "minutes", second: "second", seconds: "seconds",
            bubbles: {
                minWage: "One year of US minimum wage work.",
                starlink: "The cost of a Starlink terminal.",
                powerwall: "A Tesla Powerwall 2 battery.",
                model3: "Base price of a Tesla Model 3.",
                avgSalary: "Average yearly salary in the United States.",
                modelS: "Base price of a Tesla Model S.",
                cybertruck: "Base price of a Tesla Cybertruck (AWD).",
                devSalary: "Average salary of a Senior Software Developer.",
                spaceflight: "A seat on a Virgin Galactic flight to space.",
                medianHouse: "Median price of a house in the USA.",
                prezSalary: "The salary of the US President.",
                top1percent: "The annual income of the US top 1%.",
                oneMillion: "One million US dollars."
            }
        },
        es: {
            top: "Esto es lo que ganó Elon Musk...",
            bottom: "...desde que empezaste a leer esta página.",
            link: "Ver cómo se calculó este número",
            day: "día", days: "días", hour: "hora", hours: "horas",
            minute: "minuto", minutes: "minutos", second: "segundo", seconds: "segundos",
            bubbles: {
                minWage: "Un año de trabajo con salario mínimo en EE. UU.",
                starlink: "El costo de una terminal Starlink.",
                powerwall: "Una batería Tesla Powerwall 2.",
                model3: "Precio base de un Tesla Model 3.",
                avgSalary: "Salario anual promedio en los Estados Unidos.",
                modelS: "Precio base de un Tesla Model S.",
                cybertruck: "Precio base de un Tesla Cybertruck (AWD).",
                devSalary: "Salario promedio de un Desarrollador de Software Senior.",
                spaceflight: "Un asiento en un vuelo de Virgin Galactic al espacio.",
                medianHouse: "Precio medio de una casa en EE. UU.",
                prezSalary: "El salario del presidente de EE. UU.",
                top1percent: "El ingreso anual del 1% más rico de EE. UU.",
                oneMillion: "Un millón de dólares estadounidenses."
            }
        },
        ru: {
            top: "Вот сколько заработал Илон Маск...",
            bottom: "...с тех пор, как вы начали читать эту страницу.",
            link: "Посмотрите, как было рассчитано это число",
            day: "день", days: "дней", hour: "час", hours: "часов",
            minute: "минута", minutes: "минут", second: "секунда", seconds: "секунд",
            bubbles: {
                minWage: "Один год работы за минимальную зарплату в США.",
                starlink: "Стоимость терминала Starlink.",
                powerwall: "Батарея Tesla Powerwall 2.",
                model3: "Базовая цена Tesla Model 3.",
                avgSalary: "Средняя годовая зарплата в США.",
                modelS: "Базовая цена Tesla Model S.",
                cybertruck: "Базовая цена Tesla Cybertruck (AWD).",
                devSalary: "Средняя зарплата старшего разработчика программного обеспечения.",
                spaceflight: "Место на рейсе Virgin Galactic в космос.",
                medianHouse: "Средняя цена дома в США.",
                prezSalary: "Зарплата президента США.",
                top1percent: "Годовой доход 1% самых богатых людей США.",
                oneMillion: "Один миллион долларов США."
            }
        },
        hi: {
            top: "एलोन मस्क ने इतना कमाया...",
            bottom: "...जबसे आपने यह पेज पढ़ना शुरू किया है।",
            link: "देखें कि यह संख्या कैसे गणना की गई थी",
            day: "दिन", days: "दिन", hour: "घंटा", hours: "घंटे",
            minute: "मिनट", minutes: "मिनट", second: "सेकंड", seconds: "सेकंड",
            bubbles: {
                minWage: "अमेरिका में एक साल का न्यूनतम वेतन।",
                starlink: "एक स्टारलिंक टर्मिनल की लागत।",
                powerwall: "एक टेस्ला पावरवॉल 2 बैटरी।",
                model3: "टेस्ला मॉडल 3 की मूल कीमत।",
                avgSalary: "संयुक्त राज्य में औसत वार्षिक वेतन।",
                modelS: "टेस्ला मॉडल S की मूल कीमत।",
                cybertruck: "टेस्ला साइबरट्रक (AWD) की मूल कीमत।",
                devSalary: "एक वरिष्ठ सॉफ्टवेयर डेवलपर का औसत वेतन।",
                spaceflight: "वर्जिन गैलेक्टिक की अंतरिक्ष उड़ान पर एक सीट।",
                medianHouse: "संयुक्त राज्य अमेरिका में एक घर की औसत कीमत।",
                prezSalary: "अमेरिकी राष्ट्रपति का वेतन।",
                top1percent: "अमेरिका के शीर्ष 1% की वार्षिक आय।",
                oneMillion: "दस लाख अमेरिकी डॉलर।"
            }
        }
    };
    // This line now hard-codes English as the starting language
    let language = "en";

    // --- BUBBLE CONFIGURATION ---
    const earningRate = 1112; // Elon Musk's estimated earnings per second
    const bubbleData = [
        { cost: 600, msgKey: "starlink" },
        { cost: 13500, msgKey: "powerwall" },
        { cost: 15000, msgKey: "minWage" },
        { cost: 40000, msgKey: "model3" },
        { cost: 65000, msgKey: "avgSalary" },
        { cost: 80000, msgKey: "modelS" },
        { cost: 99000, msgKey: "cybertruck" },
        { cost: 120000, msgKey: "devSalary" },
        { cost: 250000, msgKey: "spaceflight" },
        { cost: 300000, msgKey: "medianHouse" },
        { cost: 400000, msgKey: "prezSalary" },
        { cost: 550000, msgKey: "top1percent" },
        { cost: 1000000, msgKey: "oneMillion" }
    ];

    // --- HELPER FUNCTIONS ---

    function applyLanguage(lang) {
        if (local[lang]) {
            document.documentElement.lang = lang;
            document.getElementById("top").textContent = local[lang].top;
            document.getElementById("bottom").textContent = local[lang].bottom;
            document.getElementById("link").textContent = local[lang].link;
            localStorage.setItem("language", lang);

            // --- Update existing bubbles ---
            document.querySelectorAll('.bubble').forEach(bubble => {
                const cost = bubble.dataset.cost;
                const msgKey = bubble.dataset.msgkey;

                if (cost && msgKey) {
                    const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
                    const timeToEarn = cost / earningRate;
                    const timeString = prettyPrintTime(timeToEarn);
                    const translatedMsg = local[lang].bubbles[msgKey] || msgKey;

                    bubble.innerHTML = `<b>In ${timeString}, he made ${currencyFormatter.format(cost)}</b>
                                       ${translatedMsg}`;
                }
            });
        }
    }

    function prettyPrintTime(sec_num) {
        const days = Math.floor(sec_num / 86400);
        const hours = Math.floor((sec_num % 86400) / 3600);
        const minutes = Math.floor((sec_num % 3600) / 60);
        const seconds = Math.round(sec_num % 60);

        let output = '';
        if (days > 0) output += ` ${days} ${days > 1 ? local[language].days : local[language].day}`;
        if (hours > 0) output += ` ${hours} ${hours > 1 ? local[language].hours : local[language].hour}`;
        if (minutes > 0) output += ` ${minutes} ${minutes > 1 ? local[language].minutes : local[language].minute}`;
        if (seconds > 0 || output === '') output += ` ${seconds} ${seconds > 1 ? local[language].seconds : local[language].second}`;
        
        return output.trim();
    }

    function createBubble(data) {
        if (shownBubbles.has(data.cost)) return;

        const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        const timeToEarn = data.cost / earningRate;
        const timeString = prettyPrintTime(timeToEarn);
        const translatedMsg = local[language].bubbles[data.msgKey] || data.msgKey;

        const numColors = 8;
        const duration = Math.random() * 15 + 20;
        
        const aside = document.createElement("aside");
        aside.style.left = `${Math.floor(Math.random() * 70) + 5}vw`;
        aside.className = `bubble color${Math.floor(Math.random() * numColors)}`;
        aside.style.animationDuration = `${duration}s`;
        
        aside.dataset.cost = data.cost;
        aside.dataset.msgkey = data.msgKey;
        
        aside.innerHTML = `<b>In ${timeString}, he made ${currencyFormatter.format(data.cost)}</b>
                           ${translatedMsg}`;
                           
        if(body) body.append(aside);
        shownBubbles.add(data.cost);

        setTimeout(() => {
            aside.remove();
        }, duration * 1000);
    }

    function checkAndCreateBubbles() {
        const elapsedMs = new Date() - pageLoadTime;
        const totalEarnings = (elapsedMs / 1000) * earningRate;

        bubbleData.forEach(bubble => {
            if (totalEarnings >= bubble.cost) {
                createBubble(bubble);
            }
        });
    }

    // --- EVENT LISTENERS (with checks to prevent errors) ---

    if(nightmode) {
        nightmode.addEventListener('click', () => {
            if(body) body.classList.toggle("light-mode");
            const isDarkMode = body ? !body.classList.contains("light-mode") : true;
            localStorage.setItem("darkmode", isDarkMode.toString());
        });
    }

    if(languagebutton) {
        languagebutton.addEventListener('click', () => {
            if(languagepopup) languagepopup.classList.toggle("active");
        });
    }

    if(languagepopup){
        document.querySelectorAll("#language-popup button").forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                language = lang;
                applyLanguage(lang);
                if(languagepopup) languagepopup.classList.remove("active");
            });
        });
    }
    
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            checkAndCreateBubbles();
        }
    });

    // --- INITIALIZATION ---
    applyLanguage(language);
    setInterval(checkAndCreateBubbles, 1000);
});