<template>
  <main class="main">
    <modals></modals>
    <header-app />
    <div class="main-wrapper">
      <left-menu />
      <div class="main-content">  
        <router-view></router-view>
        <footer-app />
      </div>
    </div> 
  </main>
</template>

<script>
import HeaderApp from '@/components/header/Header';
import LeftMenu from '@/components/left-menu/LeftMenu';
import FooterApp from '@/components/footer/Footer';
import Modals from '@/components/modals/Modals';

import Api from '@/api/auth';
import { mapActions } from 'vuex';

export default {
	components: {
		HeaderApp,
		LeftMenu,
		FooterApp,
		Modals
	},
	methods: {
		parseQuery(search) {
			var args = search.substring(1).split('&');
			var argsParsed = {};
			var i, arg, kvp, key, value;
			for (i=0; i < args.length; i++) {
				arg = args[i];
				if (-1 === arg.indexOf('=')) {
					argsParsed[decodeURIComponent(arg).trim()] = true;
				}
				else {
					kvp = arg.split('=');
					key = decodeURIComponent(kvp[0]).trim();
					value = decodeURIComponent(kvp[1]).trim();
					argsParsed[key] = value;
				}
			}

			return argsParsed;
		},
        ...mapActions('User', [
            'getUserInfo',
        ]),
	},
	created() {
		this.objFromGetLink = this.parseQuery( location.search );
		console.log( this.objFromGetLink )
        this.getUserInfo(this.objFromGetLink)
  	},
}
</script>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.main {
  min-height: 100vh;
  &:before {
    content: '';
    background: url('~img/main-bg.png') no-repeat top center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .2;
  }
  .user-infoinformation {
    margin-bottom: 30px;
  }
}

.main-wrapper {
  display: flex;
}

.main.close-menu {
  .left-menu {
    width: 76px;
  }
  .sign-in-btn {
    width: 50px;
    padding-left: 0;
    margin-bottom: 25px;
    margin-top: 8px;
    order: 2;
    &:before {
      left: 14px;
    }
    span {
      font-size: 0;
      transform: scale(0);
    }
  }
  .user-add-money-btn {
    font-size: 0;
    transform: scale(0);
  }
  .user-info-block {
    flex-direction: column;
    margin-bottom: 0;
    padding: 0;
  }
  .menu-item-name {
    font-size: 0;
    transform: scale(0);
    opacity: 0;
  }
  .user-localisation {
    background: transparent;
    order: 1;
  }
  .current-localisation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 38px;
    height: 40px;
  }
  .user-logo {
    margin-top: -10px;
    order: 2;
  }
  .money-balance {
    font-size: 12px;
  }
  .user-money-balance {
    padding-top: 14px;
    transition: none;
    height: 39px;
  }
  .localisation-img {
    margin-bottom: 2px;
  }
  .big-logo {
    display: none;
  }
  .small-logo {
    display: block;
  }
  .toggle-menu-btn {
    right: -16px;
    transform: rotate(180deg);
  }
  .left-menu-diagram {
    .addition-text {
      display: none;
    }
  }
  .diagram-user-info {
    width: 36px;
    position: static;
  }
  .diagram-block {
    display: none;
  }
  .diagram-info-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .online-indicator {
    margin-bottom: 10px;
  }
  .case-counter-wrapper {
    display: flex;
    justify-content: flex-start;
    position: relative;
    &:after {
      content: '+';
      font-size: 24px;
      line-height: 24px;
    }
    .users-counter {
      white-space: nowrap;
      width: 20px;
      overflow: hidden;
    }
  }
  .main-content {
    margin-left: 76px;
    width: calc(100% - 76px);
  }
  .top-items-row {
    width: calc(100% - 76px);
    left: -164px;
  }
  .user-infoinformation {
    .user-logo {
      order: inherit;
    }
  }
  .main.close-menu .top-items-row {
    left: 0;
    width: 100%;
  }
  .localisation-dropdown {
    right: auto;
    left: -18px;
    top: calc(100% + 5px);
    .triangle {
      right: auto;
      left: 26px;
    }
  }
  .top-items-btn {
    left: calc(50% + 38px);
  }
}


.main-content {
  padding-top: 100px;
  width: calc(100% - 240px);
  margin-left: 240px;
  min-height: calc(100vh - 100px);
  transition: transform .3s;
  will-change: padding-top;
}

.main.hide-top-row {
  .top-items-row {
    //margin-top: -120px;
    transform: translateY(-120px);
  }
  .main-content {
    //padding-top: 0;
    transform: translateY(-100px);
  }
  .top-items-btn:before {
    transform: rotate(-90deg);
  }
}

.main.show-mobile-menu {
  .mobile-menu-btn {
    span {
      &:first-child {
        transform-origin: left top;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }
    }
  }
}

@media screen and (min-width: 1920px){
  .main:before {
    background-size: 111%;
  }
}

@media screen and (max-width: 992px) {
  .main.close-menu {
    .support-block {
    width: 50%;
    }
  }
}

@media screen and (max-width: 768px) {
  .main.show-mobile-menu {
    .left-menu .main-menu {
    left: 0;
    }
  }
  .toggle-menu-btn, .left-menu-diagram {
    display: none;
  }
  .main-content {
    margin: 0;
    width: 100%;
    padding-top: 160px;
  }
  .main.hide-top-row .main-content {
    padding-top: 70px;
  }
  .main.close-menu .main-content {
    margin-left: 0;
    width: 100%;
  }
  .main.close-menu .top-items-row {
    left: 0;
    width: 100%;
  }
}
</style>
