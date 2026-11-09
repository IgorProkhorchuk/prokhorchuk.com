<script lang="ts">
  import type { Media } from './types';
  let { items, title }: { items: Media[]; title: string } = $props();
  let dialog: HTMLDialogElement;
  let selected = $state(0);
  let opened = $state(false);
  let touchX = 0;
  let touchY = 0;
  const current = $derived(items[selected]);
  function open(index: number) {
    selected = index;
    opened = true;
    dialog.showModal();
  }
  function close() { dialog.close(); }
  function move(step: number) { selected = (selected + step + items.length) % items.length; }
  function keydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  }
  function swipe(event: TouchEvent) {
    const dx = event.changedTouches[0].clientX - touchX;
    const dy = event.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
  }
  $effect(() => {
    if (!opened) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  });
</script>

<div class="grid">
  {#each items as item, index}
    <button class="tile" onclick={() => open(index)} aria-label={`Open ${item.kind === 'video' ? 'video' : 'photo'}: ${item.alt}`}>
      <img src={item.thumbnail} srcset={item.srcset} sizes="(max-width: 600px) calc((100vw - 4rem) / 2), (max-width: 1000px) calc((100vw - 5rem) / 3), 302px" width="480" height="320" alt={item.alt} loading="lazy" decoding="async" />
      {#if item.kind === 'video'}<span class="play" aria-hidden="true">▶</span>{/if}
      <span class="number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
    </button>
  {/each}
</div>

<dialog bind:this={dialog} onclose={() => { opened = false; }} onkeydown={keydown} aria-label={`${title} viewer`}>
  <div class="viewer">
    <div class="toolbar">
      <span aria-live="polite">{title} · {selected + 1} / {items.length}</span>
      <button onclick={close} aria-label="Close viewer">Close ×</button>
    </div>
    <div class="stage" role="group" aria-label="Current photo or video"
      ontouchstart={(event) => { touchX = event.touches[0].clientX; touchY = event.touches[0].clientY; }} ontouchend={swipe}>
      {#if opened}
        {#key current.src}
          {#if current.kind === 'video'}
            <video controls playsinline preload="metadata" poster={current.poster} aria-label={current.alt}>
              <source src={current.src} type="video/mp4" />
              <a href={current.src}>Download video</a>
            </video>
          {:else}
            <img src={current.src} width={current.width} height={current.height} alt={current.alt} />
          {/if}
        {/key}
      {/if}
    </div>
    <div class="navigation">
      <button onclick={() => move(-1)} disabled={items.length < 2} aria-label="Previous item">← Previous</button>
      <span class="hint">← → / Esc</span>
      <button onclick={() => move(1)} disabled={items.length < 2} aria-label="Next item">Next →</button>
    </div>
  </div>
</dialog>

<style>
  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-top: 2rem; }
  button { font: inherit; color: inherit; cursor: pointer; }
  .tile { position: relative; padding: 0; border: 1px solid #30352c; background: #171a15; overflow: hidden; border-radius: 4px; aspect-ratio: 3 / 2; }
  .tile img { width: 100%; height: 100%; object-fit: cover; transition: transform .2s ease; }
  .tile:hover img { transform: scale(1.035); }
  .play { position: absolute; inset: 0; display: grid; place-content: center; font-size: 2rem; color: white; text-shadow: 0 2px 8px black; }
  .number { position: absolute; bottom: .4rem; left: .5rem; background: #000b; color: #eee; padding: 0 .35rem; font-size: .75rem; }
  dialog { border: 1px solid #394333; border-radius: 6px; background: #10120f; color: #eee; padding: 0; width: min(1100px, calc(100vw - 2rem)); max-width: none; max-height: calc(100dvh - 2rem); font-family: 'Fira Code', monospace; }
  dialog::backdrop { background: #000e; }
  .viewer { padding: 1rem; }
  .toolbar, .navigation { display: flex; align-items: center; justify-content: space-between; gap: .75rem; font-size: .8rem; }
  .toolbar span { overflow-wrap: anywhere; }
  .toolbar button, .navigation button { border: 1px solid #45533b; background: #191f15; border-radius: 3px; padding: .5rem .7rem; flex-shrink: 0; }
  button:focus-visible { outline: 2px solid #92cc70; outline-offset: 3px; }
  .stage { margin: 1rem 0; display: grid; place-items: center; min-height: 160px; }
  .stage img, .stage video { max-width: 100%; width: auto; height: auto; max-height: calc(100dvh - 13rem); object-fit: contain; }
  .hint { color: #9baf8e; }
  @media (max-width: 600px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hint { display: none; } .toolbar { font-size: .7rem; } }
  @media (prefers-reduced-motion: reduce) { .tile img { transition: none; } }
</style>
