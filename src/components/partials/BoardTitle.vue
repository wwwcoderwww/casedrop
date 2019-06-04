<template>
  <div :class="`board-title board-title--${type}`"><slot></slot></div>
</template>

<script>
export default {
  props: ['type']
}
</script>


<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.board-title {
  height: 50px;
  line-height: 48px;
  text-transform: uppercase;
  font-size: 17px;
  color: $light-grey-text;
  background: rgba(0, 0, 0, 0.1);
  padding-left: 60px;
  padding-right: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:before {
    content: "\E902";
    font-family: drop;
    font-size: 20px;
    color: #fff;
    position: absolute;
    left: 20px;
    top: -4px;
    line-height: 54px;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: $light-red;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &--csgocases, &--weapons {
    &:before {
      content: "\e902";
    }
  }
  &--skinrarity {
    &:before {
      content: "\e90d";
    }
  }
  &--randomweapon {
    &:before {
      content: "\e90c";
    }
  }
  &--csgocollections {
    &:before {
      content: "\e905";
    }
  }
}
</style>
