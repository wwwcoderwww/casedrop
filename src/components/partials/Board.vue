<template>
  <div class="board-content-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.board-content-wrapper {
  display: flex;
  padding: 15px 0;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -15px;
  .weapon-item {
    width: calc(16.66% - 30px);
    &:after {
      display: none;
    }
    .gradient-item-img {
      max-width: 166px;
      .bg-4, .bg-3, .bg-2, .bg-1 {
        animation: none;
      }
    }
  }
}

.board-toggle {
  display: none;
}

.board-toggle:checked + .board-content {
  .board-content-wrapper {
    max-height: 0;
  }
}

@media screen and (max-width: 1600px) {
  .board-content-wrapper .case-item, .weapon-default, .weapon-user {
    width: calc(20% - 30px) !important;
  }
}

@media screen and (max-width: 1330px) { 
  .board-content-wrapper .case-item, .weapon-default, .weapon-user {
    width: calc(25% - 30px) !important;
  }
}

@media screen and (max-width: 1024px) {
  .board-content-wrapper .case-item, .weapon-default, .weapon-user {
    width: calc(33.33% - 30px) !important;
  }
}

@media screen and (max-width: 650px) {
  .board-content-wrapper .case-item, .weapon-default, .weapon-user {
    width: calc(50% - 30px) !important;
  }
}

@media screen and (max-width: 400px) {
  .board-content-wrapper .case-item, .weapon-default, .weapon-user {
    width: 100% !important;
  }
}
</style>

