<script lang="ts">
  import type { Snippet } from 'svelte';
  let { title, back = '/', backLabel = 'Home', children }: {
    title: string; back?: string; backLabel?: string; children: Snippet;
  } = $props();
</script>

<svelte:head><title>{title} · Igor Prokhorchuk</title></svelte:head>
<div class="surface">
  <main>
    <a class="back" href={back}>← {backLabel}</a>
    <h1><span class="prompt">~/</span>{title}<span class="prompt"> $</span><span class="cursor" aria-hidden="true"> _</span></h1>
    {@render children()}
  </main>
</div>

<style>
  .surface { min-height: 100vh; background: #0a0a0a; color: #e0e0e0; font-family: 'Fira Code', monospace; }
  main { max-width: 1000px; margin: auto; padding: 2rem 1.5rem 4rem; line-height: 1.6; }
  .back { color: #9cbd83; font-size: .875rem; }
  h1 { font-size: clamp(1.4rem, 4vw, 2rem); overflow-wrap: anywhere; margin: 1.5rem 0; }
  .prompt { color: #75b94d; }
  .cursor { animation: blink 1s step-end infinite; }
  @keyframes blink { 50% { opacity: 0; } }
  @media (prefers-reduced-motion: reduce) { .cursor { animation: none; } }
  :global(.surface a:focus-visible), :global(.surface button:focus-visible) { outline: 2px solid #92cc70; outline-offset: 5px; }
</style>
