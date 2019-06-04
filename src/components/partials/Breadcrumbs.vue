<template>
  <div class="breadcrumb-row">
    <div class="breadcrumb-item" v-for="(breadcrumb, i) in breadcrumbs" :key="i">
      <a href="#" v-if="i === 0">{{ breadcrumb }}</a>
      <template v-else>{{ breadcrumb }}</template>
    </div>
  </div>
</template>

<style lang="scss">
.breadcrumb-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 0;
  .breadcrumb-item, a {
    margin-left: 15px;
    display: flex;
    align-items: center;
    font-family: SofiaProRegular, sans-serif;
    font-size: 13px;
    color: #A0A1A8;
    text-decoration: none;
    &:before {
      content: '';
      display: block;
      width: 25px;
      height: 2px;
      background: #A0A1A8;
      margin-right: 10px;
    }
    &:first-child {
      margin-left: 0;
      &:before {
        display: none;
      }
    }
  }
}
</style>


<script>
export default {
  props: ['breadcrumbs']
}
</script>

