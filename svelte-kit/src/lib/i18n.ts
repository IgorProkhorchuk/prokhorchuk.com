import { browser } from '$app/environment';

const fallbackLocale = 'en' as const;

export const titleFrames = [
	'p',
	'pr',
	'pro',
	'prok',
	'prokh',
	'prokho',
	'prokhor',
	'prokhorc',
	'prokhorchu',
	'prokhorchuk',
	'prokhorchu',
	'prokhorch',
	'prokhorc',
	'prokhor',
	'prokho',
	'prokh',
	'prok',
	'pro',
	'pr',
	'p'
] as const;

export const translations = {
	en: {

		'whoami-description': 'Linux system administrator | Infrastructure engineer | Big Java fan',
		'about-summary': '14 years of experience in system administration and manufacturing logistics',
		'about-cyclist': 'Dedicated cyclist',
		'about-jogger': 'Occasional jogger',
		'about-books': 'Book enthusiast',
		'about-codewars': 'Codewars warrior',
		'about-triz': 'TRIZ enthusiast',
		'about-gcp': 'GCP aficionado',
		'project-booking': 'Booking system for a hair salon in Berlin',
		'job-search': 'bash: cd: looking for new challenges',
		'contact-email-label': 'Email',
		'contact-blog-label': 'Blog'
	},
	de: {

		'whoami-description': 'Linux-Systemadministrator | Infrastruktur-Ingenieur | Großer Java-Fan',
		'about-summary': '14 Jahre Erfahrung in Systemadministration und Fertigungslogistik',
		'about-cyclist': 'Ein engagierter Radler',
		'about-jogger': 'Gelegentlicher Jogger',
		'about-books': 'Bücher-Narr',
		'about-codewars': 'Codewars-Krieger',
		'about-triz': 'TRIZ-Enthusiast',
		'about-gcp': 'GCP Aficionado',
		'project-booking': 'Buchungssystem für einen Friseursalon in Berlin',
		'job-search': 'bash: cd: auf der Suche nach neuen Herausforderungen',
		'contact-email-label': 'E-Mail',
		'contact-blog-label': 'Blog'
	}
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)[typeof fallbackLocale];

export const detectLocale = (): Locale => {
	if (!browser) return fallbackLocale;

	const candidates: Array<string | undefined> = [];
	if (navigator.languages?.length) {
		candidates.push(...navigator.languages);
	}

	candidates.push(navigator.language, (navigator as { userLanguage?: string }).userLanguage);

	for (const locale of candidates) {
		if (!locale) continue;
		const normalized = locale.toLowerCase().split('-')[0];
		if (normalized in translations) {
			return normalized as Locale;
		}
	}

	return fallbackLocale;
};

export const t = (locale: Locale, key: TranslationKey): string => {
	const dictionary = translations[locale] ?? translations[fallbackLocale];
	return dictionary[key] ?? translations[fallbackLocale][key];
};

export const fallbackTitle = titleFrames[0];
