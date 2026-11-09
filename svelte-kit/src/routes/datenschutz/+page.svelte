<script lang="ts">
  import { detectLocale, fallbackTitle, type Locale } from "#lib/i18n.js";
  import { onMount } from "svelte";

  let locale: Locale = detectLocale();

  onMount(() => {
    locale = detectLocale();
  });
</script>

<svelte:head>
  <title>Datenschutz | {fallbackTitle}</title>
</svelte:head>

<div class="header">
  <h1 class="main-title">
    datenschutz<span class="prompt">:~$</span>
    <span class="cursor">_</span>
  </h1>
</div>

<div class="section">
  <p><span class="prompt">$</span> cat datenschutz.txt</p>

  <h2>1. Datenschutz auf einen Blick</h2>
  <h3>Allgemeine Hinweise</h3>
  <p>
    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
    Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
    identifiziert werden können.
  </p>

  <h2>2. Hosting</h2>
  <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
  <h3>Externes Hosting</h3>
  <p>
    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
    dieser Website erfasst werden, werden auf den Servern des Hosters / der
    Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
    Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
    Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
    werden, handeln.
  </p>
  <p>
    Unser Hoster ist: [Назва вашого хостингу, напр., GitHub Pages, Netlify, або
    Vercel / Name Ihres Hosters]
  </p>

  <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
  <h3>Datenschutz</h3>
  <p>
    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr
    ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
    entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
    Datenschutzerklärung.
  </p>
  <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
  <p>
    Ihor Prokhorchuk<br />
    Cottbusser Str 82<br />
    12627 Berlin<br />
    E-Mail: <a href="mailto:igor@prokhorchuk.com">igor@prokhorchuk.com</a>
  </p>

  <h2>4. Datenerfassung auf dieser Website</h2>
  <h3>Anfrage per E-Mail</h3>
  <p>
    Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller
    daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
    Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
    geben wir nicht ohne Ihre Einwilligung weiter.
  </p>

  <h3>Lokale Schriften (Google Fonts)</h3>
  <p>
    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte
    Web Fonts. Diese werden lokal gehostet. Eine Verbindung zu Servern von
    Google findet dabei nicht statt.
  </p>

  <br />
  <p><a href="/">cd .. <span class="prompt">(back to home)</span></a></p>
</div>
