<template>
  <div class="weapon-user" ref="weaponItem" :class="`weapon-user--${itemData.rarity}`">
    <div class="weapon-user__btns" v-if="isLoggedUser">
      <template v-if="itemData.status === 'sold'">
        <div class="weapon-user__status" :class="`weapon-user__status--${itemData.status}`">
          {{ itemData.status }}
        </div>
        <div class="weapon-user__price">${{ itemData.price | priceFormater }}</div>
      </template>
      <template v-if="itemData.status === 'waiting'">
        <div class="hover-btn send-btn" data-text="Send" @click="sendItem"></div>
        <div class="hover-btn sell-btn" :data-text="`Sell for $${itemData.price}`"></div>
      </template>
    </div>

    <div class="weapon-user__btns" v-else>
      <div class="weapon-user__status" :class="`weapon-user__status--${itemData.status}`">
        {{ itemData.status }}
      </div>
      <div class="weapon-user__price">${{ itemData.price | priceFormater }}</div>
    </div>
    <div class="weapon-user__bg-wrapper">
      <div class="weapon-user__circle"></div>
      <div  v-for="(item, i) in 4" 
            class="weapon-user__bg" :key="i" 
            :class="`weapon-user__bg--${i + 1}`">
      </div>
    </div>

    <img :src="imageUrl" alt="" class="weapon-user__img">
    <div class="weapon-user__name">
      <div>{{ itemData.name_hash.split('|')[0] }}</div>
      <div>{{ itemData.name_hash.split('|')[1] }}</div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js';
import constants from '@/constants';
import Api from '@/api';

export default {
  props: {
    itemData: Object
  },
  computed: {
    imageUrl() {
      return `${constants.imgUrl}${this.itemData.image_id}`;
    },
    isLoggedUser() {
      return this.$route.name === 'loggedUser';
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
    async sendItem() {
      try {
        const { data } = await Api.sendItem(this.itemData.prize_id);
        console.log(data);
      } catch (e) {
        throw new Error(e);
      }
    },
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
      const element = e.querySelector('.weapon-user__circle');

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

.weapon-user {
  width: calc(20% - 30px);
  height: 245px;
  margin: 15px;
  padding-top: 15px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  position: relative;
  /*font-family: SofiaProSemiBold, sans-serif;*/

  &__name {
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 90%;
    left: 5%;
    div:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__status {
    text-transform: capitalize;
    &--sold {
      &:before {
        content: "\e906";
        font-family: drop;
        margin-right: 10px;
        color: $item-red;
      }
    }
    &--accepted {
      &::before {
        content: "\e903";
        font-family: drop;
        margin-right: 10px;
        color: $green-color;
      }
    }
    &--waiting {
      &:before {
        content: "\e910";
        font-family: drop;
        margin-right: 10px;
        color: $item-yellow;
      }
    }
  }

  &__btns {
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
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64%;
    z-index: 0;
    pointer-events: none;
  }

  &__bg-wrapper {
    position: absolute;
    top: 45%;
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
  .weapon-user--#{$name} {
    .weapon-user__bg {
      background: $color;
    }
    .weapon-user__bg-wrapper {
      path:nth-child(2) {
        stroke: $color;
      }
    }
  }
}
</style>
