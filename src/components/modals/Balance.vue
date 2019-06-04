<template>
  <div class="popup popup-balance">
    <div class="popup-triangle"></div>
    <div class="popup-close-btn">
      <span class="icon drop-close" @click="$emit('close')"></span>
    </div>

    <div class="popup-item-title">Filling up the balance</div>

    <div class="input-container">
      <input type="text" class="custom-input" placeholder="Enter amount">
    </div>

    <div class="payment-title">Choose your payment method</div>

    <div class="payment-wrapper">

      <!--<div class="payment-item-wrapper active">-->
      <!--<div class="payment-item g2a">-->
      <!--<img src="@/assets/img/G2A.svg" alt="">-->
      <!--</div>-->
      <!--</div>-->

      <div class="payment-item-wrapper active">
        <div class="payment-item">
          <div class="payment-logo">
            <img src="@/assets/img/g2a-logo.svg" alt="">
          </div>
          <div class="payment-name">
            <img src="@/assets/img/g2a-text.svg" alt="">
          </div>
        </div>
      </div>

      <div class="payment-item-wrapper">
        <div class="payment-item">
          <div class="payment-logo">
            <img src="@/assets/img/pay-skins.svg" alt="">
          </div>
          <div class="payment-name">Pay by skins</div>
        </div>
      </div>

      <div class="payment-item-wrapper">
        <div class="payment-item">
          <div class="payment-logo">
            <img src="@/assets/img/promocode.svg" alt="">
          </div>
          <div class="payment-name">Promo Code</div>
        </div>
      </div>
    </div>

    <div class="popup-comment">Payments could be delayed for 5-10 minutes!</div>

    <div class="popup-btn-block">
      <button class="gradient-btn">Pay now</button>
    </div>

  </div>
</template>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';
.payment-wrapper {
  display: flex;
  margin: 0 -5px 13px;
  .payment-item-wrapper {
    width: calc(33.33% - 10px);
    height: 85px;
    position: relative;
    background: transparent;
    border-radius: 3px;
    margin: 0 5px;
    &.active {
      background: linear-gradient(135deg, #ef2849 0%, #7568e7 100%);
      .payment-name {
        color: $light-grey-text;
      }
    }
  }
  .payment-item {
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background: #231d2d;
    border-radius: 3px;
    padding: 20px;
  }
  .payment-item.g2a {
    img {
      display: block;
      margin: 0 auto;
    }
  }
  .payment-logo {
    width: 22px;
    height: 22px;
    margin: 0 auto 5px;
    img {
      display: block;
      //width: 100%;
    }
  }
  .payment-title {
    color: #A0A1A8;
    font-size: 14px;
    text-transform: uppercase;
  }
  .payment-name {
    font-size: 14px;
    color: #A0A1A8;
    text-transform: uppercase;
    text-align: center;
  }
}

.payment-title {
  font-size: 14px;
  text-transform: uppercase;
  color: $light-grey-text;
  text-align: center;
}

.popup-balance {
  display: block;
  width: 530px;
  border-top: none;
  .popup-item-title {
    margin-bottom: 30px;
  }
  .input-container {
    width: auto;
    margin-bottom: 30px;
    position: relative;
    &:before {
      content: '$';
      position: absolute;
      right: 20px;
      top: 1px;
      font-size: 16px;
      color: #fff;
      font-family: SofiaProSemiBold, sans-serif;
    }
  }
  .custom-input {
    box-sizing: border-box;
  }
  .payment-title {
    margin-bottom: 10px;
  }
  .gradient-btn {
    width: 160px;
    display: block;
    margin: 0 auto;
  }
}

.popup-comment {
  font-size: 14px;
  color: #6F7287;
  text-align: center;
  margin-bottom: 24px;
}

@media screen and (max-width: 575px) {
  .payment-wrapper {
    flex-direction: column;
    .payment-item-wrapper {
    width: 100%;
    height: 50px;
    }
    .payment-item {
    display: flex;
    padding: 13px;
    justify-content: center;
    }
    .payment-logo {
    margin: 0 10px;
    }
  }
}
</style>
