<template>
  <div class="container">
    <div class="tabs-wrapper">
      <swiper
        class="tabs-row" 
        :options="swiperOption">
        <swiper-slide class="tab-item tab-item--active">
          <router-link to="case/create">Case creator</router-link>
        </swiper-slide>
        <swiper-slide class="tab-item">
          Upgrade
        </swiper-slide>
        <swiper-slide class="tab-item">
          Case battle
        </swiper-slide>
        <swiper-slide class="tab-item">
          CS:GO cases
        </swiper-slide>
      </swiper>

      <div class="tab-btn tab-btn--left"></div>
      <div class="tab-btn tab-btn--right"></div>
    </div>


    <template v-for="(group, groupName) in casedropsGrouped">
      <board-title :type="group[0].category_id" :key="groupName">{{ groupName }}</board-title>

      <board :key="groupName + 1">
        <div :is="typeOfWeapon(group[0].category_id)" v-for="(casedrop, i) in group" :key="i" 
          :itemData="casedrop" />
      </board>
    </template>

  </div>
</template>

<script>
import Api from '@/api';
import BoardTitle from '@/components/partials/BoardTitle';
import WeaponItemDefault from '@/components/partials/WeaponItemDefault';
import CaseItem from '@/components/partials/CaseItem';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Board from '@/components/partials/Board';
import _ from 'lodash';

export default {
  components: {
    BoardTitle,
    CaseItem,
    WeaponItemDefault,
    Board,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        setWrapperSize: true,
        touchRatio: 0,
        spaceBetween: 0,
        navigation: {
          nextEl: '.tab-btn--right',
          prevEl: '.tab-btn--left'
        },
        breakpoints: {
          950: {
            slidesPerView: 2,
          },
          475: {
            slidesPerView: 1,
          }
        }
      },
      casedropsGrouped: [],
      typesOfWeapon: {
        skinrarity: 'CaseItem',
        weapons: 'CaseItem',
        csgocases: 'CaseItem',
        csgocollections: 'CaseItem',
        randomweapon: 'CaseItem',
        russian: 'CaseItem'
      }
    }
  },
  methods: {
    typeOfWeapon(category) {
      return this.typesOfWeapon[category];
    }
  },
  async mounted() {
    try {
      const { data } = await Api.casedropCases();
      this.casedropsGrouped = _.groupBy(data.boxes, 'group_name');
    } catch (e) {
      throw new Error(e);
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.tabs-wrapper {
  position: relative;
}

.tab-btn {
  position: absolute;
  display: none;
  height: 100%;
  width: 54px;
  z-index: 2;
  top: 0;
  font-size: 20px;
  background: linear-gradient(135deg, #6C708E 0%, #EE2849 100%);
  &::before {
    position: absolute;
    top: 50%;
    left: 50%; 
  }
  &--left {
    left: 0;
    &:before {
      content: "\e900";
      font-family: drop;
      transform: translate(-50%, -50%);
    }
  }
  &--right {
    right: 0;
    &:before {
      content: "\e900";
      transform: translate(-50%, -50%) rotate(180deg);
      display: block;
      font-family: drop;
    }
  }
}


.tabs-row {
  margin-top: 35px;
  margin-bottom: 47px;
  .tab-item {
    height: 50px;
    color: $grey-text;
    text-transform: uppercase;
    cursor: pointer;
    background: #2e2837;
    text-align: center;
    line-height: 48px;
    position: relative;
    font-size: 15px;
    transition: all .5s;
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 26px;
      background: rgba(255, 255, 255, 0.15);
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%)
    }
    &--active {
      color: #fff;
      background: linear-gradient(135deg, #6C708E 0%, #EE2849 100%);
      &:before {
        content: '';
        display: block;
        width: 2px;
        height: 100%;
        background: #6C708E;
        position: absolute;
        left: -2px;
        top: 0;
      }
      &:first-child {
        &:before {
          display: none;
        }
      }
      &:after {
        display: none;
      }
    }
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      &:after {
        display: none;
      }
    }
    a {
      color: $light-grey-text;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 950px) {
  .tab-btn {
    display: block;
    outline: none;
  }
  .tab-item--active {
    color: #EE2849 !important;
    background: #2e2837 !important;
  }
  .tabs-wrapper {
    padding: 0 48px;
  }
}

</style>
