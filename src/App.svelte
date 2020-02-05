<script>
	import CitiesData from './components/CitiesData.svelte'
</script>

<main>
	<header>
		<h1 class="title">孝感市辖区新冠状病毒（2019-nCoV）疫情动态</h1>
	</header>
	<article>
		<CitiesData></CitiesData>
	</article>
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header {
		$clr: #673AB7;
		width: 100%;
		background: $clr;
		padding: 20px;
		border-top: 10px solid darken($clr, 20%);
		.title {
			color: white;
			text-align: center;
			margin: 0;
		}
	}

	article {
		flex-grow: 1;
	}

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>