<script lang="ts">
	import "@fontsource/fira-code/400.css";
	import "@fontsource/fira-code/500.css";
	import "@fontsource/space-grotesk/400.css";
	import "@fontsource/space-grotesk/500.css";
	import "@fontsource/space-grotesk/600.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/logopfcweb.png" />
	<link rel="manifest" href="/manifest.json" />
	<meta name="theme-color" content="#0a0a0a" />
</svelte:head>

{@render children()}

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		min-height: 100vh;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
		display: block;
	}
</style>
