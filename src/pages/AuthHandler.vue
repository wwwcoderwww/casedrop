<template>
  <div>
    something went wrong
  </div>
</template>

<script>
import Api from '@/api/auth';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('auth', ['setToken', 'setUser'])
  },
  beforeRouteEnter: async(to, from, next) => {
    const form = new FormData();

    Object.keys(to.query).forEach((key) => {
      form.append(key, to.query[key]);
    });

    try {
      const response = await Api.getUserCredentials(form);
      next(vm => {
        vm.setToken(response.data.csrf);
        vm.setUser(response.data.user);
        next('/user');
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
</script>
