<script>
  export let title = ''
  export let des = ''
</script>

<main class="card">
  {#if !!title}
  <header class="card__header">
    <div class="card__header-title">{title}</div>
    <div class="card__header-des">{des}</div>
  </header>
  {/if}
  <article class="card__article">
    <slot></slot>
  </article>
</main>

<style lang="scss">
  .card {
    overflow: hidden;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    padding: 24px;

    &__header {
      &-title {
        font-size: 1.3em; 
      }
      &-des {
        margin-top: 10px;
        font-size: 0.9em;
        color: #999;
      }
    }

    &__article {
      margin-top: 20px;
    }
  }

  @media (max-width: 640px) {
    .card {
      padding: 20px 17px;
    }
  }
</style>