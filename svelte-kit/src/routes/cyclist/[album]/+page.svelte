<script lang="ts">
  import Shell from '#lib/gallery/Shell.svelte';
  import Grid from '#lib/gallery/Grid.svelte';
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<Shell title={`cyclist/${data.album.title}`} back="/cyclist" backLabel="All cycling albums">
  <p>{data.album.items.length} moments from {data.album.title}. Open a photo to take a closer look.</p>
  <Grid items={data.album.items} title={data.album.title} />
</Shell>
