<template>
  <div style="position: relative" @mouseleave="isStop = false">
    <div class="header-items__overlay" @mouseover.native="isStop = true"></div>

    <div class="top-items-btn" @click="toggleTopBar"></div>
    <swiper v-if="!loading" 
      class="top-items-row" 
      ref="mySwiper" 
      :options="swiperOption">
      <swiperSlide style="text-align: center" 
        @mouseover.native="over($event, weapon._id)"
        v-for="weapon in weapons" :key="weapon._id">
        <div class="weapon-header__overlay" />

        <WeaponItemHeader :itemData="weapon">
        </WeaponItemHeader>
      </swiperSlide>
    </swiper>

    <transition name="fade">
      <div class="weapon-header__dropdown" 
        @mouseover.native="isStop = true" 
        :class="`weapon-header__dropdown--${currentHoverItem._weaponRarity}`" 
        :style="`left: ${computedLeftDistance}; top: ${topDistance}px`" v-if="isStop">
        <div class="weapon-header__triangle"
              :class="{ 'weapon-header__triangle--right': isLastRight, 'weapon-header__triangle--left': isLastLeft }" />
        <div class="weapon-header__user" @click="toUser(currentHoverItem._owner)">
          <img class="weapon-header__user-avatar" :src="currentHoverItem._ownerImageURL" alt="user avatar">
          <div class="weapon-header__user-name">{{ currentHoverItem._ownerName }}</div>
        </div>
        <div class="weapon-header__name">{{ currentHoverItem._name_hash }}</div>
        <img class="weapon-header__dropdown-img" :src="caseImgUrl(currentHoverItem._caseImage)" alt="case img">
      </div>
    </transition>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import constants from '@/constants';
import WeaponItemHeader from '@/components/partials/WeaponItemHeader';
import _ from 'lodash';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    WeaponItemHeader,
    swiper,
    swiperSlide
  },
  data() {
    return {
      weapons: [],
      leftDistance: 0,
      topDistance: 0,
      rightDistance: 0,
      viewportWidth: 0,
      widthOfElement: 0,
      newWeapons: [],
      currentHoverItem: null,
      isHidden: false,
      isStop: false,
      loading: true,
      swiperOption: {
        slidesPerView: 12,
        touchRatio: 0,
        setWrapperSize: true,
        spaceBetween: 0,
        breakpoints: {
          1440: {
            slidesPerView: 10,
          },
          1200: {
            slidesPerView: 8,
          },
          992: {
            slidesPerView: 6,
          },
          575: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 4,
          },
          400: {
            slidesPerView: 3,
          }
        }
      },
    }
  },
  computed: {
    isLastLeft() {
      return this.leftDistance < 270 || this.leftDistance === 76 || this.leftDistance === 0;
    },
    isLastRight() {
      return this.viewportWidth - this.leftDistance < (this.widthOfElement * 2);
    },
    computedLeftDistance() {
      if (this.isLastLeft) {
        return `${this.leftDistance + this.widthOfElement + (this.widthOfElement < 97 ? 10 : 0)}px`;
      }
      if (this.isLastRight) {
        return `${this.leftDistance - (this.widthOfElement < 97 ? 10 : 0)}px`;
      }

      return `${this.leftDistance + this.widthOfElement / 2}px`;
    },
  },
  methods: {
    toUser(id) {
      this.$router.push(`/user/${id}`);
    },
    toggleTopBar() {
      this.isHidden = !this.isHidden;
      document.querySelector('.main').classList.toggle('hide-top-row');
    },
    caseImgUrl(imgUrl) {
      return `${constants.imgUrl}${imgUrl}`;
    },
    getLeftDistance(el) {
      const rect = el.getBoundingClientRect();
      const docEl = document.documentElement;
      this.viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      this.widthOfElement = rect.width;
      this.leftDistance = rect.left + (window.pageXOffset || docEl.scrollLeft || 0);
      this.topDistance = 100 + rect.top + (window.pageYOffset || docEl.scrollTop || 0);
      this.rightDistance = rect.right - (window.pageXOffset || docEl.scrollRight || 0);
    },
    over(e, id) {
      this.isStop = true;
      this.getLeftDistance(e.target);
      this.currentHoverItem = this.weapons.find(weapon => weapon._id === id);
    },
    addNewWeapons() {
      if (this.newWeapons.length && !this.isStop && !this.isHidden) {
        this.weapons = _.drop(this.weapons, this.newWeapons[0].length);
        this.$nextTick(() => {
          this.weapons = this.weapons.concat(this.newWeapons[0]);
          this.newWeapons.shift();
            this.$nextTick(() => {
              this.$refs.mySwiper.swiper.slideTo(20, 700); 
            }); 
        })
      }
    },
  },
  mounted() {
    // setInterval(() => {
    //   this.addNewWeapons();
    // }, 2000);
  },
  sockets:{
      // items(val) {
      //   if (!this.isHidden && this.newWeapons.length < 20) {
      //     this.newWeapons.push(JSON.parse(val));
      //   } 
      // },
      // drops(val) {
      //   this.weapons = JSON.parse(val);
      //   this.loading = false;
      //   this.$nextTick(() => {
      //     this.$refs.mySwiper.swiper.slideTo(20, 700); 
      //   }); 
      // }
  }
};
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';


.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.weapon-header__overlay {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.header-items__overlay {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  top: 0;
}

.top-items-row {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 240px);
  height: 90px;
  margin-left: 240px;
  transition: transform .3s;
  z-index: 3;
  background: linear-gradient(3deg, #392f4a 0%, #25243b 100%);
  .swiper-slide {
    .weapon-header {
      img {
        max-width: 80px;
      }
    }
  }
}

.top-items-btn {
  height: 0;
  width: 42px;
  position: fixed;
  left: calc(50% + 120px);
  top: 0;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 9;
  border-top: 16px solid rgba(255, 255, 255, .1);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  &:before {
    content: "\e900";
    font-family: drop;
    color: $grey-text;
    position: absolute;
    top: -16px;
    left: 19px;
    font-size: 12px;
    transform: rotate(90deg);
    display: block;
    width: 4px;
    height: 15px;
  }
}

@media screen and (max-width: 768px) {
  .top-items-btn {
    left: 50%;
    top: 74px;
  }
  .top-items-row {
    margin-left: 0;
    width: 100%;
    top: 75px;
  }
}
</style>

