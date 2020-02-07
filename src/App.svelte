<script>
	import CardWrapper from './components/CardWrapper.svelte'
	import CitiesData from './components/CitiesData.svelte'
</script>

<main>
	<header>
		<h1 class="title">孝感市辖区新冠状病毒（2019-nCoV）疫情动态</h1>
	</header>
	<article>
		<CardWrapper title={'孝感市最新疫情'} des='孝感市辖管的区、县、县级市的最新新冠状病毒引起的肺炎确认人数统计'>
			<CitiesData/>
		</CardWrapper>
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
		box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
		.title {
			color: white;
			text-align: center;
			margin: 0;
		}
	}

	article {
		flex-grow: 1;
		padding: 20px;
		width: 100%;
		box-sizing: border-box;
	}

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>