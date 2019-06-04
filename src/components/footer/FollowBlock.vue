<template>
  <div class="follow-block">
    <div>Follow US:</div>
    <div class="social-links">

      <div class="social-item facebook">
        <div class="social-item-wrapper">
          <span class="icon drop-facebook2"></span>
        </div>
      </div>

      <div class="social-item vk">
        <div class="social-item-wrapper">
          <span class="icon drop-vk"></span>
        </div>
      </div>

      <div class="social-item twitt">
        <div class="social-item-wrapper">
          <span class="icon drop-twitter"></span>
        </div>
      </div>

      <div class="social-item youtube">
        <div class="social-item-wrapper">
          <span class="icon drop-youtube"></span>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';

.social-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}

.social-item {
  line-height: 12px;
  cursor: pointer;
  margin-right: 22px;
  .icon {
    font-size: 20px;
    position: relative;
    top: -2px;
    left: -2px;
  }
}

.social-item.facebook {
  .icon {
    font-size: 14px;
    top: 4px;
    left: 3px;
  }
}

.social-item-wrapper {
  width: 16px;
  height: 16px;
  border: 2px solid $grey-text;
  border-radius: 3px;
  color: $grey-text;
  &:hover {
    border-color: #fff;
    .icon {
      color: #fff;
    }
  }
}

.follow-block {
  width: 20%;
  padding: 30px 0;
}

@media screen and (max-width: 1200px) {
  .follow-block {
    &>div:first-child {
    display: none;
    }
    .social-links {
    margin-top: 0;
    flex-direction: column;
    }
    .social-item {
    margin: 0 0 12px 0;
    }
  }
  .follow-block {
    width: 10%;
    padding: 10px 0;
  }
}

@media screen and (max-width: 768px) {
  .follow-block .social-links {
    align-items: flex-start;
  }
}

@media screen and (max-width: 700px){
  .follow-block {
    padding: 0;
  }
}
</style>

