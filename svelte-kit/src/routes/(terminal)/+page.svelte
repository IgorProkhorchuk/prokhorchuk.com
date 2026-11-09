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
  <title>{titleFrames[0]}</title>
  <meta
    name="description"
    content="Igor Prokhorchuk"
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
  <p>Hi, I’m Igor. I make business software work together.
      Or at least keep myself busy making business software. ;-)</p>
</div>

<div class="section">
  <p><span class="prompt">$</span> cat about.txt</p>
  <p>Somewhere between software development and finance,
      I found ERP, WMS, and accounting software.
      Turns out I don’t have to choose.</p>
  <p>Java, Kotlin, and a big fun of Quarkus.
    Occasional contributions to open source.</p>
  <!-- <ul>
    {#each aboutLinks as item}
      <li><a href={item.href}>{item.label}</a></li>
    {/each}
  </ul> -->
</div>

<div class="section">
  <p><span class="prompt">$</span> ls ~/projects</p>
  <p>Some experiments and things that started with “this should be a quick script” usually live here:</p>
  <ul>
    <li>
      <span>GitLab</span>:
      <a href="https://gitlab.com/IgorProkhorchuk" class="linkContacts">
        gitlab.com/IgorProkhorchuk
      </a>
    </li>
    <li>
      <span>Github</span>:
      <a href="https://github.com/IgorProkhorchuk" class="linkContacts">github.com/IgorProkhorchuk</a>
    </li>
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
