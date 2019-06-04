<template>
  <div class="alert success" v-click-outside="() => setStateModals({ type: 'success', show: false })">
    <div class="alert-icon">
      <span class="icon drop-check"></span>
    </div>
    <div class="alert-title">successful action</div>
    <div class="alert-text">{{ stateModalMsg }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ClickOutside from 'vue-click-outside';
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

