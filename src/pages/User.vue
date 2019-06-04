<template>
  <div class="container">
    <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>

    <user-info :userInfo="userInfo"></user-info>
    
    <items-sell v-if="isLoggedUser"></items-sell>

    <board-title :type="'csgocases'">
      <span>Items</span>
      <span class="board-case-counter">{{ userCases.length }} cases opened</span>
    </board-title>

    <board>
      <weapon-item-user v-for="weapon in userCases" :itemData="weapon" :key="weapon._id"></weapon-item-user>
    </board>

    <!-- <div class="pagination-row" v-if="metaData.last_page > 1">
      <div class="pagination-item" @click="currentPage = (i + 1)" :class="currentPage === (i + 1) ? 'active' : ''" 
        v-for="(item, i) in metaData.last_page" :key="i">
        {{ i + 1 }}
      </div>
    </div> -->
  </div>
</template>

<script>
  import UserInfo from '@/components/user/UserInfo';
  import ItemsSell from '@/components/user/ItemsSell';
  import Breadcrumbs from '@/components/partials/Breadcrumbs';
  import Api from '@/api';
  import Board from '@/components/partials/Board';
  import { mapState } from 'vuex';
  import BoardTitle from '@/components/partials/BoardTitle';
  import WeaponItemUser from '@/components/partials/WeaponItemUser';

  export default {
    components: {
      UserInfo,
      ItemsSell,
      BoardTitle,
      Board,
      WeaponItemUser,
      Breadcrumbs
    },
    watch: {
      $route: {
        immediate: true,
        async handler(val) {
          this.getUserCases();

          if (val.name === 'user') {
            this.getUserInfo(val.params.id);
          } else {
            this.getUserTable();
            this.userInfo = this.user;
          }
        }
      },
      currentPage() {
        this.getUserCases();
      }
    },
    computed: {
      ...mapState('auth', ['user']),
      isLoggedUser() {
        return this.$route.name === 'loggedUser';
      },
      userId() {
        return this.isLoggedUser ? this.user.steam_id : this.$route.params.id;
      }
    },
    methods: {
      async getUserCases() {
        const { data } = await Api.userUserCases(this.userId, this.currentPage);
        this.userCases = data.data;
        console.log(data);
        this.metaData = data.meta;
      },
      async getUserInfo(id) {
        try {
          const { data } = await Api.getUserInfo(id);
          this.userInfo = data.user;
        } catch (e) {
          throw new Error(e);
        }
      },
      async getUserTable() {
        try {
          const response = await Api.userTable();
          console.log(response);
        } catch (e) {
          throw new Error(e);
        }
      }
    },
    data() {
      return {
        breadcrumbs: ['Home', 'Casedrop.com'],
        userCases: [],
        userInfo: null,
        metaData: [],
        currentPage: 1
      }
    }
  };
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';
.pagination-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  .pagination-item {
    width: 35px;
    min-width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    background: rgba(0, 0, 0, .2);
    color: $grey-text;
    line-height: 34px;
    text-align: center;
    margin-right: 10px;
    &.active {
      background: linear-gradient(90deg, #ef2849 0%, #7568e7 100%);
      color: #fff;
    }
  }
}

.board-case-counter {
  font-size: 17px;
  text-transform: uppercase;
  color: $light-grey-text;
}

@media screen and (max-width: 480px){
  .board-case-counter {
    display: none;
  }
}
</style>