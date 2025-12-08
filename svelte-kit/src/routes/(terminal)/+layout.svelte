<script lang="ts">
	let { children } = $props();
</script>

<div class="terminal-shell">
	{@render children()}
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

	:global(.header) {
		margin-bottom: 3rem;
	}

	:global(.main-title) {
		font-size: clamp(1.5rem, 5vw, 2rem);
		word-break: break-all;
	}

	:global(.section) {
		margin-bottom: 2rem;
	}

	:global(.prompt) {
		color: var(--accent);
	}

	:global(.cursor) {
		animation: blink 1s infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	:global(.ascii-tree) {
		color: var(--accent);
		margin: 0 0 0.5rem 0;
	}

	:global(.tree-greeting) {
		display: inline-block;
		color: inherit;
	}

	:global(.holiday-message) {
		margin: 0 0 1rem 0;
		color: var(--secondary);
	}

	:global(.tag) {
		color: var(--secondary);
		font-size: smaller;
	}

	:global(.linkContacts) {
		color: var(--accent);
		text-decoration: none;
	}
</style>
