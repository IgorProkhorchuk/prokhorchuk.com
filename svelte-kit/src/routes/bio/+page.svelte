<script lang="ts">
	type Side = 'left' | 'right';

	type TimelineItem = {
		year: string;
		season: string;
		title: string;
		image: string;
		description: string;
		side: Side;
	};

	const timelineItems: TimelineItem[] = [
		{
			year: '1983',
			season: 'Autumn',
			title: 'Birthday',
			image: 'Image placeholder — early family photo',
			description: 'A fall arrival, bundled in knitted blankets, marking the first checkpoint on the family timeline.',
			side: 'left'
		},
		{
			year: '1990',
			season: 'September',
			title: 'First Year of School',
			image: 'Image placeholder — first-day satchel',
			description: 'A nervous smile, a crisp uniform, and the first taste of structured curiosity.',
			side: 'right'
		},
		{
			year: '2000',
			season: 'May',
			title: 'School Graduation',
			image: 'Image placeholder — graduation group shot',
			description: 'Stacks of notebooks close, the future opens, and I carry a genuine hunger for the next challenge.',
			side: 'left'
		},
		{
			year: '2000',
			season: 'September',
			title: 'First Grade University',
			image: 'Image placeholder — campus gate',
			description: 'A deliberate dive into deeper technical waters, powered by curiosity about how systems really work.',
			side: 'right'
		},
		{
			year: '2006',
			season: 'February',
			title: 'University Graduation',
			image: 'Image placeholder — diploma close-up',
			description: 'Thesis complete, late nights rewarded, and a toolkit ready for hands-on engineering work.',
			side: 'left'
		},
		{
			year: '2013',
			season: 'November',
			title: 'Crimea Hiking',
			image: 'Image placeholder — mountain ridge',
			description: 'Windy cliffs, quiet trails, and a reminder that resilience is built on summits and blisters alike.',
			side: 'right'
		},
		{
			year: '2013',
			season: 'November',
			title: "Son's Birthday",
			image: 'Image placeholder — tiny footprints',
			description: 'Sleepless nights suddenly feel like a gift as priorities reshape around a newborn laugh.',
			side: 'left'
		},
		{
			year: '2018',
			season: 'September',
			title: 'Half Marathon',
			image: 'Image placeholder — finish line tape',
			description: 'Kilometres of self-discipline distilled into a medal that represents much more than running.',
			side: 'right'
		},
		{
			year: '2023',
			season: 'February',
			title: "Daughter's Birthday",
			image: 'Image placeholder — pastel balloons',
			description: 'Another heartbeat in the house, doubling the joy and reshaping every routine.',
			side: 'left'
		},
		{
			year: '2025',
			season: 'October',
			title: 'German Language Certificate',
			image: 'Image placeholder — certificate frame',
			description: 'Hours of flashcards and practice culminating in official recognition of a new voice.',
			side: 'right'
		}
	];
</script>

<svelte:head>
	<title>Bio Timeline - Igor Prokhorchuk</title>
	<meta
		name="description"
		content="Milestones since 1983 — a calm, curated snapshot of seasons, finish lines, and family moments."
	/>
</svelte:head>

