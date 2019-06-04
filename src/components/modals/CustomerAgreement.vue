<template>
  <div class="popup popup-agreement">
    <div class="popup-triangle"></div>
    <div class="popup-close-btn">
      <span class="icon drop-close"></span>
    </div>

    <div class="popup-item-title">CASEDROP CUSTOMER AGREEMENT</div>
    <div class="popup-agreement-text">By clicking the "Accept" button, you confirm that you have reached the age of 18, and you have read and agree with the
      Casedrop Terms of Service:
    </div>

    <div class="agreement-wrapper">
      <div class=" agreement-content popup-agreement-text">
        <p>No individual under the age of eighteen (18) may use the Service, regardless of any consent from your parent or guardian
          to use the Service. You need a supported Web browser to access the Service. You acknowledge and agree that Casedrop.com
          may cease to support a given Web browser and that your continuous use of the Service will require you to download
          a supported Web browser. You also acknowledge and agree that the performance of the Service is incumbent on the
          performance of your computer equipment and your Internet connection. You agree to register and sigh on the Services
          through your Steam account provided by the Valve Corporation. You are solely responsible for managing your account
          and password and for keeping your password confidential. You are also solely responsible for restricting access
          to your account. You agree that you are responsible for all activities that occur on your account or through the
          use of your password by yourself or by other persons. If you believe that a third party has access to your password,
          use the password regeneration feature of the Service to obtain a new password as soon as possible. In all circumstances,
          you agree not to permit any third party to use or access the Service.
        </p>
        <p>No individual under the age of eighteen (18) may use the Service, regardless of any consent from your parent or guardian
          to use the Service. You need a supported Web browser to access the Service. You acknowledge and agree that Casedrop.com
          may cease to support a given Web browser and that your continuous use of the Service will require you to download
          a supported Web browser. You also acknowledge and agree that the performance of the Service is incumbent on the
          performance of your computer equipment and your Internet connection. You agree to register and sigh on the Services
          through your Steam account provided by the Valve Corporation. You are solely responsible for managing your account
          and password and for keeping your password confidential. You are also solely responsible for restricting access
          to your account. You agree that you are responsible for all activities that occur on your account or through the
          use of your password by yourself or by other persons. If you believe that a third party has access to your password,
          use the password regeneration feature of the Service to obtain a new password as soon as possible. In all circumstances,
          you agree not to permit any third party to use or access the Service.
        </p>
        <p>No individual under the age of eighteen (18) may use the Service, regardless of any consent from your parent or guardian
          to use the Service. You need a supported Web browser to access the Service. You acknowledge and agree that Casedrop.com
          may cease to support a given Web browser and that your continuous use of the Service will require you to download
          a supported Web browser. You also acknowledge and agree that the performance of the Service is incumbent on the
          performance of your computer equipment and your Internet connection. You agree to register and sigh on the Services
          through your Steam account provided by the Valve Corporation. You are solely responsible for managing your account
          and password and for keeping your password confidential. You are also solely responsible for restricting access
          to your account. You agree that you are responsible for all activities that occur on your account or through the
          use of your password by yourself or by other persons. If you believe that a third party has access to your password,
          use the password regeneration feature of the Service to obtain a new password as soon as possible. In all circumstances,
          you agree not to permit any third party to use or access the Service.
        </p>
        <p>No individual under the age of eighteen (18) may use the Service, regardless of any consent from your parent or guardian
          to use the Service. You need a supported Web browser to access the Service. You acknowledge and agree that Casedrop.com
          may cease to support a given Web browser and that your continuous use of the Service will require you to download
          a supported Web browser. You also acknowledge and agree that the performance of the Service is incumbent on the
          performance of your computer equipment and your Internet connection. You agree to register and sigh on the Services
          through your Steam account provided by the Valve Corporation. You are solely responsible for managing your account
          and password and for keeping your password confidential. You are also solely responsible for restricting access
          to your account. You agree that you are responsible for all activities that occur on your account or through the
          use of your password by yourself or by other persons. If you believe that a third party has access to your password,
          use the password regeneration feature of the Service to obtain a new password as soon as possible. In all circumstances,
          you agree not to permit any third party to use or access the Service.
        </p>
      </div>
    </div>

    <div class="popup-btn-block">
      <button class="gradient-btn">Accept</button>
    </div>

  </div>
</template>

<style lang="scss">
.popup-agreement {
  display: none;
  width: 560px;
  border-top: none;
  padding-top: 27px;
  .popup-item-title {
    position: static;
    margin-bottom: 8px;
    & + .popup-agreement-text {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .popup-agreement-text {
    font-size: 14px;
    color: #A0A1A8;
  }
  .agreement-wrapper {
    width: 100% !important;
    max-height: 354px;
    overflow: hidden;
    background: rgba(0, 0, 0, .2);
    padding: 15px 10px 15px 30px;
    box-sizing: border-box;
    margin-bottom: 30px;
  }
  .gradient-btn {
    width: 160px;
    display: block;
    margin: 0 auto;
  }
  ///////////////////////////////////////////////
  //---------CUSTOM SCROLL ---------------------
  ///////////////////////////////////////////////

  .mCSB_inside > .mCSB_container {
    margin-right: -30px;
  }
  .mCSB_scrollTools {
    width: 10px;
  }
  .mCustomScrollBox {
    padding-right: 60px;
  }
  .mCSB_scrollTools .mCSB_draggerRail {
    background: rgba(255, 255, 255, .15);
  }
  .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background: #5F5965;
  }
}
</style>

