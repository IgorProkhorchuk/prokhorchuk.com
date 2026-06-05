<script lang="ts">
  import { detectLocale, fallbackTitle, type Locale } from "$lib/i18n";
  import { onMount } from "svelte";

  let locale: Locale = detectLocale();

  onMount(() => {
    locale = detectLocale();
  });
</script>

<svelte:head>
  <title>Impressum | {fallbackTitle}</title>
</svelte:head>

<div class="header">
  <h1 class="main-title">
    impressum<span class="prompt">:~$</span>
    <span class="cursor">_</span>
  </h1>
</div>

<div class="section">
  <p><span class="prompt">$</span> cat impressum.txt</p>
  <h2>Angaben gemäß § 5 TMG</h2>
  <p>
    Ihor Prokhorchuk<br />
    Cottbusser Str 82<br />
    12627 Berlin<br />
  </p>

  <h2>Kontakt</h2>
  <p>
    E-Mail: <a href="mailto:igor@prokhorchuk.com">igor@prokhorchuk.com</a>
  </p>

  <br />
  <p><a href="/">cd .. <span class="prompt">(back to home)</span></a></p>
</div>
