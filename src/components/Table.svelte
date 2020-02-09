<script>
  import table from '../data/table.data.js';
  import citiesdata from '../data/citiesdata.js';
  import { sortBy, appendAllCount } from '../lib/tableGen.js';
  import cloneDeep from 'lodash.clonedeep';
  const { titles, uptoTime, traceCount, observeCount } = table;

  const latestData = cloneDeep(citiesdata[citiesdata.length - 1].data);
  sortBy(latestData);
  appendAllCount(latestData);
</script>

<main>
  <header>截至{uptoTime}</header>
  <div class="table">
    {#each titles as title}
    <div class="item item-title">{title}</div>
    {/each}
    {#each latestData as { id, label, incCount, sumCount }}
    <div class="item item-label">{label}</div>
    <div class="item item-count"><span class="clr-confirmed">{sumCount.confirmed}</span><div class="item-count__inc">较昨日增加 <span class="clr-confirmed">{incCount.confirmed}</span></div></div>
    <div class="item item-count"><span class="clr-cured">{sumCount.cured}</span><div class="item-count__inc">较昨日增加 <span class="clr-cured">{incCount.cured}</span></div></div>
    <div class="item item-count"><span class="clr-dead">{sumCount.dead}</span><div class="item-count__inc">较昨日增加 <span class="clr-dead">{incCount.dead}</span></div></div>
    {/each}
  </div>
  <footer>
    <div>注：</div>
    <div>1. 累计追踪密切接触者{traceCount}人，尚在接受医学观察{observeCount}人。</div>
    <div>2. 数据来源于孝感市卫生健康委员会。</div>
  </footer>
</main>

<style lang="scss">
  header, footer {
    color: #777;
  }

  header {
    text-align: center;
  }

  footer {
    font-size: 0.7em;
    & > div {
      margin-bottom: 5px;
    }
  }

  .table {
    display: grid;
    width: 100%;
    margin: 10px 0;
    grid-template-columns: repeat(4, 1fr);
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