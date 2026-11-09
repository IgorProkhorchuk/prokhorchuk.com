# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Use Node.js 24 LTS (`.nvmrc`) and install locked dependencies with `npm ci`.
SvelteKit 3 configuration lives in `vite.config.ts`; shared source imports use
the `#lib` mappings in `package.json`.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Gallery media

Run npm commands from `svelte-kit/`. Source photos and videos live in
`static/images/cyclist/<album>/` and `static/images/jogger/`. The repository-root
`images/` directory belongs to the legacy site and is not used by this app.

Install FFmpeg (`sudo apt-get install ffmpeg` on Ubuntu, `sudo dnf install ffmpeg`
on Fedora with the appropriate repository) before running the gallery pipeline.
Node dependencies, including Sharp, are installed with `npm ci`.

`npm run dev`, `npm run build`, and `npm run check` automatically run
`npm run gallery`. This generates cropped WebP thumbnails (480/800 px), full-frame
WebP images (up to 1920 px), and H.264 MP4 videos with poster images. Content hashes
in filenames cache conversions and prevent browsers from reusing outdated media.
Generated files in `static/gallery/` and `src/lib/gallery/generated.json` are ignored
by Git; keep the originals in version control. CI installs FFmpeg before building.

Add photos/videos to an existing source folder and restart the dev server to
refresh the gallery. To add a cycling album, register its folder and title in
`scripts/gallery.mjs`; its cover, item count, and prerendered route are generated
automatically. Keep the jogger entry for the single running gallery.

The album overview loads covers only. Grids load responsive thumbnails lazily;
full images and videos are mounted only while the viewer is open. The viewer
supports keyboard arrows, Escape, touch swipes, and native video controls.

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
