<script>
	import CardWrapper from './components/CardWrapper.svelte';
	import Table from './components/Table.svelte';
	import Notifications from './components/Notifications.svelte';
	import WholeData from './components/WholeData.svelte';
	import Buoy from './components/Buoy.svelte';
	import Trend from './components/Trend.svelte';
</script>

<main>
	<header>
		<h1 class="title title-cityname"><i class="logo"></i>孝感市辖区</h1>
		<h1 class="title title-des">新型冠状病毒（2019-nCoV）疫情动态</h1>
	</header>
	<article>
		<CardWrapper title='孝感市疫情重点通知' des='孝感市政府或辖管的区、县、县级市对于疫情的重点通知'>
			<Notifications />
		</CardWrapper>
		<CardWrapper title='孝感市疫情走势' des='孝感市辖管的区、县、县级市的新型冠状病毒引起的肺炎疫情走势'>
			<Trend />
		</CardWrapper>
		<CardWrapper
		title='孝感市最新疫情数据统计'
		des='孝感市辖管的区、县、县级市的最新新型冠状病毒引起的肺炎确认人数统计'>
			<Table />
		</CardWrapper>
		<CardWrapper title='全国最新疫情数据统计' des='数据来自丁香园·丁香医生'>
			<WholeData />
		</CardWrapper>
	</article>
	<footer>
		<div>
			<a href="https://zhaozhao.today/" target="_blank">昭昭</a> @ 2020. 
			Powered by <a href="https://svelte.dev/" target="_blank">Svelte</a>. Host on Netlify.
		</div>
	</footer>
	<Buoy />
</main>

<style lang="scss">
	$clr: #673AB7;
	main {
		width: 100%;
		/* height: 100%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	header {
		width: 100%;
		box-sizing: border-box;
		background-color: $clr;
		padding: 0.8em;
		border-top: 10px solid darken($clr, 20%);
		box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
		$stripClr: lighten($clr, 5%);
		background-image: linear-gradient(-45deg, $stripClr, $stripClr 16.66%, transparent 16.66%, transparent 33.32%, $stripClr 33.32%, $stripClr 49.98%, transparent 49.98%, transparent 66.64%, $stripClr 66.64%, $stripClr 83.30%, transparent 83.30%);
		background-size: 3% 3%;
		.title {
			color: white;
			text-align: center;
			margin: 0;
			font-size: 1.5em;
			position: relative;

			&-cityname {
				.logo {
					display: inline-block;
					background: url('/2019ncov-xiaogan/public/favicon.png');
					width: 1.5em;
					height: 1.5em;
					background-size: contain;
					position: relative;
					top: 5px;
					left: -5px;
					filter: drop-shadow(-1px -1px 0px white);
				}
			}

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

	footer {
		width: 100%;
		box-sizing: border-box;
		padding: 0.8em;
		font-size: 0.8em;
		background: rgba(0, 0, 0, 0.8);
		color: #efefef;
		text-align: center;

		a {
			&, &:visited {
				color: lighten($clr, 30%);
			}
		}
	}

	@media (max-width: 640px) {
    article {
      padding: 20px 0;
		}
	}

	@media (max-width: 800px) {
		main {
			font-size: 15px;
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
		footer {
			padding: 0.9em;
			font-size: 1em;
		}
  }

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>