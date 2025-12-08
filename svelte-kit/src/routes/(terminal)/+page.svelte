<script lang="ts">
	import { onMount } from 'svelte';
	import { detectLocale, fallbackTitle, t, titleFrames, type Locale, type TranslationKey } from '$lib/i18n';

	type Project = { href: string; key: TranslationKey; tagline: string };

	const aboutLinks: Array<{ href: string; key: TranslationKey }> = [
		{ href: 'https://www.facebook.com/igorprokhorchuk/posts/pfbid02Vw6cArDj4a1E6KdUUz7R8pYuryvLnR3DD5hq5rgHsrBygfnmx5WxCtCg3N5vViNl', key: 'about-cyclist' },
		{ href: 'https://www.facebook.com/photo/?fbid=1817874761594421&set=a.740446196003955', key: 'about-jogger' },
		{ href: 'https://codebyme.de/books', key: 'about-books' },
		{ href: 'https://www.codewars.com/users/prokhor-chuck', key: 'about-codewars' },
		{ href: '/triz', key: 'about-triz' },
		{ href: 'https://g.dev/ihorprokhorchuk', key: 'about-gcp' }
	];

	const projects: Project[] = [
		{
			href: 'https://cut-by-me.de/',
			key: 'project-booking',
			tagline: '#springBoot #postgreSQL #HTMX #Thymeleaf #Vaadin'
		}
	];

	const titleTick = () => {
		document.title = titleFrames[titleIndex % titleFrames.length];
		titleIndex += 1;
	};

	let locale: Locale = detectLocale();
	let titleIndex = 0;

	onMount(() => {
		locale = detectLocale();
		titleTick();
		const id = setInterval(titleTick, 500);
		return () => clearInterval(id);
	});
</script>

<svelte:head>
	<title>{fallbackTitle}</title>
	<meta
		name="description"
		content="Igor Prokhorchuk — Linux system administrator and infrastructure engineer. Cycling, Java, and well-behaved deployments."
	/>
</svelte:head>

<div class="header">
	<h1 class="main-title">
		igor@prokhorchuk.com<span class="prompt">:~$</span> <span class="cursor">_</span>
	</h1>
</div>

<div class="section">
	<p><span class="prompt">$</span> cat ~/seasonal/new_year_tree.txt</p>
	<pre class="ascii-tree">
	     *
	    /_\\
	   /_/_\\
	  /_/_/_\\
	 /_/_/_/_\\
	./././././.
	    |||
	<span class="tree-greeting">{t(locale, 'seasonal-tree-greeting')}</span>
	</pre>
	<p class="holiday-message">{t(locale, 'holiday-message')}</p>
	<p><span class="prompt">$</span> whoami</p>
	<p>{t(locale, 'whoami-description')}</p>
</div>

<div class="section">
	<p><span class="prompt">$</span> cat about.txt</p>
	<p>{t(locale, 'about-summary')}</p>
	<ul>
		{#each aboutLinks as item}
			<li><a href={item.href}>{t(locale, item.key)}</a></li>
		{/each}
	</ul>
</div>

<div class="section">
	<p>
		<span class="prompt">$</span> sudo find /home/igor/projects -type d -name "current" -exec ls -l &#123;&#125; \\;
	</p>
	<ul>
		{#each projects as project}
			<li>
				<a href={project.href}>{t(locale, project.key)}</a>
				<span class="tag">{project.tagline}</span>
			</li>
		{/each}
	</ul>
</div>

<div class="section">
	<p><span class="prompt">$</span> cd ~/current\ job/</p>
	<ul>
		<li>{t(locale, 'job-search')}</li>
	</ul>
</div>

<div class="section">
	<p><span class="prompt">$</span> ./contact_me.sh</p>
	<ul>
		<li>
			<span>{t(locale, 'contact-email-label')}</span>:
			<a href="mailto:igor@prokhorchuk.com" class="linkContacts">igor@prokhorchuk.com</a>
		</li>
		<li>
			<span>{t(locale, 'contact-blog-label')}</span>:
			<a href="https://codebyme.de" class="linkContacts">codebyme.de</a>
		</li>
	</ul>
</div>

<div class="section">
	<p><span class="prompt">$</span> <span class="cursor">_</span></p>
</div>
