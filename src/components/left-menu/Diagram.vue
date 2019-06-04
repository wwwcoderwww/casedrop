<template>
  <div class="left-menu-diagram">
    <div class="diagram-user-info">

      <div class="diagram-info-item">
        <div class="online-indicator">
          <div class="indicator-outer"></div>
          <div class="indicator-layout"></div>
          <div class="indicator-inner"></div>
        </div>
        <span class="users-counter">746</span>
        <span class="comment addition-text">Online</span>
      </div>
      <div class="diagram-info-item case-counter">
        <div class="case-counter-wrapper">
          <div class="users-counter">14 223 620</div>
        </div>
        <div class="comment"><span class="addition-text">Cases</span> Opened</div>
      </div>

    </div>
    <div class="diagram-block">
      <img src="~img/temp-diagram.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.left-menu-diagram {
  width: 100%;
}

.diagram-block {
  height: 128px;
  overflow: hidden;
  & > img {
    display: block;
    width: 100%;
  }
}

.diagram-user-info {
  width: 140px;
  margin: 0 auto;
  display: block;
  position: relative;
  top: 20px;
}

.diagram-info-item {
  text-align: center;
  padding: 15px 0 7px 0;
  .online-indicator {
    display: inline-block;
  }
  &:first-child {
    border-bottom: 2px solid rgba(255, 255, 255, .15);
  }
}

.users-counter {
  font-size: 18px;
  /*font-family: SofiaProSemiBold, sans-serif;*/
  color: #fff;
}

.comment {
  font-size: 13px;
  color: $grey-text;
  font-family: SofiaProRegular, sans-serif;
}

.online-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;

  .indicator-inner {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8ac370;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: all .3s ease-in-out;
    animation: pulsation 2s infinite linear;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  }
  .indicator-layout {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    //background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .indicator-outer {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: lightgoldenrodyellow;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulsation-shadow 2s infinite linear;
  }
  &+.users-counter {
    margin-right: 6px;
  }
}
</style>

