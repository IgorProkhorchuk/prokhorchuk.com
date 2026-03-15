<script lang="ts">
	type GalleryImage = {
		src: string;
		alt: string;
	};

	type GalleryGroup = {
		date: string;
		description: string;
		images: GalleryImage[];
	};

	const gallery: GalleryGroup[] = [
		{
			date: 'Jogging',
			description: 'I promise, I will make a UI better. But since I am a backend developer - I have what I have.',
			images: [
				{ src: '/images/jogger/38452367_1817874768261087_2035727031295016960_n.jpg', alt: 'Jogging' },
				{ src: '/images/jogger/44279865_2211939395691767_8082079559928774656_n.jpg', alt: 'Jogging' },
				{ src: '/images/jogger/IMG_20181014_175246_922.jpg', alt: 'Jogging' },
				{ src: '/images/jogger/IMG_20181014_175312_194.jpg', alt: 'Jogging' },
				{ src: '/images/jogger/temporary_file360977847.jpg', alt: 'Jogging' }
			]
		}
	];
</script>

<div class="terminal-shell">
	<h1 class="main-title">
		<a href="/">..</a><span class="prompt">/</span>jogger<span class="prompt"
			>:$</span
		>
		<span class="cursor">_</span>
	</h1>

	{#each gallery as group}
		<div class="section">
			<h2>{group.date}</h2>
			<p>{group.description}</p>
			<div class="gallery">
				{#each group.images as image}
					<div class="gallery-item">
						<img src={image.src} alt={image.alt} />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.gallery-item img {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}
</style>
