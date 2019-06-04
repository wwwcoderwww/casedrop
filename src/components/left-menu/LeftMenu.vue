<template>
	<div class="left-menu">
    <logo></logo>

		<div class="mobile-menu-btn" @click="toggleMobileMenu">
			<div class="mobile-btn">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

    <user-info></user-info>
    <navigation></navigation>
    <diagram></diagram>
	</div>
</template>

<script>
import UserInfo from './UserInfo';
import Navigation from './Navigation';
import Diagram from './Diagram';
import Logo from './Logo';

export default {
  name: 'LeftMenu',
  components: {
    UserInfo,
    Navigation,
    Diagram,
    Logo
  },
  methods: {
    toggleMobileMenu() {
      document.querySelector('.main').classList.toggle('show-mobile-menu');
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.left-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  will-change: width;
  z-index: 2;
  .big-logo {
    display: block;
  }
  .small-logo {
    display: none;
  }
}
.mobile-menu-btn {
  display: none;
  width: 84px;
  height: 42px;
  border-right: 1px solid rgba(255, 255, 255, .2);
  border-left: 1px solid rgba(255, 255, 255, .2);
  margin-left: 16px;
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
    margin-bottom: 5px;
    transition: all .2s;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .left-menu {
    background: #392f4a;
    width: 100%;
    height: 75px;
    z-index: 100;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 2px 22px rgba(0,0,0,0.15);
    padding: 0 16px;
    .main-menu {
    position: fixed;
    top: 74px;
    left: -100%;
    z-index: 3;
    background: #392f4a;
    width: 100%;
    padding: 40px 0;
    transition: all .3s;
      .menu-item {
        padding-left: 32%;
      }
    }
    .user-money-balance, .sign-in-btn {
      order: 1;
      .money-balance {
        text-align: right;
      }
    }
    .user-logo {
      order: 2;
      margin-left: 10px;
    }
    .user-localisation {
      order: 3;
    }

    .user-info-block, .left-menu-logo {
      height: 100%;
      box-sizing: border-box;
      margin-bottom: 0;
    }
    .user-info-block {
      padding: 0;
      flex-grow: 1;
      justify-content: flex-end;
    }

    .left-menu-logo {
      border: none;
    }
    .user-localisation {
      margin-left: 32px;
    }
  }
}


@media screen and (max-width: 650px) {
  .left-menu {
    .logo-block {
      .big-logo {
        display: none;
      }
      .small-logo {
        display: block;
      }
    }
  }
}

 @media screen and (max-width: 575px) {
  .left-menu .user-localisation {
    margin-left: 16px;
  }
  .left-menu .main-menu {
    height: 100%;
  }
  .mobile-menu-btn {
    width: 42px;
  }
}
</style>
