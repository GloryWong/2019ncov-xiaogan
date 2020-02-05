<script>
  const cities = [{
    label: '孝感市',
    des: '孝感市的新冠状病毒最新疫情动态'
  }];

  import CityData from './CityData.svelte';
</script>

<main>
  <ul class="city-list">
    {#each cities as { label, des}}
    <li class="city-list__item">
      <CityData {label} {des}></CityData>
    </li>
    {/each}
  </ul>
</main>

<style lang="scss"></style>