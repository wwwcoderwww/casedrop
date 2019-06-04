<template>
  <div :is="currentLayout"></div>
</template>

<script>
import MainLayout from '@/layouts/Main';

export default {
  name: 'app',
  components: {
    MainLayout
  },
  computed: {
    currentLayout() {
      return MainLayout;
    },
  },
};
</script>

<style style="scss" src="./assets/style/main.scss"></style>