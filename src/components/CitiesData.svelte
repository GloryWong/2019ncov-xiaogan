<script>
  const titles = ['地区', '确诊', '治愈', '死亡'];

  const data = [{
    id: 'xn',
    label: '孝南',
    incCount: {
      confirmed: 60,
      cured: 5,
      dead: 0
    },
    sumCount: {
      confirmed: 543,
      cured: 11,
      dead: 5
    }
  }, {
    id: 'hc',
    label: '汉川',
    incCount: {
      confirmed: 81,
      cured: 2,
      dead: 0
    },
    sumCount: {
      confirmed: 530,
      cured: 4,
      dead: 12
    }
  }, {
    id: 'yc',
    label: '应城',
    incCount: {
      confirmed: 3,
      cured: 0,
      dead: 0
    },
    sumCount: {
      confirmed: 210,
      cured: 0,
      dead: 0
    }
  }]
</script>

<main>
  <div class="table">
    {#each titles as title}
    <div class="item item-title">{title}</div>
    {/each}
    {#each data as { id, label, incCount, sumCount }}
    <div class="item item-label">{label}</div>
    <div class="item item-count"><span class="clr-confirmed">{sumCount.confirmed}</span><div class="item-count__inc">昨日增加<span class="clr-confirmed">{incCount.confirmed}</span></div></div>
    <div class="item item-count"><span class="clr-cured">{sumCount.cured}</span><div class="item-count__inc">昨日增加<span class="clr-cured">{incCount.cured}</span></div></div>
    <div class="item item-count"><span class="clr-dead">{sumCount.dead}</span><div class="item-count__inc">昨日增加<span class="clr-dead">{incCount.dead}</span></div></div>
    {/each}
  </div>
</main>

<style lang="scss">
  .table {
    display: grid;
    width: 100%;
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-template-rows: auto;
    place-items: stretch;
    $borderClr: rgba(0, 0, 0, 0.12);
    border: 1px solid $borderClr;
    border-radius: 4px;

    .clr-confirmed {
      color: rgb(247, 76, 49);
    }
    .clr-cured {
      color: rgb(40, 183, 163);
    }
    .clr-dead {
      color: rgb(93, 112, 146);
    }

    .item {
      padding: 10px 5px;
      border-bottom: 1px solid $borderClr;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      &-title {
        font-weight: bolder;
      }
      &-label {
        padding: 10px;
      }
      &-count {
        display: flex;
        flex-direction: column;
        &__inc {
          color: #666;
          font-size: 0.7em;
          font-weight: bolder;
          margin-top: 2px;
        }
      }
    }
  }
</style>