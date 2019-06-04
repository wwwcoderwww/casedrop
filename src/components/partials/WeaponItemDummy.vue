<template>
  <div class="weapon-item item-blue send-item" v-if="isSendItem">
    <div class="weapon-item-header">
      <div class="weapon-btn-row">
        <div class="hover-btn send-btn" data-text="Send"></div>
        <div class="hover-btn sell-btn" data-text="Sell for $2.99"></div>
      </div>
    </div>
    <div class="gradient-item-bg">
      <div class="circle "></div>
      <div class="item-bg bg-4"></div>
      <div class="item-bg bg-3"></div>
      <div class="item-bg bg-2"></div>
      <div class="item-bg bg-1"></div>
    </div>
    <div class="gradient-item-img">
      <img src="~img/weapon1.png" alt="">
    </div>
    <div class="full-weapon-name">
      <div>FAMAS</div>
      <div>Roll Cage (Factory New)</div>
    </div>
  </div>

  <div class="weapon-item" v-else-if="isBtnItem">
    <div class="weapon-item-location">Jumanjie</div>
    <div class="weapon-item-img">
      <img src="~img/weapon1.png" alt="">
    </div>
    <button class="hover-gradient-btn">
      <span data-price="$12.20"></span>
    </button>
  </div>

  <div class="weapon-item item-blue" v-else-if="isHeaderItem">
    <div class="gradient-item-bg">
      <div class="circle"></div>
      <div class="item-bg bg-4"></div>
      <div class="item-bg bg-3"></div>
      <div class="item-bg bg-2"></div>
      <div class="item-bg bg-1"></div>
    </div>
    <div class="gradient-item-img">
      <img src="~img/weapon1.png" alt="">
    </div>

    <div class="dropdown-weapon-item">
      <div class="item-triangle"></div>
      <div class="dropdown-nickname">nickname</div>
      <div class="dropdown-item-name">dropdown name</div>
      <div class="dropdown-img">
        <img src="~img/dropdown-img.png" alt="">
      </div>
    </div>
  </div>

  <div class="weapon-item item-red" v-else-if="isDefaultItem">
    <div class="weapon-item-header">
      <div class="weapon-item-location">Jumanjie</div>
    </div>
    <div class="gradient-item-bg">
      <div class="circle "></div>
      <div class="item-bg bg-4"></div>
      <div class="item-bg bg-3"></div>
      <div class="item-bg bg-2"></div>
      <div class="item-bg bg-1"></div>
    </div>
    <div class="gradient-item-img">
      <img src="~img/weapon1.png" alt="">
    </div>
    <div class="weapon-item-name">ak-47</div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: Array,
    isHeaderItem: {
      type: Boolean,
      default: false
    },
    isSendItem: {
      type: Boolean,
      default: false
    },
    isBtnItem: {
      type: Boolean,
      default: false
    },
    isDefaultItem: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.weapon-item-location {
  font-size: 16px;
  color: $light-grey-text;
  text-align: center;
}

.dropdown-weapon-item {
  display: none;
}

.weapon-item.item-light-blue {
  .item-bg {
    background: $item-light-blue;
  }
  .dropdown-item-name {
    color: $item-light-blue;
  }
  .dropdown-weapon-item {
    border-top-color: $item-light-blue;
  }
  .item-triangle {
    border-bottom-color: $item-light-blue;
  }
  .gradient-item-bg {
    path:nth-child(2) {
      stroke: $item-light-blue;
    }
  }
  & + .popup-weapon-info {
    .weapon-item-name {
      color: $item-light-blue;
    }
  }
}

.weapon-item.item-blue {
  .item-bg {
    background: $item-blue;
  }
  .dropdown-item-name {
    color: $item-blue;
  }
  .dropdown-weapon-item {
    border-top-color: $item-blue;
  }
  .item-triangle {
    border-bottom-color: $item-blue;
  }
  .gradient-item-bg {
    path:nth-child(2) {
      stroke: $item-blue;
    }
  }
  & + .popup-weapon-info {
    .weapon-item-name {
      color: $item-blue;
    }
  }
}

