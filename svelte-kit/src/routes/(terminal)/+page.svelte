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

  type Project = { href: string; key: TranslationKey; tagline?: string };

  const aboutLinks: Array<{ href: string; key: TranslationKey }> = [
    {
      href: "/cyclist",
      key: "about-cyclist",
    },
    {
      href: "/jogger",
      key: "about-jogger",
    },
    { href: "/books", key: "about-books" },
    {
      href: "https://www.codewars.com/users/prokhor-chuck",
      key: "about-codewars",
    },
    { href: "/triz", key: "about-triz" },
    { href: "https://g.dev/ihorprokhorchuk", key: "about-gcp" },
  ];

  const projects: Project[] = [
    {
      href: "https://cut-by-me.de/",
      key: "project-booking",
      tagline: "#springBoot #postgreSQL #HTMX #Thymeleaf #Vaadin",
    },
    {
      href: "https://gitlab.com/IgorProkhorchuk/toptravel_ck_ua",
      key: "project-toptravel",
      tagline: "#svelteKit #prisma #postgreSQL #gitLabCI",
    },
    {
      href: "https://gitlab.com/IgorProkhorchuk/gym_crm",
      key: "project-gymcrm",
      tagline: "#Spring #postgres #redis #docker_compose #hibernate #spring_security",
    },
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
    content="Igor Prokhorchuk — DevOps and infrastructure engineer. Cycling, Java, and well-behaved deployments."
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
  <p>
    <span class="prompt">$</span> sudo find /home/igor/projects -type d -name "current"
    -exec ls -l &#123;&#125; \\;
  </p>
  <ul>
    {#each projects as project}
      <li>
        <a href={project.href}>{t(locale, project.key)}</a>
        {#if project.tagline}
          <span class="tag">{project.tagline}</span>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> cd ~/current\ job/</p>
  <ul>
    <li>{t(locale, "job-search")}</li>
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> ./contact_me.sh</p>
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
    <li>
      <span>{t(locale, "contact-gitlab-label")}</span>:
      <a href="https://gitlab.com/IgorProkhorchuk" class="linkContacts">gitlab.com/IgorProkhorchuk</a>
    </li>
    <li>
      <span>{t(locale, "contact-github-label")}</span>:
      <a href="https://github.com/IgorProkhorchuk" class="linkContacts">github.com/IgorProkhorchuk</a>
    </li>
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> ls -al /etc/legal</p>
  <ul>
    <li>
      <a href="/impressum">{t(locale, "link-impressum")}</a>
    </li>
    <li>
      <a href="/datenschutz">{t(locale, "link-datenschutz")}</a>
    </li>
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> <span class="cursor">_</span></p>
</div>
