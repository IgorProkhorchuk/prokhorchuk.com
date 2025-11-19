document.addEventListener('DOMContentLoaded', function() {
    let characterIndex = 0;

    const titleNames = ["p", "pr", "pro", "prok", "prokh", "prokho", "prokhor", "prokhorc", "prokhorchu", "prokhorchuk", "prokhorchu", "prokhorch", "prokhorc", "prokhor", "prokho", "prokh", "prok", "pro", "pr", "p"];
    const translations = {
        en: {
            "seasonal-tree-greeting": "Happy New Year!",
            "holiday-message": "May your terminals glow green and your deployments stay flawless",
            "whoami-description": "Linux system administrator | Infrastructure engineer | Big Java fan",
            "about-summary": "14 years of experience in system administration and manufacturing logistics",
            "about-cyclist": "Dedicated cyclist",
            "about-jogger": "Occasional jogger",
            "about-books": "Book enthusiast",
            "about-codewars": "Codewars warrior",
            "about-triz": "TRIZ enthusiast",
            "about-gcp": "GCP aficionado",
            "project-booking": "Booking system for a hair salon in Berlin",
            "job-search": "bash: cd: looking for new challenges",
            "contact-email-label": "Email",
            "contact-blog-label": "Blog"
        },
        de: {
            "seasonal-tree-greeting": "Frohes neues Jahr!",
            "holiday-message": "Mögen deine Terminals grün leuchten und deine Deployments fehlerfrei bleiben",
            "whoami-description": "Linux-Systemadministrator | Infrastruktur-Ingenieur | Großer Java-Fan",
            "about-summary": "14 Jahre Erfahrung in Systemadministration und Fertigungslogistik",
            "about-cyclist": "Ein engagierter Radler",
            "about-jogger": "Gelegentlicher Jogger",
            "about-books": "Bücher-Narr",
            "about-codewars": "Codewars-Krieger",
            "about-triz": "TRIZ-Enthusiast",
            "about-gcp": "GCP Aficionado",
            "project-booking": "Buchungssystem für einen Friseursalon in Berlin",
            "job-search": "bash: cd: auf der Suche nach neuen Herausforderungen",
            "contact-email-label": "E-Mail",
            "contact-blog-label": "Blog"
        },
        uk: {
            "seasonal-tree-greeting": "З Новим роком!",
            "holiday-message": "Нехай ваші термінали сяють зеленим, а жоден деплой не падає",
            "whoami-description": "Linux-системний адміністратор | Інженер з інфраструктури | Великий прихильник Java",
            "about-summary": "14 років досвіду y виробничій логістиці та системному адмініструванні",
            "about-cyclist": "Завзятий велосипедист",
            "about-jogger": "Іноді також бігун",
            "about-books": "Фан паперових книг",
            "about-codewars": "Падаван на Codewars",
            "about-triz": "Прихильник ТРИЗ",
            "about-gcp": "Прихильник GCP",
            "project-booking": "Система бронювання для перукарні в Берліні",
            "job-search": "bash: cd: у пошуках нових викликів",
            "contact-email-label": "Ел. пошта",
            "contact-blog-label": "Блог"
        }
    };

    window.updateTitleName = function () {
        document.title = titleNames[characterIndex % titleNames.length];
        characterIndex++;
    }

    function resolveLocale() {
        const candidates = [];
        if (navigator.languages && navigator.languages.length) {
            candidates.push(...navigator.languages);
        }
        candidates.push(navigator.language, navigator.userLanguage);
        for (const locale of candidates) {
            if (!locale) continue;
            const normalized = locale.toLowerCase().split('-')[0];
            if (translations[normalized]) {
                return normalized;
            }
        }
        return 'en';
    }

    function applyTranslations(locale) {
        const fallback = translations.en;
        const dictionary = translations[locale] || fallback;
        document.querySelectorAll('[data-i18n]').forEach((node) => {
            const key = node.dataset.i18n;
            if (!key) return;
            const value = dictionary[key] ?? fallback[key];
            if (value) {
                node.textContent = value;
            }
        });
    }

    setInterval(() => {
        window.updateTitleName();
    }, 500);

    applyTranslations(resolveLocale());

});
