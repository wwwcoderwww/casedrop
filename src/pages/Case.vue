<template>
  <div class="spinner__wrapper--case" v-if="loading">
    <spinner></spinner>
  </div>

  <div class="container" v-else>
    <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>
    <Deposit v-if="modalDeposti" 
        @close="modalDeposti = false" 
      />

    <div class="outer-slider-row">
      <div class="slider-rirle">{{ boxInfo.name }}</div>

      <div class="case-items__wrapper" 
          :style="`max-height: ${245 * casesToOpen}px`" 
          v-if="isCaseToShow && !isError"
        >
        <case-item  
          v-for="i in 5" :key="`preview-case${i}`" 
          :itemData="boxInfo" sigleItem>
        </case-item>
      </div>

      <div v-if="isError && !loading">{{ errorMsg }}</div>

      <swiper :class="{'box-slider--action': isInSpin, 'box-slider--finish': isFinish }" class="box-slider"  
        v-for="(spinnerRow, rouletteIndex) in spinnerItems" 
        :key="'roulette' + rouletteIndex" 
        v-if="spinnerRow.length" 
        ref="mySwiper" 
        :options="swiperOption">
        <swiperSlide
        v-for="(weapon, weaponIndex) in spinnerRow" 
        :key="`roulette-item-${rouletteIndex}-${weaponIndex}`">
          <weapon-item-default :itemData="weapon" :type="'spinnerWeapon'" />
        </swiperSlide>
      </swiper>

      <div class="btn-row amount-case-picker">
        <button :class="{'case-btn--disabled': isInSpin }" class="gradient-btn case-btn" 
          @click="openCases" v-if="isOpen">
          {{ isInSpin ? 'Opening...' : `Open ${buttonText }` }}
        </button>
        
        <template v-else>
          <div class="custom-dropdown">
            <div class="dropdown-title" @click="isDropdown = !isDropdown">Cases to open:
              <span class="case-counter">{{ casesToOpen }}</span>
            </div>
            <div class="dropdown-list" v-if="isDropdown" v-click-outside="() => isDropdown = false">
              <div class="dropdown-triangle"></div>
              <div class="dropdown-list-item" @click="chooseCaseNumber(number)"
                v-for="number in amountOfCases" :key="'number' + number">
                Cases to open: {{ number }}
              </div>
            </div>
          </div>
          <button class="gradient-btn case-btn" @click="buyCases">
            Buy {{ buttonText }} ${{ priceToPay | priceFormater }}
          </button>
        </template>
      </div>
    </div>
    
    <board-title :type="'csgocases'">Casedrop Cases</board-title>

    <board>
      <weapon-item-default 
        v-for="(item, i) in boxItems" 
        :itemData="item" :key="i" :type="'caseWeapon'">
      </weapon-item-default>
    </board>
  </div>
</template>

<script>
import Api from '@/api';
import BoardTitle from '@/components/partials/BoardTitle';
import WeaponItemDefault from '@/components/partials/WeaponItemDefault';
import Board from '@/components/partials/Board';
import Breadcrumbs from '@/components/partials/Breadcrumbs';
import CaseItem from '@/components/partials/CaseItem';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ClickOutside from 'vue-click-outside';
import { mapMutations } from 'vuex';
import _ from 'lodash';

