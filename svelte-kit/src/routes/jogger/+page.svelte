<script lang="ts">
  import albums from '#lib/gallery/generated.json';
  import Shell from '#lib/gallery/Shell.svelte';
  import Grid from '#lib/gallery/Grid.svelte';
  const album = albums.find((album) => album.id === 'jogger');
</script>

<Shell title="jogger">
  <p>A few moments along the way.</p>
  {#if album}<Grid items={album.items} title="Running" />{/if}
</Shell>
