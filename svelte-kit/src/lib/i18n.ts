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

		'whoami-description': "Hi, I’m Igor. I work with servers, write code and occasionally convince the two to cooperate. This little corner of the internet is mine. Welcome.",
		'about-summary': 'Away from the keyboard, I swap CPU cycles for bicycle ones. Running is supported too, just at a lower clock speed.',
		'about-cyclist': 'Cycling',
		'about-jogger': 'Running',
		'about-codewars': 'Codewars — puzzles for the brain',
		'about-triz': 'TRIZ — another way to approach a problem',
		'projects-summary': 'Side projects, experiments and things that started with “this should be a quick script”. The code lives here:',
		'contact-summary': 'Email works. No ticket required. Longer thoughts go on the blog.',
		'contact-email-label': 'Email',
		'contact-blog-label': 'Blog',
		'link-impressum': 'Impressum',
		'link-datenschutz': 'Datenschutz'
	},
	de: {

		'whoami-description': 'Hallo, ich bin Igor. Ich kümmere mich um Server, schreibe Code und überrede die beiden gelegentlich zur Zusammenarbeit. Dieses kleine Stück Internet gehört mir. Willkommen.',
		'about-summary': 'Abseits der Tastatur tausche ich CPU-Takte gegen Pedaltritte. Laufen wird auch unterstützt, allerdings mit niedrigerer Taktfrequenz.',
		'about-cyclist': 'Radfahren',
		'about-jogger': 'Laufen',
		'about-codewars': 'Codewars — Rätsel für den Kopf',
		'about-triz': 'TRIZ — Probleme mal anders angehen',
		'projects-summary': 'Nebenprojekte, Experimente und Dinge, die mit „Das ist doch nur ein kleines Skript“ anfingen. Der Code liegt hier:',
		'contact-summary': 'Eine E-Mail reicht. Kein Ticket nötig. Längere Gedanken stehen im Blog.',
		'contact-email-label': 'E-Mail',
		'contact-blog-label': 'Blog',
		'link-impressum': 'Impressum',
		'link-datenschutz': 'Datenschutz'
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
