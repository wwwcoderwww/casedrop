<template>
  <div>
    <div class="overlay" v-if="false"></div>

    <alert-success v-if="isSuccess"></alert-success>
    <alert-unsuccess v-if="isError"></alert-unsuccess>
    <alert-warning></alert-warning>
    <!-- <balance></balance> -->
    <customer-agreement></customer-agreement>
    <multi-won-items v-if="isMultiWonItem"></multi-won-items>
    <single-won-item v-if="isSingleWonItem"></single-won-item>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AlertSuccess from './AlertSuccess';
import AlertUnsuccess from './AlertUnsuccess';
import AlertWarning from './AlertWarning';
import Balance from './Balance';
import CustomerAgreement from './CustomerAgreement';
import MultiWonItems from './MultiWonItems';
import SingleWonItem from './SingleWonItem';

export default {
  components: {
    AlertSuccess,
    AlertUnsuccess,
    AlertWarning,
    Balance,
    CustomerAgreement,
    MultiWonItems,
    SingleWonItem
  },
  watch: {
    isSuccess(val) {
      if (val) {
        setTimeout(() => {
          this.closeModals();
        }, 3000);
      }
    },
    isError(val) {
      if (val) {
        setTimeout(() => {
          this.setStateModals({ type: 'error', show: false });
        }, 3000);
      }
    }
  },
  methods: {
    ...mapMutations('modals', ['closeModals', 'setStateModals']),
  },
  computed: {
    ...mapGetters('modals', ['isMultiWonItem', 'isSingleWonItem', 'isAnyModal', 'isSuccess', 'isError']),
  },
}
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.alert {
  width: 340px;
  padding: 40px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  &:before {
    content: '';
    display: block;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .alert-icon {
    color: $green-color;
    text-align: center;
    font-size: 26px;
    margin-bottom: 20px;
  }
  &.success {
    background: #1F482D;
    z-index: 1000;
    &:before {
      width: 14.28%;
      background: $green-color;
    }
  }
  &.warning {
    display: none;
    background: #4F472E;
    .alert-icon {
      width: 24px;
      height: 24px;
      border: 2px solid #F8E71C;
      border-radius: 50%;
      margin: 0 auto 15px;
      position: relative;
      &:before {
        content: '!';
        color: #F8E71C;
        text-align: center;
        font-size: 16px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:before {
      width: 50%;
      background: #F8E71C;
    }
  }
  &.unsuccess {
    background: #4A2838;
    z-index: 1000;
    .alert-icon {
      width: 24px;
      height: 24px;
      border: 2px solid $item-red;
      border-radius: 50%;
      margin: 0 auto 15px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        display: block;
        width: 12px;
        height: 2px;
        background: $item-red;
      }
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        display: block;
        width: 12px;
        height: 2px;
        background: $item-red;
      }
    }
    &:before {
      width: 85.7%;
      background: $item-red;
    }
  }
  .alert-title {
    font-size: 17px;
    color: $light-grey-text;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
  }
  .alert-text {
    font-size: 14px;
    color: #A0A1A8;
    text-align: center;
    margin-bottom: 25px;
  }
}

.popup-triangle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid transparent;
  border-top-width: 6px;
  border-top-style: solid;
}
.popup-close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 28px;
  line-height: 26px;
  cursor: pointer;
  color: #454050;
  &:hover {
    color: $grey-text;
  }
}

.popup {
  width: 340px;
  background: #2C2438;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  padding: 20px 40px 40px 40px;
  border-top-width: 3px;
  border-top-style: solid;
  .weapon-item {
    background: none;
    box-shadow: none;
    margin: 0;
  }
  .popup-item-title {
    font-size: 17px;
    color: $light-grey-text;
    text-align: center;
    text-transform: uppercase;
  }
}

.popup.popup-light-blue {
  border-top-color: $item-light-blue;
  .weapon-item-name {
    color: $item-light-blue;
  }
  .popup-triangle {
    border-top-color: $item-light-blue;
  }
}

.popup-nover-btn {
  width: 160px;
  &:before {
    background: #2C2438;
  }
}

.popup-sell-btn {
  width: 100%;
}

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .75);
  z-index: 10;
}

@media screen and (max-width: 768px) {
  .popup {
    .popup-nover-btn {
      width: 140px;
    }
  }
  .popup-one-item, .popup-few-items {
    .btn-row {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .popup {
    top: 90px;
    transform: translate(-50%, 0);
  }
}

@media screen and (max-height: 800px) {
  .popup {
    overflow-y: auto;
  }
  .popup-few-items {
    top: 52%;
    max-height: calc(100% - 50px);
  }
}

@media screen and (max-width: 660px) {
  .popup-agreement, .popup-balance {
    width: calc(100% - 30px);
    box-sizing: border-box;
    margin: 0 auto;
  }
}

@media screen and (max-height: 620px){
  .popup-agreement {
    max-height: calc(100% - 50px);
  }
}

@media screen and (max-height: 480px) {
  .popup-balance {
    max-height: calc(100% - 50px);
    overflow-y: auto;
  }
}

@media screen and (max-width: 480px){
  .popup {
    width: calc(100% - 30px);
    box-sizing: border-box;
    padding: 22px;
    .agreement-wrapper {
    padding-left: 15px;
    margin-bottom: 20px;
    }
  }
  .popup-agreement {
    padding-left: 0;
    padding-right: 0;
    .popup-agreement-text, .popup-item-title {
    padding: 0 15px;
    }
    .agreement-content {
    padding: 0 15px 0 0;
    }
  }
  .popup-agreement .mCustomScrollBox {
    padding-right: 30px;
  }
}

@media screen and (max-width: 420px){
  .alert {
    box-sizing: border-box;
    width: calc(100% - 30px);
    margin: 0 auto;
    padding: 20px;
  }
}
  @media screen and (max-width: 370px){
    .popup-few-items .popup-weapon-info .gradient-btn {
      font-size: 12px;
      line-height: 34px;
    }
  }
</style>
