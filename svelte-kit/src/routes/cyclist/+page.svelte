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
			date: 'Cherkasy',
			description: 'A trip to Cherkasy.',
			images: [
				{ src: '/images/cyclist/cherkasy/QVZnd09FMWJ1a2JEd3Mtb2tOZUlyRHVH.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZnLW9VV0RGcEZlZ3pOcTBkZGJRS1Za.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZnMEVEVXhMdmQ5WmdnaVo1WDFXcXZ1.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZnN2htQnQwVnJXRVRtSkZyMW9JcDZ6.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZnOWh6bzk1dF9DMV9aa1FGTDRlcGF0.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZnQzZmQ3Iya0VCZnVkUUdvUWFicDkx.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZnWDFhMmgyc2VzejBtdHRCLVQxTGV2.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZodDBoWXg3WWNmUUVaM1NzUjZLZkhU.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZoM0t6TDhKUWpXeWtJUEc4VWZpY0ll.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZoVnoxSHVocGdiVHJNd3FQdzBPV2NK.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZoWklXdkxXa1RFcEhQaFFFdFFWMGc5.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZoZXYzVXZZQ081WG1NMTFXVmxOUlh5.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZpcjRrSWJOaGE4ME83cFQ5UFI0dlV3.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZpdWVGVEFFM0gzcHRMN3Jvek80T1Fl.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZpYU9iUUZGbkdTU0tfZ092cXBscHJJ.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqb2I5cGJVZVlEQVVqQUNqT1FpOFA1.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqcXpjTnJBTDJGWDBINWtlSGw3bFN3.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqMDdwb3c1NkY0NzlsV1YxdzRmSHdv.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqMGE0X0ZKS3ZRRGQyb3VGNnpqYmJw.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqNHpkeDBIMEUzTUc1eTZUQ2M3UzJl.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqNnVQUXZxQ1Vyc29TTGFSYUN3OXU3.jpeg', alt: 'Cherkasy' },
				{ src: '/images/cyclist/cherkasy/QVZqX1pOYW9DcDNDUnMtSFZzc0FFT01m.jpeg', alt: 'Cherkasy' }
			]
		},
		{
			date: 'Slovakia',
			description: 'A trip to Slovakia.',
			images: [
				{ src: '/images/cyclist/slovakia/QVZnNW1IcVVzdldnSWlFaGlrUGJLb25O.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZnRDQ5d0t0M2FxejkxRjdnVUZXNHhQ.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZnZUxuZ2l2Ny1teGJ4ak9ibWs5ZUlw.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZoNlJNd3d5M0tpZ3pFU0VNX3Y4SjVa.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZoQThLY3Y4eW03ejg3eXNMMUNEeHds.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZoZ09KNllNZTFvUHZWaTBvTFlYTTI2.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZpaE9jZFBXcGpreVFsQUw4V1duU3BO.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZpdjRSdHNaYmZmYXFSX2dZZ2VzaGt2.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZpZmctRzhxZ1VMbm9uT2wtMXpQd0pn.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZqMUR6TWh2RmJFNTlsN2hLUXJiUlJQ.jpeg', alt: 'Slovakia' },
				{ src: '/images/cyclist/slovakia/QVZqSjlrTlllc2hZNzE5czFtRHN5eExB.jpeg', alt: 'Slovakia' }
			]
		}
	];
</script>

<div class="terminal-shell">
	<h1 class="main-title">
		<a href="/">..</a><span class="prompt">/</span>cyclist<span class="prompt"
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