export default {
  props: ['id'],
  directives: {
    ClickOutside
  },
  components: {
    BoardTitle,
    WeaponItemDefault,
    Board,
    CaseItem,
    Breadcrumbs,
    swiper,
    swiperSlide,
    Deposit: () => import('@/components/modals/AlertDeposit')
  },
  mounted() {
    this.caseInfo();
  },
  computed: {
    priceToPay() {
      return this.boxInfo.price * this.casesToOpen;
    },
    buttonText() {
      return this.casesToOpen > 1 ? 'Those cases' : 'This case';
    },
    isCaseToShow() {
      for (let key in this.spinnerItems) {
        return _.isEmpty(this.spinnerItems[key]);
      }
    }
  },
  methods: {
    ...mapMutations('modals', ['setWonItems']),
    ...mapMutations('auth', ['setUserBalance']),
    chooseCaseNumber(number) {
      this.casesToOpen = number;
      this.isDropdown = false;
    },

    async reopenCase() {
      try {
        const { data } = await Api.reopenCase(this.id);
        this.casesToOpen = data.items.length;
        data.items.forEach((item, i) => {
          this.spinnerItems[i] = [...item, ...item];
        });
        this.isOpen = true;
        this.setUserBalance(data.balance);
        this.loading = false;
      } catch (e) {
        this.loading = false;
        throw new Error(e);
      }
    },

    async caseInfo() {
      try {
        this.loading = true;
        const { data } = await Api.getCaseInfo(this.id);
        this.boxItems = data.box_items;
        this.boxInfo = data.box;

        if (data.reopen) {
          this.reopenCase();
        } else {
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
      }
    },

    async openCases() {
      if (this.isInSpin) return;

      this.isInSpin = true;
      this.$refs.mySwiper.forEach((item, i) => {
        this.$refs.mySwiper[i].swiper.slideTo(46, 7000);
      });
 
      setTimeout(() => {
        this.isFinish = true;
      }, 7000);

      setTimeout(async () => {
        const { data } = await Api.resultOfCase(this.id);
        for (let key in this.spinnerItems) {
          this.spinnerItems[key] = [];
        }
        this.isOpen = false;
        this.isInSpin = false;
        this.isFinish = false;
        this.setWonItems(data.prize);
      }, 8500);
    },

    async buyCases() {
      try {
        this.loading = true;
        const { data } = await Api.buyCase(this.id, this.casesToOpen);
        if (data.result) {
          data.items.forEach((item, i) => {
            this.spinnerItems[i] = [...item, ...item];
          });
          this.isOpen = true;
          this.setUserBalance(data.balance);
        } else {
          this.errorMsg = data.msg;
          this.isError = true;
          this.modalDeposti = true
        }

        this.loading = false;
      } catch (e) {
        throw new Error(e);
      }
    }
  },
  data() {
    return {
      breadcrumbs: ['Casedrop Cases', this.id],
      boxItems: [],
      spinnerItems: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
      },
      isDropdown: false,
      isInSpin: false,
      isFinish: false,
      isError: false,
      modalDeposti: false,
      errorMsg: '',
      casesToOpen: 1,
      isOpen: false,
      amountOfCases: [1, 2, 3, 4, 5],

      boxInfo: {},
      loading: true,
      swiperOption: {
        slidesPerView: 6,
        initialSlide: 3,
        setWrapperSize: true,
        spaceBetween: 0,
        touchRatio: 0,
        centeredSlides: true,
      },
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';
.case-btn {
  width: 240px;
  &--disabled {
    opacity: .5;
    cursor: default;
  }
}

.spinner__wrapper--case {
  height: calc(100vh - 90px - 187px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-slider--action .swiper-slide {
  opacity: .25;
  transition: $transition-time;
}

.box-slider--finish .swiper-slide-prev, .box-slider--finish .swiper-slide-next {
  opacity: .6;
}

.box-slider--finish .swiper-slide-active {
  opacity: 1;
}

.case-items__wrapper {
  max-height: 230px !important;
  transition: all .5s;
  overflow: hidden;
  box-sizing: border-box;
}

.box-slider {
  margin-bottom: 10px;
  transition: $transition-time;
  /*opacity: .5;*/
  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: url(~img/red-partition.svg) no-repeat top center;
    z-index: 2;
  }
  .swiper-slide {
    opacity: .5;
    &.swiper-slide-prev, &.swiper-slide-next {
      opacity: .75;
    }
    &.swiper-slide-active {
      opacity: 1;
    }
  }
}



.amount-case-picker {
  margin-top: 20px;
}

.outer-slider-row {
  margin-bottom: 10px;
  .slider-rirle {
    text-align: center;
    color: $grey-text;
    font-family: SofiaProMedium, sans-serif;
    font-size: 17px;
    text-transform: uppercase;
    margin-bottom: 25px;
  }
}

.custom-dropdown {
  width: 240px;
  height: 35px;
  border-radius: 30px;
  background: rgba(0, 0, 0, .2);
  position: relative;
  .dropdown-title {
    font-size: 16px;
    color: $grey-text;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
    &:after {
      content: "\e900";
      font-family: drop;
      font-size: 12px;
      color: $grey-text;
      transform: rotate(-90deg);
      display: inline-block;
      margin-left: 10px;
      transition: all .2s;
      transform-origin: center;
    }
  }
  &.show {
    .dropdown-title {
      &:after {
        transform: rotate(90deg);
      }
    }
  }
  .case-counter {
    /*color: #fff;*/
    margin-left: 5px;
  }
  // .dropdown-list {
  //   position: absolute;
  //   z-index: 2;
  //   top: calc(100% + 15px);
  //   right: 22px;
  //   padding: 10px;
  //   background: #1b1823;
  // }
  .dropdown-triangle {
    position: absolute;
    right: 20px;
    top: -20px;
    border: 10px solid transparent;
    border-bottom: 10px solid #1b1823;
  }
  .dropdown-list-item {
    font-size: 14px;
    color: $grey-text;
    padding: 5px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
}

.custom-dropdown.show {
  .dropdown-list {
    display: block;
  }
}
</style>
