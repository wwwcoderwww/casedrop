<template>
  <div class="case-item" :class="{'case-item--single': sigleItem}">
    <div class="case-item__location" v-if="!sigleItem">{{ itemData.box_name | toUppercase }}</div>

    <img class="case-item__img" :src="imgUrl" alt="">

    <button class="hover-gradient-btn" @click="navigateToBox(itemData.box_id)" v-if="!sigleItem">
      <span>${{ itemData.price | priceFormater }}</span>
    </button>
  </div>
</template>

<script>
import constants from '@/constants';

export default {
  props: {
    itemData: Object,
    sigleItem: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    navigateToBox(id) {
      this.$router.push(`/cases/${id}`);
    }
  },
  computed: {
    imgUrl() {
      return `${constants.imgUrl}${this.itemData.icon_back}`;
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.case-item {
  width: calc(16.66% - 30px);
  height: 215px;
  margin: 15px;
  padding-top: 15px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  position: relative;
  font-family: SofiaProRegular, sans-serif;
  &--single {
    width: 100%;
    margin: 0;
    box-shadow: none;
    .case-item__img {
      max-width: 220px;
      max-height: 190px;
    }
  }
  .hover-gradient-btn {
    display: block;
    position: absolute;
    bottom: 15px;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  &__location {
    font-size: 16px;
    color: $light-grey-text;
    text-align: center;
  }

  &__img {
    max-height: 110px;
    margin: 0 auto;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0%);
    max-width: 100%;
    display: block;
    &--single {

    }
  }
  &:hover {
    cursor: pointer;
    span {
      opacity: 0;
    }
  }
}
</style>
