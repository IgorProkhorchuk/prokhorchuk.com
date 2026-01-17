<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/logopfcweb.png" />
	<link rel="manifest" href="/manifest.json" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Space+Grotesk:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
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