.weapon-item.item-red {
  .item-bg {
    background: $item-red;
  }
  .dropdown-item-name {
    color: $item-red;
  }
  .dropdown-weapon-item {
    border-top-color: $item-red;
  }
  .item-triangle {
    border-bottom-color: $item-red;
  }
  .gradient-item-bg {
    path:nth-child(2) {
      stroke: $item-red;
    }
  }
  & + .popup-weapon-info {
    .weapon-item-name {
      color: $item-red;
    }
  }
}

.weapon-item.item-violet {
  .item-bg {
    background: $item-violet;
  }
  .dropdown-item-name {
    color: $item-violet;
  }
  .dropdown-weapon-item {
    border-top-color: $item-violet;
  }
  .item-triangle {
    border-bottom-color: $item-violet;
  }
  .gradient-item-bg {
    path:nth-child(2) {
      stroke: $item-violet;
    }
  }
  & + .popup-weapon-info {
    .weapon-item-name {
      color: $item-violet;
    }
  }
}

.weapon-btn-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  .send-btn {
    width: 62px;
    height: 25px;
    font-size: 13px;
    line-height: 20px;
  }
  .sell-btn {
    width: 120px;
    height: 25px;
    font-size: 13px;
    line-height: 20px;
  }
}

.weapon-item.item-yellow {
  .item-bg {
    background: $item-yellow;
  }
  .dropdown-item-name {
    color: $item-yellow;
  }
  .dropdown-weapon-item {
    border-top-color: $item-yellow;
  }
  .item-triangle {
    border-bottom-color: $item-yellow;
  }
  .gradient-item-bg {
    path:nth-child(2) {
      stroke: $item-yellow;
    }
  }
  & + .popup-weapon-info {
    .weapon-item-name {
      color: $item-yellow;
    }
  }
}

.gradient-item-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.full-weapon-name {
  //font-family: SofiaProSemiBold, sans-serif;
  font-size: 16px;
  text-align: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.weapon-item.waiting-item, .weapon-item.sold-item, .weapon-item.send-item, .weapon-item.accepted-item {
  height: 240px;
  .gradient-item-bg {
    top: 43%;
  }
}

.waiting-item {
  .item-status {
    &:before {
      content: "\e910";
      font-family: drop;
      margin-right: 10px;
      color: $item-yellow;
    }
  }
}

.sold-item {
  .item-status {
    &:before {
      content: "\e906";
      font-family: drop;
      margin-right: 10px;
      color: $item-red;
    }
  }
}

.accepted-item {
  .item-status {
    &:before {
      content: "\e903";
      font-family: drop;
      margin-right: 10px;
      color: $green-color;
    }
  }
}


.weapon-item-name {
  text-transform: uppercase;
  //font-family: SofiaProSemiBold, sans-serif;
  font-size: 16px;
  text-align: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.weapon-item-img {
  max-width: 140px;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
  }
}


.weapon-item {
  height: 215px;
  margin: 0 15px;
  margin-bottom: 30px;
  padding-top: 15px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  position: relative;
  .hover-gradient-btn {
    display: block;
    margin: 0 auto;
  }
  .gradient-item-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80px;
    z-index: 0;
    pointer-events: none;
    img {
      display: block;
      width: 100%;
    }
  }
  .bg-1 {
    width: 28px;
    height: 28px;
    animation-delay: .2s;
    //animation: inner-circle .5s;
    transition: all .5s;
  }
  .bg-2 {
    width: 62px;
    height: 62px;
    opacity: .25;
    animation-delay: .4s;
    //animation: inner-circle .5s;
    transition: all .5s;
  }
  .bg-3 {
    width: 90px;
    height: 90px;
    opacity: .053;
    animation-delay: .6s;
    //animation: inner-circle .5s;
    transition: all .5s;
  }
  .bg-4 {
    width: 130px;
    height: 130px;
    opacity: .03;
    animation-delay: .8s;
    //animation: inner-circle .5s;
    transition: all .5s;
  }
  .circle {
    width: 130px;
    height: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(198deg);
  }
  .item-bg {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn {
    width: 120px;
    margin: 0 auto;
    display: none;
  }
  &:hover .btn {
    display: block;
  }
}


</style>

