<script>
  export let visible = false;
  import { fade } from 'svelte/transition';

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      visible = true;
    } else {
      visible = false;
    }
  });
</script>

{#if visible}
<div class="buoy" in:fade out:fade on:click={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
  <i></i>
</div>
{/if}

<style lang="scss">
  .buoy {
    position: fixed;
    bottom: 2em;
    right: 1em;
    $size: 4em;
    width: $size;
    height: $size;
    z-index: 9999;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12);
    background: #673AB7;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      $triSize: 0.5em;
      border-width: $triSize;
      border-top-width: 0;
      border-color: transparent;
      border-bottom-color: white;
      border-style: solid;
    }
  }
</style>