<script lang="ts">
  import { onMount } from "svelte";
  const titleFrames = [
    'p',
    'pr',
    'pro',
    'prok',
    'prokh',
    'prokho',
    'prokhor',
    'prokhorc',
    'prokhorch',
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

  const aboutLinks: Array<{ href: string; label: string }> = [
    {
      href: "/cyclist",
      label: "Cycling",
    },
    {
      href: "/jogger",
      label: "Running",
    },
    {
      href: "https://www.codewars.com/users/prokhor-chuck",
      label: "Codewars — puzzles for the brain",
    },
    { href: "/triz", label: "TRIZ — another way to approach a problem" },
  ];

  const titleTick = () => {
    document.title = titleFrames[titleIndex % titleFrames.length];
    titleIndex += 1;
  };

  let titleIndex = 0;

  onMount(() => {
    titleTick();
    const id = setInterval(titleTick, 500);
    return () => clearInterval(id);
  });
</script>

<svelte:head>
  <title>Igor Prokhorchuk — ERP, WMS, and backend engineering</title>
  <meta name="description" content="Backend engineer making ERP, WMS, and accounting software work together. Java, Kotlin, Quarkus, Kubernetes." />
  <meta property="og:title" content="Igor Prokhorchuk" />
  <meta property="og:description" content="Making business software work together." />
</svelte:head>

<div class="header">
  <h1 class="main-title">
    igor@prokhorchuk.com<span class="prompt">:~$</span>
    <span class="cursor">_</span>
  </h1>
</div>

<div class="section">
  <p><span class="prompt">$</span> whoami</p>
  <p>I make business software work together. Or at least I keep busy trying.</p>
</div>

<div class="section">
  <p><span class="prompt">$</span> cat about.txt</p>
  <p>Somewhere between ERP, WMS, and accounting software.</p>
  <p>Java, Kotlin, Quarkus, Kubernetes, and Linux. Big fan of open source, with the occasional contribution.</p>
  <!-- <ul>
    {#each aboutLinks as item}
      <li><a href={item.href}>{item.label}</a></li>
    {/each}
  </ul> -->
</div>

<div class="section">
  <p><span class="prompt">$</span> ls ~/projects</p>
  <p>things that started as “this should be a quick script” usually end up here:</p>
  <ul>
    <li>
      <span>GitLab</span>:
      <a href="https://gitlab.com/IgorProkhorchuk" class="linkContacts">
        gitlab.com/IgorProkhorchuk
      </a>
    </li>
    <!-- <li>
      <span>Github</span>:
      <a href="https://github.com/IgorProkhorchuk" class="linkContacts">github.com/IgorProkhorchuk</a>
    </li> -->
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> ./contact_me.sh</p>
  <ul>
    <li>
      <span>mailto</span>:
      <a href="mailto:igor@prokhorchuk.com" class="linkContacts"
        >igor@prokhorchuk.com</a
      >
    </li>
  </ul>
</div>

<div class="section">
  <p><span class="prompt">$</span> find /web -type "blog" -iname "code*" -exec print {'{}'} \;</p>
  <ul>
    <li>
      <span>bash: blog: </span>
      <a href="https://codebyme.de" class="linkContacts">codebyme.de</a>
    </li>
  </ul>

</div>

<!-- <div class="section">
 <p><span class="prompt">$</span> ls -al /etc/legal</p>
 <ul>
   <li>
     <a href="/impressum">Impressum</a>
   </li>
   <li>
     <a href="/datenschutz">Datenschutz</a>
   </li>
 </ul>
</div> -->

<div class="section">
  <p><span class="prompt">$</span> <span class="cursor">_</span></p>
</div>
