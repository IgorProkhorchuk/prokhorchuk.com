import { error } from '@sveltejs/kit';
import albums from '#lib/gallery/generated.json';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => albums
  .filter((album) => album.id !== 'jogger')
  .map((album) => ({ album: album.id }));

export const load: PageLoad = ({ params }) => {
  const album = albums.find((album) => album.id === params.album && album.id !== 'jogger');
  if (!album) error(404, 'Album not found');
  return { album };
};
