<template>
  <div class="popup-single" :class="`popup-single--${wonItem.rarity}`">
    <div class="popup-triangle"></div>
    <div class="popup-close-btn" @click="closeModals">
      <span class="icon drop-close"></span>
    </div>

    <div class="spinner__wrapper--multimodal" v-if="loading">
      <spinner></spinner>
    </div>

    <template v-else>
      <div class="popup-single__header">
        <div class="popup-single__title">Your winning</div>
        <div class="popup-single__name">{{ wonItem.name_hash }}</div>
      </div>

      <div class="popup-single-item" ref="weaponItem">
        <div class="popup-single-item__bg-wrapper">
          <div class="popup-single-item__circle"></div>
          <div  v-for="(item, i) in 4" 
                class="popup-single-item__bg" :key="i" 
                :class="`popup-single-item__bg--${i + 1}`">
          </div>
        </div>

        <img class="popup-single-item__img" :src="weaponImgUrl(wonItem.image_id)" alt="">

      </div>

      <div class="popup-btn-block">
        <div class="btn-row">
          <button class="hover-btn popup-nover-btn" @click="closeModals" data-text="Try again"></button>
          <button class="hover-btn popup-nover-btn" @click="toUser" data-text="My items"></button>
        </div>
        <button class="gradient-btn popup-sell-btn" @click="sell">Sell item for ${{ wonItem.price }}</button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Api from '@/api';
import constants from '@/constants';
import ProgressBar from 'progressbar.js';

export default {
  computed: {
    ...mapState('modals', ['wonItems']),
    wonItem() {
      return this.wonItems[0];
    }
  },
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    this.handleScroll(this.$refs.weaponItem);
  },
  methods: {
    ...mapMutations('modals', ['closeModals', 'setStateModals']),
    toUser() {
      this.closeModals();
      this.$router.push('/user');
    },
    async sell() {
      try {
        this.loading = true;
        const { data } = await Api.sellCase(this.wonItem.id);
        if (data.result) {
          this.setStateModals({ type: 'success', show: true, msg: data.msg });
        } else {
          this.setStateModals({ type: 'error', show: true, msg: data.msg });
        }
        
        this.loading = false;
      } catch (e) {
        throw new Error(e);
      }
    },
    weaponImgUrl(imgId) {
      return `${constants.headerImgUrl}${imgId}`;
    },
    handleScroll(e) {
      const circleCounter = e.querySelectorAll('svg').length;
      const element = e.querySelector('.popup-single-item__circle');

      if (!circleCounter) {
        var circle = new ProgressBar.Circle(element, {
          color: '#000',
          strokeWidth: 2,
          trailColor: 'transparent',
          easing: 'easeInOut'
        });

        circle.animate(1.9, {
          duration: 2000
        });
      }
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/style/partials/_colors.scss';
.popup-single {
  width: 340px;
  background: #2C2438;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  padding: 20px 40px 40px 40px;
  border-top-width: 3px;
  border-top-style: solid;
  &__header {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
  }
  &__title {
    font-size: 17px;
    // color: $light-grey-text;
    text-align: center;
    text-transform: uppercase;
  }

  &-item {
    height: 200px;
    width: 200px;
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    &__bg-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__circle {
      width: 200px;
      height: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(198deg);
    }

    &__bg {
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      animation: inner-circle .5s;
      transform: translate(-50%, -50%);
    }

    &__img {
      height: 100%;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      pointer-events: none;
      display: block;
      max-width: 100%;
    }
    &__bg--4 {
      width: 42px;
      height: 42px;
      animation-delay: .2s;
      transition: all .5s;
    }
    &__bg--3 {
      width: 94px;
      height: 94px;
      opacity: .25;
      animation-delay: .4s;
      transition: all .5s;
    }
    &__bg--2 {
      width: 140px;
      height: 140px;
      opacity: .053;
      animation-delay: .6s;
      transition: all .5s;
    }
    &__bg--1 {
      width: 200px;
      height: 200px;
      opacity: .03;
      animation-delay: .8s;
      transition: all .5s;
    }
  }
}

@each $name, $color in $weaponColors {
  .popup-single--#{$name} {
    border-top-color: $color;
    .popup-single-item__bg {
      background: $color;
    }
    .popup-triangle {
      border-top-color: $color;
    }
    .popup-single__name {
      color: $color;
    }
    .popup-single-item__bg-wrapper {
      path:nth-child(2) {
        stroke: $color;
      }
    }
  }
}

</style>

