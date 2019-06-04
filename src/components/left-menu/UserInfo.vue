<template>
  <div class="user-info-block">

    <div class="sign-in-btn" id="signInBtn" @click="getLink" v-if="!isAuthenticated">
      <span>Sign in</span>
    </div>

    <div class="user-logo" v-if="isAuthenticated">
      <div class="user-logo-bg"></div>
      <div class="user-logo-photo" @click="isUserMenu = !isUserMenu">
        <img :src="user.steam_avatar" alt="user avatar">
      </div>
      <div class="user-logo-arrow" @click="isUserMenu = !isUserMenu"></div>
      <div class="user-dropdown-menu" v-if="isUserMenu" v-click-outside="() => isUserMenu = false">
        <div class="triangle"></div>
        <div class="user-menu-item" @click="$router.push({ name: 'loggedUser' })">Profile</div>
        <div class="user-menu-item">Add funds</div>
        <div class="user-menu-item" @click="userLogout">Logout</div>
      </div>
    </div>
    <div class="user-money-balance" v-if="isAuthenticated">
      <div class="money-balance">{{ user.balance }}</div>
      <a href="#" class="user-add-money-btn">+ Add Funds</a>
    </div>
    <div class="user-localisation">

      <div class="current-localisation" @click="isLocalization = !isLocalization">
        <div :class="`localisation-img bg-${selectedFlag}Normal`"></div>
        <div class="localisation-lang">{{ selectedFlag }}</div>
      </div>

      <div class="localisation-dropdown" v-if="isLocalization" v-click-outside="() => isLocalization = false">
        <div class="triangle"></div>
        <div class="localisation-item" v-for="flag in flags" :key="flag" @click="selectFlag(flag)">
          <div :class="`localisation-img bg-${flag}Normal`"></div>
          <div class="localisation-lang">{{ flag }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Api from '@/api/auth';
import { mapState, mapGetters, mapMutations } from 'vuex';
import ClickOutside from 'vue-click-outside';

export default {
  directives: {
    ClickOutside
  },
  data() {
    return {
      flags: ['TH', 'MC', 'BR', 'PT', 'ES', 'TR', 'JP', 'KR', 'PL', 'CN', 'IT', 'NL', 'DE', 'GB', 'FR', 'RU'],
      selectedFlag: 'EN',
      isUserMenu: false,
      isLocalization: false
    }
  },
  computed: {
    ...mapGetters('User', ['isAuthenticated']),
    ...mapState('User', ['user'])
  },
  methods: {
    ...mapMutations('User', ['userLogout']),
    async getLink() {
      try {
        const response = await Api.getAuthURL();
        window.location.href = response.data.redirect;
      } catch (e) {
        throw new Error(e);
      }
    },
    selectFlag(flag) {
      this.selectedFlag = flag;
      this.localizationToggle();
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/style/partials/_mixins.scss';
@import '@/assets/style/partials/_colors.scss';

.user-info-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 23px;
  margin-bottom: 23px;
  transition: none;
}

.user-money-balance {
  padding-top: 6px;
  order: 2;
  .money-balance {
    color: #fff;
    font-size: 15px;
    &:before {
      content: '$';
    }
  }
  .user-add-money-btn {
    font-size: 14px;
    color: #EE2849;
    text-decoration: none;
    white-space: nowrap;
    @include transform-left-center;
    transition: none;
  }
}

.user-logo-arrow {
  width: 13px;
  height: 13px;
  background: #000;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: -7px;
  transform: translateX(-50%);
  border-radius: 50%;
  &:before {
    content: "\e900";
    font-family: drop;
    color: #fff;
    font-size: 8px;
    line-height: 10px;
    display: inline-block;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: absolute;
    top: 2px;
    left: 5px;
  }
}

.user-logo-photo {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  background: #000;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.user-logo {
  position: relative;
  width: 50px;
  height: 50px;
  order: 1;
}

.user-logo-bg {
  background: linear-gradient(135deg, #ef2849 0%, #7568e7 100%);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

.localisation-dropdown {
  box-sizing: border-box;
  width: 190px;
  display: flex;
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: #000;
  padding: 15px 0 0 15px;
  flex-wrap: wrap;
  z-index: 4;
  .triangle {
    position: absolute;
    top: -13px;
    right: 4px;
    transform: translateX(-50%);
    border: 7px solid transparent;
    border-bottom: 6px solid #000;
  }
  .localisation-img {
    margin-right: 5px;
  }
}

.user-localisation {
  width: 34px;
  height: 50px;
  border-radius: 2px;
  background: rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  order: 3;
  position: relative;
}

.current-localisation {
  cursor: pointer;
}

.localisation-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 33.33%;
  margin-bottom: 14px;
  .localisation-img {
    width: 15px;
    height: 11px;
    position: relative;
    top: 2px;
  }
  &:hover .localisation-lang {
    color: #fff;
  }
}

.localisation-lang {
  font-size: 12px;
  text-transform: uppercase;
  color: $grey-text;
}

.localisation-img {
  width: 16px;
  height: 10px;
  margin-bottom: 7px;
  border-radius: 2px;
  background: url('~img/sprite.png') no-repeat;
}

.sign-in-btn {
  width: 82px;
  height: 50px;
  border-radius: 30px;
  background: linear-gradient(90deg, #ef2849 0%, #7568e7 100%);
  font-size: 15px;
  text-transform: uppercase;
  padding-left: 66px;
  line-height: 48px;
  cursor: pointer;
  position: relative;
  span {
    @include transform-left-center;
  }
  &:before {
    content: "\e90f";
    font-family: 'drop', sans-serif;
    color: #fff;
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 11px;
    left: 26px;
    line-height: 28px;
    font-size: 19px;
    transition: all 0s;
  }
}

.user-dropdown-menu {
  position: absolute;
  z-index: 1;
  top: calc(100% + 18px);
  left: calc(50% - 18px);
  background: #000;
  width: 92px;
  padding: 10px 15px;
  .triangle {
    position: absolute;
    top: -13px;
    left: 20px;
    transform: translateX(-50%);
    border: 7px solid transparent;
    border-bottom: 6px solid #000;
  }
}

.user-logo.open-menu {
  .user-dropdown-menu {
    display: block;
  }
  .user-logo-arrow:before {
    transform: rotate(90deg);
    left: 4px;
  }
}

.user-menu-item {
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  color: $grey-text;
  padding: 5px 0;
  &:hover {
    color: #fff;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}

.user-info-block.sign-in {
  .sign-in-btn {
    display: none;
  }
  .user-logo, .user-money-balance {
    display: block;
  }
}


.bg-BRNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -45px -10px;
}

.bg-ENNormal {
  background-position: -176px -31px;
}

.bg-CNNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -80px -73px;
}

.bg-DENormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -10px -42px;
}

.bg-ESNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -45px -42px;
}

.bg-FRNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -80px -10px;
}

.bg-GBNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -80px -41px;
}

.bg-ITNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -10px -73px;
}

.bg-JPNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -45px -73px;
}

.bg-KRNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -150px -10px;
}

.bg-MCNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -115px -10px;
}

.bg-NLNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -115px -41px;
}

.bg-PLNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -115px -72px;
}

.bg-PTNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -10px -104px;
}

.bg-RUNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -45px -104px;
}

.bg-THNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -80px -104px;
}

.bg-TRNormal {
  width: 15px;
  height: 11px;
  background: url('~img/flag-sprite.png') -115px -104px;
}

.bg-USNormal {
  width: 15px;
  height: 12px;
  background: url('~img/flag-sprite.png') -10px -10px;
}

@media screen and (max-width: 575px) {
  .sign-in-btn {
    width: 50px;
    padding-left: 0;
    &:before {
    left: 14px;
    }
    span {
    display: none;
    }
  }
}
</style>

