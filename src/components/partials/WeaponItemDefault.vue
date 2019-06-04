<template>
  <div class="weapon-default" ref="weaponItem" :class="`weapon-default--${itemData.rarity}`">
    <div class="weapon-default__header">
      <div class="weapon-default__location" v-if="type === 'caseWeapon' || type === 'spinnerWeapon'">
        {{ itemData.name }}
      </div>
      <div class="weapon-default__location" v-else>{{ itemData.box_name | toUppercase }}</div>
    </div>
    <div class="weapon-default__bg-wrapper">
      <div class="weapon-default__circle"></div>
      <div  v-for="(item, i) in 4" 
            class="weapon-default__bg" :key="i" 
            :class="`weapon-default__bg--${i + 1}`">
      </div>
    </div>

    <img :src="imageUrl" alt="" class="weapon-default__img">
    <div class="weapon-default__name" v-if="type === 'caseWeapon'">{{ itemData.type }}</div>
    <div class="weapon-default__name" v-else>{{ itemData.name }}</div>
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js';
import constants from '@/constants';

export default {
  props: {
    itemData: Object,
    type: String
  },
  computed: {
    imageUrl() {
      if (this.type === 'spinnerWeapon') {
        if (this.itemData.image_id.includes('images')) {
          return `${constants.imgUrl}${this.itemData.image_id}`;
        }
        return `${constants.headerImgUrl}${this.itemData.image_id}`;
      }
      if (this.type === 'caseWeapon') {
        return `${constants.imgUrl}${this.itemData.image_id}`;
      }
      return `${constants.imgUrl}${this.itemData.icon_front}`;
    }
  },
  mounted() {
    if (this.$refs.weaponItem) {
      this.handleScroll(this.$refs.weaponItem);
    }
    window.addEventListener('scroll', () => {
      if (this.$refs.weaponItem) {
        this.handleScroll(this.$refs.weaponItem);
      }
    });
  },
  methods: {
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= -10 &&
        rect.left >= -10 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
      );
    },
    handleScroll(e) {
      const circleCounter = e.querySelectorAll('svg').length;
      const element = e.querySelector('.weapon-default__circle');
      if (!circleCounter && this.isElementInViewport(element)) {
        var circle = new ProgressBar.Circle(element, {
          color: '#fb8d00',
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

.swiper-slide .weapon-default {
  width: 100% !important; 
  margin: 0 !important;
  height: 215px;
  box-shadow: none;
  border-radius: 0;
  font-family: SofiaProSemiBold, sans-serif;
  &:after {
    content: '';
    width: 2px;
    height: 80%;
    background: rgba(255, 255, 255, 0.15);
    display: block;
    position: absolute;
    right: 0;
    top: 10%;
  }
  &__img {
    width: 60% !important;
  }
}

.weapon-default {
  width: calc(16.66% - 30px);
  height: 215px;
  margin: 15px;
  padding-top: 15px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  position: relative;
  font-family: SofiaProSemiBold, sans-serif;

  &__name {
    text-transform: capitalize;
    //font-family: SofiaProSemiBold, sans-serif;
    font-size: 16px;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 15px;
    width: 90%;
  }

  &__location {
    font-size: 16px;
    color: #fff;
    text-align: center;
  }


  &__circle {
    width: 130px;
    height: 130px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(198deg);
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
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

  &__bg--4 {
    width: 28px;
    height: 28px;
    animation-delay: .2s;
    transition: all .5s;
  }
  &__bg--3 {
    width: 62px;
    height: 62px;
    opacity: .25;
    animation-delay: .4s;
    transition: all .5s;
  }
  &__bg--2 {
    width: 90px;
    height: 90px;
    opacity: .053;
    animation-delay: .6s;
    transition: all .5s;
  }
  &__bg--1 {
    width: 130px;
    height: 130px;
    opacity: .03;
    animation-delay: .8s;
    transition: all .5s;
  }
}

@each $name, $color in $weaponColors {
  .weapon-default--#{$name} {
    .weapon-default__bg {
      background: $color;
    }
    .weapon-default__bg-wrapper {
      path:nth-child(2) {
        stroke: $color;
      }
    }
  }
}

@media screen and (max-width: 767px){
  .weapon-default__img {
    width: 50%;
  }
}
</style>
