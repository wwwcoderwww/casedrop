<template>
  <nav class="main-menu">
    <div class="toggle-menu-btn" @click="toggleMenu"></div>
    <ul>

      <router-link tag="a" active-class='active' class="menu-item" to="/" exact>
        <a class="home" href="#">
          <span class="menu-item-name">Home.</span>
        </a>
      </router-link>

      <li class="menu-item">
        <a class="giveaway" href="#"><span class="menu-item-name">Giveaway</span></a>
      </li>
      <li class="menu-item">
        <a class="bonus" href="#"><span class="menu-item-name">Daliy bonus</span></a>
      </li>
        <router-link tag="a" active-class='active' class="menu-item" to="/faq" exact>
          <a class="faq" href="#">
            <span class="menu-item-name">F.a.q.</span>
          </a>
        </router-link>
      <li class="menu-item">
        <a class="partner" href="#"><span class="menu-item-name">Partner</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      document.querySelector('.main').classList.toggle('close-menu');
    }
  },
}
</script>


<style lang="scss">
@import '@/assets/style/partials/_colors.scss';
@import '@/assets/style/partials/_mixins.scss';

.main-menu {
  flex-grow: 1;
  .menu-item {
    height: 38px;
    padding-left: 70px;
    margin-bottom: 31px;
    cursor: pointer;
    position: relative;
    &:before {
      content: '';
      display: block;
      height: 38px;
      width: 5px;
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      transition: background .5s;
    }
    &.active {

      .menu-item-name {
        color: $light-grey-text;
      }
      &:before {
        background: $light-red;
      }
      a {
        color: #fff;
      }
    }
  }
  a {
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 34px;
    position: relative;
    color: #D2D2D2;
    span {
      @include transform-left-center;
    }
    &:before {
      content: '';
      display: inline-block;
      width: 25px;
      height: 25px;
      position: absolute;
      top: 2px;
      left: -38px;
      font-family: 'drop', sans-serif;
      font-size: 16px;
    }
    &.home {
      &:before {
        content: "\e909";
      }
    }
    &.giveaway {
      &:before {
        content: "\e908";
      }
    }
    &.bonus {
      &:before {
        content: "\e903";
      }
    }
    &.faq {
      &:before {
        content: "\e901";
      }
    }
    &.partner {
      &:before {
        content: "\e90b";
      }
    }
  }
}

.menu-item-name {
  white-space: nowrap;
  opacity: 1;
  color: $grey-text;
}

.toggle-menu-btn {
  height: 42px;
  width: 0;
  position: absolute;
  right: 0;
  top: -webkit-calc(50% - 50px);
  top: calc(50% - 50px);
  cursor: pointer;
  z-index: 2;
  border-right: 16px solid rgba(0, 0, 0, 0.2);
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  &:before {
    content: "\e900";
    font-family: drop;
    color: $grey-text;
    position: absolute;
    top: 12px;
    left: 6px;
    font-size: 12px;
  }
}
</style>

