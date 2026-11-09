<script lang="ts">
  import albums from '#lib/gallery/generated.json';
  import Shell from '#lib/gallery/Shell.svelte';
  const trips = albums.filter((album) => album.id !== 'jogger');
</script>

<Shell title="cyclist">
  <p class="intro">A few rides, a few detours.</p>
  <div class="albums">
    {#each trips as album, index}
      <a class="album" href={`/cyclist/${album.id}`}>
        <div class="cover">
          <img src={album.cover.thumbnail} srcset={album.cover.srcset} sizes="(max-width: 600px) calc(100vw - 3rem), (max-width: 1000px) calc((100vw - 4rem) / 2), 468px" width="480" height="320" alt={album.title} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
          {#if album.cover.kind === 'video'}<span class="play" aria-hidden="true">▶</span>{/if}
        </div>
        <div class="caption"><h2>{album.title}<span aria-hidden="true"> ↗</span></h2>
          <p>
            {#if album.items.some((item) => item.kind === 'image')}{album.items.filter((item) => item.kind === 'image').length} photos{/if}
            {#if album.items.some((item) => item.kind === 'image') && album.items.some((item) => item.kind === 'video')} · {/if}
            {#if album.items.some((item) => item.kind === 'video')}{album.items.filter((item) => item.kind === 'video').length} videos{/if}
          </p>
        </div>
      </a>
    {/each}
  </div>
</Shell>

<style>
  .intro { color: #b0b8aa; }
  .albums { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; margin-top: 2rem; }
  .album { border: 1px solid #30382b; border-radius: 5px; overflow: hidden; background: #12150f; }
  .album:hover { border-color: #7ba85b; }
  .cover { position: relative; aspect-ratio: 3 / 2; }
  .cover img { width: 100%; height: 100%; object-fit: cover; }
  .play { position: absolute; inset: 0; display: grid; place-items: center; font-size: 2rem; text-shadow: 0 2px 8px black; }
  .caption { padding: 1rem; }
  h2 { margin: 0; font-size: 1rem; }
  h2 span { color: #92cc70; }
  .caption p { margin: .4rem 0 0; font-size: .8rem; color: #a8b59e; }
  @media (max-width: 600px) { .albums { grid-template-columns: 1fr; } }
</style>
