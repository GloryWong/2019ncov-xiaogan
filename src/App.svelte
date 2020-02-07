<script>
	import CardWrapper from './components/CardWrapper.svelte';
	import CitiesData from './components/CitiesData.svelte';
</script>

<main>
	<header>
		<h1 class="title title-cityname">孝感市辖区</h1>
		<h1 class="title title-des">新冠状病毒（2019-nCoV）疫情动态</h1>
	</header>
	<article>
		<CardWrapper
		title='孝感市最新疫情'
		des='孝感市辖管的区、县、县级市的最新新冠状病毒引起的肺炎确认人数统计'>
			<CitiesData/>
		</CardWrapper>
	</article>
</main>

<style lang="scss">
	main {
		width: 100%;
		/* height: 100%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	@media (max-width: 800px) {
		main {
			font-size: 15px;
		}
	}

	header {
		$clr: #673AB7;
		width: 100%;
		background: $clr;
		padding: 0.8em;
		border-top: 10px solid darken($clr, 20%);
		box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
		.title {
			color: white;
			text-align: center;
			margin: 0;
			font-size: 1.5em;

			&-des {
				margin-top: 0.5em;
				font-size: 1.3em;
			}
		}
	}

	article {
		flex-grow: 1;
		padding: 20px;
		width: 100%;
		box-sizing: border-box;
	}

	@media (max-width: 640px) {
    article {
      padding: 20px 0;
		}
	}
	
	@media (min-width: 1000px) {
    article {
      width: 1000px;
		}
		header {
			padding: 0.9em;
			.title {
				font-size: 2em;
				&-des {
					margin-top: 0.6em;
					font-size: 1.8em;
				}
			}
		}
  }

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>