<template>
  <div class="popup-item" :class="`popup-item--${itemData.rarity}`">
    <div class="popup-image" ref="weaponItem">
      <div class="popup-image__bg-wrapper">
        <div class="popup-image__circle"></div>
        <div  v-for="(item, i) in 4" 
              class="popup-image__bg" :key="i" 
              :class="`popup-image__bg--${i + 1}`">
        </div>
      </div>

      <img class="popup-image__img" :src="weaponImgUrl(itemData.image_id)" alt="">
    </div>

    <div class="popup-weapon-info">
      <div class="popup-item-name">{{ itemData.name_hash }}</div>
      <div class="popup-item--sold" v-if="isSold === true">{{ msg }}</div>
      <div class="popup-item--unsold" v-if="isSold === false">{{ msg }}</div>
      <button class="gradient-btn popup-sell-btn" v-if="isSold === null" @click="sell">
        Sell item for ${{ itemData.price | priceFormater }}
      </button>
    </div>
  </div>
</template>

<script>
import constants from '@/constants';
import ProgressBar from 'progressbar.js';
import Api from '@/api';
import { mapMutations } from 'vuex';

export default {
  props: ['itemData'],
  data() {
    return {
      isSold: null,
    }
  },
  methods: {
    ...mapMutations('modals', ['setStateModals']),
    weaponImgUrl(imgId) {
      return `${constants.headerImgUrl}${imgId}`;
    },
    async sell() {
      try {
        const { data } = await Api.sellCase(this.itemData.id);
        this.isSold = data.result;
        this.msg = data.msg;
        if (data.result) {
          this.$emit('sellSingle', this.itemData.id);
        }
        
      } catch (e) {
        throw new Error(e);
      }
    },
    handleScroll(e) {
      const circleCounter = e.querySelectorAll('svg').length;
      const element = e.querySelector('.popup-image__circle');

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
  },
  mounted() {
    this.handleScroll(this.$refs.weaponItem);
  },
}
</script>

<style lang="scss">
.popup-item--sold {
  color: #00824a !important;
}

.popup-item--unsold {
  color: #E84C4F !important;
}
</style>

