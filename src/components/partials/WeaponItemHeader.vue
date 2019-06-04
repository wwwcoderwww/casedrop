<template>
  <div class="weapon-header"
      :class="`weapon-header--${itemData._weaponRarity}`"
      ref="weaponItem">
    <div class="weapon-header__bg-wrapper">
      <div class="weapon-header__circle"></div>
      <div  v-for="(item, i) in 4" 
            class="weapon-header__bg" :key="i" 
            :class="`weapon-header__bg--${i + 1}`">
      </div>
    </div>

    <img class="weapon-header__img" :src="weaponImgUrl(itemData._weaponImageId)" alt="">
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js';
import constants from '@/constants';

export default {
  props: {
    itemData: Object
  },
  mounted() {
    this.handleScroll(this.$refs.weaponItem);
  },
  methods: {
    weaponImgUrl(imgId) {
      return `${constants.headerImgUrl}${imgId}`;
    },
    handleScroll(e) {
      const circleCounter = e.querySelectorAll('svg').length;
      const element = e.querySelector('.weapon-header__circle');

      if (!circleCounter) {
        var circle = new ProgressBar.Circle(element, {
          color: '#000',
          strokeWidth: 2,
          trailColor: 'transparent',
          easing: 'easeInOut'
        });

        circle.animate(1.9, {
          duration: 1000
        });
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

@keyframes slideInFromLeft {
  0% {
    transform: translate(-90%, -50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

.weapon-header {
  transition: all 1s;
  display: inline-block;
  height: 100%;
  border-radius: 3px;
  background: none;
  box-shadow: none;
  margin: 0;
  font-family: SofiaProSemiBold, sans-serif;

  &__user {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  &__user-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__triangle {
    position: absolute;
    top: -24px;
    left: 50%;
    transition: left .3s;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-bottom-width: 10px;
    border-bottom-style: solid;
    &--left {
      left: 20%;
    }
    &--right {
      left: 80%;
    }
  }

  &__user-avatar {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%;
  }

  &__name {
    font-size: 12px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }

  &__dropdown-img {
    display: block;
    width: 100%;
    max-height: 90px;
  }

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 30px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -1px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  &__dropdown {
    width: 134px;
    height: 118px;
    padding: 10px 30px 30px 30px;
    border-top-width: 5px;
    border-top-style: solid;
    background: #000;
    position: fixed;
    transition: left .3s;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 100;
    -webkit-box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }

  &__circle {
    width: 76px;
    height: 76px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(198deg);
  }

  &__img {
    animation: .7s ease-out 0s 1 slideInFromLeft;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    z-index: 0;
    pointer-events: none;
  }

  &__bg-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__bg {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: inner-circle .5s;
    transform: translate(-50%, -50%);
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80px;
    z-index: 0;
    pointer-events: none;
    display: block;
    width: 100%;
  }

  &__bg--4 {
    width: 16px;
    height: 16px;
    animation-delay: .2s;
    transition: all .5s;
  }
  &__bg--3 {
    width: 36px;
    height: 36px;
    opacity: .25;
    animation-delay: .4s;
    transition: all .5s;
  }
  &__bg--2 {
    width: 53px;
    height: 53px;
    opacity: .053;
    animation-delay: .6s;
    transition: all .5s;
  }
  &__bg--1 {
    width: 76px;
    height: 76px;
    opacity: .03;
    animation-delay: .8s;
    transition: all .5s;
  }
}

@each $name, $color in $weaponColors {
  .weapon-header--#{$name} {
    .weapon-header__bg {
      background: $color;
    }
    .weapon-header__bg-wrapper {
      path:nth-child(2) {
        stroke: $color;
      }
    }
  }
}

@each $name, $color in $weaponColors {
  .weapon-header__dropdown--#{$name} {
    border-top-color: $color;
    .weapon-header__name {
      color: $color;
    }
    .weapon-header__triangle {
      border-bottom-color: $color;
    }
  }
}

</style>
