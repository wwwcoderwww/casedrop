<template>
  <div class="left-menu-logo">
    <div class="logo-block">
      <router-link to="/">
        <img class="big-logo" src="~img/logoNormal.svg" alt="Logo">
        <img class="small-logo" src="~img/small-logo.svg" alt="Logo">
      </router-link>
    </div>
    <div class="small-logo-block"></div>
  </div>
</template>

<style lang="scss">
.left-menu-logo {
  height: 90px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.small-logo-block {
  display: none;
}

.logo-block {
  padding-top: 8px;
}

@media screen and (max-width: 768px) {
  .logo-block {
    padding: 0;
  }
  .left-menu-logo {
    min-height: 75px;
  }
}
</style>

