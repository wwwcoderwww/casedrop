<template>
  <div class="item-sell-wrapper">

    <div class="item-title">
      <div class="left-cell">Item</div>
      <div class="right-cell">Status</div>
    </div>

    <div class="items-sell-block" v-for="(item, i) in 3" :key="i">
      <div class="item item-light-blue left-cell">
        <div class="item-name">P2000 | Imperial dragon (Well-worn)</div>
      </div>
      <div class="right-cell">
        <div class="item-name item-status">
          <span>Inventory is hide</span>
          <button class="hover-btn re-send-btn" data-text="Re-send"></button>
          <button class="hover-btn sell-btn" data-text="Sell for $1.26"></button>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.items-sell-block {
  display: flex;
  font-family: SofiaProRegular, sans-serif;
  margin-bottom: 5px;
  padding: 7px 20px;
  background: rgba(0, 0, 0, .2);
  border-radius: 2px;
  .item-name {
    text-transform: uppercase;
    line-height: 34px;
    &.item-status {
      color: $item-red;
      text-transform: none;
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .re-send-btn {
    width: 130px;
    margin: 0 20px;
  }
  .sell-btn {
    width: 180px;
  }
}

.item-sell-wrapper {
  margin-bottom: 30px;
  .item-title {
    background: rgba(0, 0, 0, .1);
    text-transform: uppercase;
    font-size: 14px;
    height: 30px;
    padding-left: 22px;
    line-height: 34px;
    margin-bottom: 5px;
    display: flex;
    border-radius: 2px;
  }
  .left-cell {
    max-width: 450px;
    width: 100%;
  }
  .right-cell {
    width: 100%;
  }
}

.item.item-light-blue {
  .item-name {
    color: $item-light-blue;
  }
}

.item.item-yellow {
  .item-name {
    color: $item-yellow;
  }
}

.item.item-violet {
  .item-name {
    color: $item-violet;
  }
}

.item.item-red {
  .item-name {
    color: $item-red;
  }
}

@media screen and (max-width: 1330px) {
  .item-sell-wrapper .left-cell {
    max-width: 250px;
  }
  .items-sell-block .item-name.item-status {
    justify-content: flex-end;
  }
  .items-sell-block .item-name {
    line-height: 20px;
  }
}

@media screen and (max-width: 1200px) {
  .items-sell-block .sell-btn {
    width: 160px;
  }
  .items-sell-block .re-send-btn {
    width: 110px;
    margin: 0 10px;
  }
}

@media screen and (max-width: 750px){
  .items-sell-block {
    flex-direction: column;
    padding: 20px;
    .item-name.item-status {
      flex-wrap: wrap;
      justify-content: flex-start;
      span {
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
  .item-sell-wrapper .left-cell {
    max-width: 100%;
    margin-bottom: 10px;
  }
  .items-sell-block .re-send-btn {
    margin-left: 0;
  }
}

@media screen and (max-width: 350px) {
  .items-sell-block .re-send-btn {
    margin-bottom: 10px;
  }
}
</style>
