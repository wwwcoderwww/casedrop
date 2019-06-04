<template>
  <div class="rating-block">
    <div class="rating-wrapper">
      <div class="customers">Customers love this store!</div>
      <div class="rating">
        <span class="icon drop-star"></span>
        <span class="icon drop-star"></span>
        <span class="icon drop-star"></span>
        <span class="icon drop-star"></span>
        <span class="icon drop-star"></span>
      </div>
      <div class="reviews">0% / 2 reviewes</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/partials/_colors.scss';
.rating-block {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  color: $grey-text;
  padding-top: 5px;
}

.rating-wrapper {
  color: #a0a1a8;
  background: rgba(0, 0, 0, .2);
  padding-bottom: 10px;
  font-size: 15px;
  text-align: center;
  .customers {
    padding: 10px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    white-space: nowrap;
  }
  .rating {
    padding: 10px 30px 5px 30px;

    .icon {
      font-size: 12px;
      color: #f2f2f2;
    }
  }
  .reviews {
    font-size: 14px;
    padding: 0 30px;
  }
}

@media screen and (max-width: 1024px) {
  .rating-wrapper .customers {
    padding: 10px 25px;
  }
}
</style>


