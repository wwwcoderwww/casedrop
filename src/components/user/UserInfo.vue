<template>
  <div class="user-infoinformation" v-if="userInfo">
    <div class="user-logo">
      <div class="user-logo-bg"></div>
      <div class="user-logo-photo">
        <img :src="userInfo.steam_avatar" alt="">
      </div>
      <div class="user-logo-arrow"></div>
    </div>

    <div class="user-profile-info">
      <div class="user-name">{{ userInfo.steam_name }}</div>
      <a class="user-profile-steam" target="_blank" :href="steamProfileUrl">Profile Steam</a>
      <div class="user-balance" v-if="userInfo.balance !== null">
        <button class="hover-btn add-balance-btn" data-text="Add funds"></button>
        <div class="balance">{{ userInfo.balance }}</div>
      </div>
    </div>

    <div class="user-url" v-if="userInfo.trade_url !== null">
      <div class="your-url">Your Trade-Url
        <span class="get-url">Where to get Trade-URL</span>
      </div>
      <form action="/" class="flex">
        <div class="input-container pass">
          <input type="text" class="custom-input" :value="userInfo.trade_url">
        </div>
        <button class="gradient-btn save-btn">Save</button>
      </form>
    </div>

  </div>
</template>

<script>
import constants from '@/constants';

export default {
  props: ['userInfo'],
  computed: {
    steamProfileUrl() {
      return `${constants.steamProfileUrl}${this.userInfo.steam_id}`;
    }
  }
}
</script>



<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.user-infoinformation {
  padding: 30px;
  background: rgba(0, 0, 0, .2);
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  flex-wrap: wrap;
  .user-logo {
    display: block;
    width: 90px;
    height: 90px;
    min-width: 90px;
    order: inherit;
    margin-right: 22px;
  }
  .user-logo-photo {
    width: 86px;
    height: 86px;
  }
  .user-logo-arrow {
    display: none;
  }
}

.user-profile-steam {
  font-family: SofiaProRegular, sans-serif;
  font-size: 14px;
  color: $grey-text;
  margin-bottom: 5px;
  text-decoration: none;
  transition: $transition-time;
  &:hover {
    text-decoration: underline;
    color: $light-grey-text;
  }
}

.user-name {
  font-family: SofiaProMedium, sans-serif;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.add-balance-btn {
  width: 170px;
  margin-right: 20px;
}

.user-balance {
  display: flex;
  align-items: center;
  .balance {
    font-family: SofiaProSemiBold, sans-serif;
    font-size: 18px;
    &:before {
      content: '$';
    }
  }
}

.user-profile-info {
  min-width: 310px;
}

.user-url {
  font-family: SofiaProRegular, sans-serif;
  padding-top: 30px;
  min-width: 264px;
  .your-url {
    font-size: 14px;
    color: #fff;
    margin-bottom: 2px;
  }
  .get-url {
    color: #A0A1A8;
    font-size: 14px;
    margin-left: 17px;
  }
  .save-btn {
    width: 98px;
  }
  .custom-input {
    box-sizing: border-box;
  }
  .input-container {
    margin-right: 10px;
  }
  .save-btn {
    display: none;
  }
}

@media screen and (max-width: 1330px) {
  .add-balance-btn {
    width: 125px;
  }
  .user-profile-info {
    min-width: 247px;
  }
  .user-url {
    .input-container {
    width: 227px;
    }
    .save-btn {
    width: 78px;
    }
  }
}

@media screen and (max-width: 375px) {
  .user-infoinformation {
    padding: 20px;
  }
  .user-balance {
    flex-direction: column;
    align-items: flex-start;
  }
  .user-profile-info {
    min-width: 150px;
  }
  .user-infoinformation {
    .user-profile-info {
      flex-grow: 1  ;
    }
    .add-balance-btn {
      margin: 0 0 10px 0;
      width: 100%;
    }
  }
  .user-url {
    width: 100%;
    .flex {
      flex-direction: column;
    }
    .input-container {
      margin-right: 0;
      width: 100%;
    }
    .save-btn {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>

