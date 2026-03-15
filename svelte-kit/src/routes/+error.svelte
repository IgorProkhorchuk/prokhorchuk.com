<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="terminal-shell">
	<h1 class="main-title">
		<span class="prompt">$&gt;</span> 404: Page Not Found
	</h1>
	<p>The page is under modification.</p>
	<p>Come back in one month to see it.</p>
	<p>
		<a href="/">Go back to the main page</a>
	</p>
</div>

<style>
	:global(:root) {
		--bg: #0a0a0a;
		--text: #e0e0e0;
		--accent: #4e9a06;
		--secondary: #3465a4;
		--font-mono: 'Fira Code', 'Courier New', monospace;
	}

	:global(body) {
		background-color: var(--bg);
		color: var(--text);
		font-family: var(--font-mono);
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	.terminal-shell {
		max-width: 800px;
		margin: 0 auto;
		padding: 1.5rem;
		line-height: 1.6;
	}

	.main-title {
		font-size: clamp(1.5rem, 5vw, 2rem);
		word-break: break-all;
	}

	.prompt {
		color: var(--accent);
	}
</style>
