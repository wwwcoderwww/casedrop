<template>
  <div class="popup popup-few-items" :class="`popup--${wonItems[0].rarity}`">
    <div class="popup-triangle"></div>
    <div class="popup-close-btn" @click="closeModals">
      <span class="icon drop-close"></span>
    </div>

    <div class="spinner__wrapper--multimodal" v-if="loading">
      <spinner></spinner>
    </div>
    
    <template v-else>
      <div class="popup-item-title">Your winning</div>

      <multi-won-item @sellSingle="sellSingle" v-for="(item, index) in wonItems" :itemData="item" :key="`${item.id}-${index}`" />

      <div class="popup-btn-block">
        <div class="btn-row">
          <button class="hover-btn popup-nover-btn" @click="closeModals" data-text="Try again"></button>
          <button class="hover-btn popup-nover-btn" @click="toUser" data-text="My items"></button>
        </div>
        <button class="gradient-btn popup-sell-btn" @click="sellItems" v-if="notSelledItems.length">
          Sell items for ${{ allPrice | priceFormater }}
        </button>
      </div>
    </template>



  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Api from '@/api';
import MultiWonItem from './MultiWonItem';

export default {
  components: {
    MultiWonItem
  },
  data() {
    return {
      loading: false,
      allreadySold: [],
    }
  },
  computed: {
    ...mapState('modals', ['wonItems']),
    allPrice() {
      return this.notSelledItems.reduce((a, b) => a + b.price, 0);
    },
    notSelledItems() {
      return this.wonItems.filter(item => !this.allreadySold.includes(item.id));
    }
  },
  methods: {
    ...mapMutations('modals', ['closeModals', 'setStateModals']),
    toUser() {
      this.closeModals();
      this.$router.push('/user');
    },
    sellSingle(id) {
      this.allreadySold.push(id);
    },
    async sellItems() {
      const ids = this.notSelledItems.map(item => item.id);
      try {
        this.loading = true;
        const { data } = await Api.sellMultiCases(ids);
        if (data.result) {
          this.setStateModals({ type: 'success', show: true, msg: data.msg });
        } else {
          this.setStateModals({ type: 'error', show: true, msg: data.msg });
        }
        
        this.loading = false;
      } catch (e) {
        throw new Error(e);
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

.spinner__wrapper--multimodal {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}


.popup-image {
  transition: all 1s;
  border-radius: 3px;
  background: none;
  box-shadow: none;
  margin-right: 26px;
  min-height: 76px;
  min-width: 76px;
  position: relative;
  font-family: SofiaProSemiBold, sans-serif;

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
    max-width: 100%;
    z-index: 0;
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
  .popup-item--#{$name} {
    .popup-image__bg {
      background: $color;
    }
    .popup-item-name {
      color: $color;
    }
    .popup-image__bg-wrapper {
      path:nth-child(2) {
        stroke: $color;
      }
    }
  }
}

@each $name, $color in $weaponColors {
  .popup--#{$name} {
    color: $color;
    .popup-triangle {
      border-top-color: $color;
    }
  }
}

.popup-item-name {
  text-transform: uppercase;
  line-height: 16px;
  margin-bottom: 8px;
}


.popup-few-items {
  padding-left: 45px;
  padding-top: 30px;
  .popup-item-title {
    margin-bottom: 20px;
  }
  .popup-weapon-info {
    .gradient-btn {
      max-width: 230px;
    }
  }

  .popup-btn-block {
    padding-top: 30px;
  }
}

.popup-item {
  display: flex;
  margin-bottom: 20px;
}
</style>

