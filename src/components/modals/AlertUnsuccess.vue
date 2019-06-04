<template>
  <div class="alert unsuccess" v-click-outside="() => setStateModals({ type: 'error', show: false })">
    <div class="alert-icon"></div>
    <div class="alert-title">unsuccessful action</div>
    <div class="alert-text">{{ stateModalMsg }}
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import { mapState, mapMutations } from 'vuex';
export default {
  directives: {
    ClickOutside
  },
  computed: {
    ...mapState('modals', ['stateModalMsg']),
  },
  methods: {
    ...mapMutations('modals', ['setStateModals']),
  },
}
</script>