<div class="bio-container">
	<header class="bio-header">
		<p class="bio-label">Personal timeline</p>
		<h1 class="bio-title">Milestones since 1983</h1>
		<p class="bio-subtitle">
			A calm, curated snapshot of the seasons, finish lines, and family moments that shaped my story.
		</p>
	</header>

	<section class="timeline-intro">
		<p class="intro-lead">
			Each card below is a draft placeholder — swap the copy and imagery whenever you are ready to tell every
			chapter in your own words.
		</p>
	</section>

	<section class="timeline" aria-label="Life timeline">
		{#each timelineItems as item}
			<div class={`timeline-item ${item.side}`}>
				<div class="timeline-year">{item.year}</div>
				<div class="timeline-season">{item.season}</div>
				<div class="timeline-card">
					<h3>{item.title}</h3>
					<div class="timeline-image">{item.image}</div>
					<p>{item.description}</p>
				</div>
			</div>
		{/each}
	</section>

	<footer class="bio-footer">
		<p>More memories to add? Extend the line whenever inspiration strikes.</p>
	</footer>
</div>

<style>
	:global(:root) {
		--bio-bg: #fdf8ef;
		--bio-surface: #ffffff;
		--bio-text: #1d2228;
		--bio-muted: #7a7f87;
		--bio-accent: #d07b1b;
		--bio-accent-strong: #aa5b00;
		--bio-line: #e7dcc9;
		--bio-shadow: 0 18px 40px rgba(62, 47, 28, 0.08);
		--bio-font: 'Space Grotesk', 'Segoe UI', 'Fira Code', sans-serif;
	}

	:global(body) {
		margin: 0;
		background: var(--bio-bg);
		color: var(--bio-text);
		font-family: var(--bio-font);
	}

	.bio-container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3.5rem;
	}

	.bio-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.bio-label {
		font-size: 0.9rem;
		letter-spacing: 0.25rem;
		text-transform: uppercase;
		color: var(--bio-muted);
		margin: 0 0 0.5rem 0;
	}

	.bio-title {
		font-size: clamp(2rem, 5vw, 3rem);
		margin: 0 0 0.5rem 0;
	}

	.bio-subtitle {
		margin: 0;
		color: var(--bio-muted);
		font-size: 1.05rem;
		line-height: 1.6;
	}

	.timeline-intro {
		text-align: center;
		margin: 0 auto 3rem auto;
		max-width: 720px;
	}

	.timeline-intro .intro-lead {
		margin: 0;
		font-size: 1.1rem;
		color: var(--bio-muted);
	}

	.timeline {
		position: relative;
		margin: 0 auto;
		padding: 0 0 3rem 0;
	}

	.timeline::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--bio-line);
		left: 50%;
		transform: translateX(-50%);
	}

	.timeline-item {
		position: relative;
		width: 50%;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		align-items: flex-start;
		box-sizing: border-box;
	}

	.timeline-card {
		background: var(--bio-surface);
		padding: 1.75rem;
		border-radius: 1.5rem;
		box-shadow: var(--bio-shadow);
		width: 100%;
		max-width: 460px;
	}

	.timeline-item h3 {
		margin: 0;
		font-size: 1.35rem;
		color: var(--bio-accent-strong);
	}

	.timeline-item p {
		margin: 0;
		color: var(--bio-text);
		line-height: 1.5;
	}

	.timeline-image {
		width: 100%;
		height: 190px;
		border: 2px dashed rgba(208, 123, 27, 0.35);
		border-radius: 1.15rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.95rem;
		color: var(--bio-muted);
		background: #fff6ea;
	}

	.timeline-item::before {
		content: '';
		position: absolute;
		top: 2.25rem;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 3px solid var(--bio-accent);
		background: var(--bio-surface);
		z-index: 2;
	}

	.timeline-item.left {
		text-align: right;
		left: 0;
		align-items: flex-end;
	}

	.timeline-item.left::before {
		right: -8px;
	}

	.timeline-item.right {
		left: 50%;
		text-align: left;
		align-items: flex-start;
	}

	.timeline-item.right::before {
		left: -8px;
	}

	.timeline-year {
		font-size: 1.1rem;
		letter-spacing: 0.25rem;
		text-transform: uppercase;
		color: var(--bio-muted);
	}

	.timeline-season {
		font-size: 0.95rem;
		color: var(--bio-accent-strong);
		text-transform: uppercase;
		letter-spacing: 0.15rem;
	}

	.bio-footer {
		margin-top: 1.5rem;
		text-align: center;
		color: var(--bio-muted);
		font-size: 0.95rem;
	}

	@media (max-width: 900px) {
		.timeline::before {
			left: 32px;
		}

		.timeline-item,
		.timeline-item.left,
		.timeline-item.right {
			width: 100%;
			left: 0;
			text-align: left;
			padding-left: 3.5rem;
			align-items: flex-start;
		}

		.timeline-item::before {
			left: 24px;
		}
	}
</style>
