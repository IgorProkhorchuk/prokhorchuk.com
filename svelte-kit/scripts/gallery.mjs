import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, renameSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'static/gallery');
await mkdir(output, { recursive: true });
const definitions = [
  ['cherkasy', 'Cherkasy', 2], ['slovakia', 'Slovakia'],
  ['kamyanets', 'Kamyanets'], ['chervona_sloboda', 'Chervona Sloboda'],
  ['jogger', 'Running']
];
function runFFmpeg(args, target) {
  const temporary = `${target}.tmp${path.extname(target)}`;
  execFileSync('ffmpeg', ['-v', 'error', '-y', ...args, temporary]);
  renameSync(temporary, target);
}
const albums = [];
for (const [id, title, coverIndex = 0] of definitions) {
  const directory = path.join(root, 'static/images', id === 'jogger' ? 'jogger' : `cyclist/${id}`);
  const items = [];
  for (const name of (await readdir(directory)).sort()) {
    if (!/\.(jpe?g|png|webp|avif|mp4|mov)$/i.test(name)) continue;
    const input = path.join(directory, name);
    // Bump the recipe version when changing encoder settings.
    const hash = createHash('sha256').update('gallery-v1').update(await readFile(input)).digest('hex').slice(0, 16);
    const isVideo = /\.(mp4|mov)$/i.test(name);
    const stem = `${id}-${hash}`;
    let source = input;
    if (isVideo) {
      const video = path.join(output, `${stem}.mp4`);
      if (!existsSync(video)) runFFmpeg(['-i', input,
        '-vf', "scale=w='min(1280,iw)':h=-2", '-c:v', 'libx264', '-crf', '25',
        '-preset', 'medium', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-movflags', '+faststart'], video);
      source = path.join(output, `${stem}-poster.jpg`);
      if (!existsSync(source)) runFFmpeg(['-i', video, '-frames:v', '1'], source);
    }
    for (const width of [480, 800]) {
      const target = path.join(output, `${stem}-${width}.webp`);
      if (!existsSync(target)) await sharp(source).rotate().resize(width, Math.round(width * 2 / 3), { fit: 'cover' }).webp({ quality: 76 }).toFile(target);
    }
    const full = path.join(output, `${stem}-full.webp`);
    if (!existsSync(full)) await sharp(source).rotate().resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(full);
    const { width, height } = await sharp(full).metadata();
    items.push({
      kind: isVideo ? 'video' : 'image',
      alt: `${title} · ${items.length + 1}`,
      thumbnail: `/gallery/${stem}-480.webp`,
      srcset: `/gallery/${stem}-480.webp 480w, /gallery/${stem}-800.webp 800w`,
      src: `/gallery/${stem}${isVideo ? '.mp4' : '-full.webp'}`,
      poster: `/gallery/${stem}-full.webp`, width, height
    });
  }
  if (items.length) albums.push({ id, title, cover: items[coverIndex] ?? items[0], items });
}
await mkdir(path.join(root, 'src/lib/gallery'), { recursive: true });
await writeFile(path.join(root, 'src/lib/gallery/generated.json'), JSON.stringify(albums, null, 2) + '\n');
console.log(`Gallery: ${albums.length} albums, ${albums.reduce((n, album) => n + album.items.length, 0)} items.`);
