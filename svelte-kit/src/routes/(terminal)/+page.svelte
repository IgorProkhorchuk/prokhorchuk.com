<script lang="ts">
  import { onMount } from "svelte";
  import {
    detectLocale,
    fallbackTitle,
    t,
    titleFrames,
    type Locale,
    type TranslationKey,
  } from "$lib/i18n";

  const aboutLinks: Array<{ href: string; key: TranslationKey }> = [
    {
      href: "/cyclist",
      key: "about-cyclist",
    },
    {
      href: "/jogger",
      key: "about-jogger",
    },
    {
      href: "https://www.codewars.com/users/prokhor-chuck",
      key: "about-codewars",
    },
    { href: "/triz", key: "about-triz" },
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
    content="Igor Prokhorchuk — servers, code and life beyond the terminal. A few links and a way to get in touch."
  />
</svelte:head>

<div class="header">
  <h1 class="main-title">
    igor@prokhorchuk.com<span class="prompt">:~$</span>
    <span class="cursor">_</span>
  </h1>
</div>

<div class="section">
  <p><span class="prompt">$</span> whoami</p>
  <p>{t(locale, "whoami-description")}</p>
</div>

<div class="section">
  <p><span class="prompt">$</span> cat about.txt</p>
  <p>{t(locale, "about-summary")}</p>
  <ul>
    {#each aboutLinks as item}
      <li><a href={item.href}>{t(locale, item.key)}</a></li>
    {/each}
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> ls ~/projects</p>
  <p>{t(locale, "projects-summary")}</p>
  <ul>
    <li><a href="https://gitlab.com/IgorProkhorchuk" class="linkContacts">GitLab</a></li>
    <li><a href="https://github.com/IgorProkhorchuk" class="linkContacts">GitHub</a></li>
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> ./contact_me.sh</p>
  <p>{t(locale, "contact-summary")}</p>
  <ul>
    <li>
      <span>{t(locale, "contact-email-label")}</span>:
      <a href="mailto:igor@prokhorchuk.com" class="linkContacts"
        >igor@prokhorchuk.com</a
      >
    </li>
    <li>
      <span>{t(locale, "contact-blog-label")}</span>:
      <a href="https://codebyme.de" class="linkContacts">codebyme.de</a>
    </li>
  </ul>
</div>

<!--<div class="section">-->
<!--  <p><span class="prompt">$</span> ls -al /etc/legal</p>-->
<!--  <ul>-->
<!--    <li>-->
<!--      <a href="/impressum">{t(locale, "link-impressum")}</a>-->
<!--    </li>-->
<!--    <li>-->
<!--      <a href="/datenschutz">{t(locale, "link-datenschutz")}</a>-->
<!--    </li>-->
<!--  </ul>-->
<!--</div>-->

<div class="section">
  <p><span class="prompt">$</span> <span class="cursor">_</span></p>
</div>
