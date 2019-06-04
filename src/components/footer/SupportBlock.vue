<template>
  <div class="support-block">

    <div class="company-info">
      <span class="company-name">Casedrop.com</span>&nbsp;&copy;&nbsp;2018
      <a href="#" class="company-terms">Terms of Service</a>
    </div>

    <div class="support-text">You can open various cases on our website CS:GO for the best prices.
      <br>All trades work in the automatic mode via Steam bots.</div>
    <div class="mail-block">
      <a href="mailto:support@casedrop.com">support@casedrop.com</a>
    </div>
    <div class="pay-block">
      <a href="#">
        <img src="~img/pay.png" alt="">
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.support-block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 46%;
  padding-bottom: 30px;
  .support-text {
    width: 100%;
    color: $grey-text;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 14px;
  }
}

.mail-block {
  margin-right: 40px;
  margin-top: 4px;
  a {
    font-size: 15px;
    color: #f2f2f2;
    text-decoration: none;
    &:before {
      content: "\e90a";
      font-family: drop;
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  }
}

.company-info {
  color: $grey-text;
  margin-bottom: 12px;
}

.company-name {
  text-transform: uppercase;
}

.company-terms {
  color: #f2f2f2;
  text-decoration: underline;
  margin-left: 5px;
  white-space: nowrap;
}

.pay-block {
  margin-top: 10px;
}

@media screen and (max-width: 1200px) {
  .support-block {
    width: 65%;
  }
}

@media screen and (max-width: 1024px) {
  .support-block {
    width: 50%;
  }
}

@media screen and (max-width: 992px) {
  .support-block {
    width: 21%;
  }
}

@media screen and (max-width: 768px) {
  .support-block {
    width: 50%;
  }
}

@media screen and (max-width: 700px) {
  .support-block {
    width: 100%;
  }
}
</style>

