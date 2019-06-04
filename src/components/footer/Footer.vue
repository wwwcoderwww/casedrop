<template>
  <footer class="footer">
    <support-block></support-block>
    <follow-block></follow-block>
    <rating-block></rating-block>
  </footer>
</template>

<script>
import FollowBlock from './FollowBlock';
import RatingBlock from './RatingBlock';
import SupportBlock from './SupportBlock';

export default {
  components: {
    FollowBlock,
    RatingBlock,
    SupportBlock
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 30px;
  padding: 25px 0 0;
  border-top: 1px solid rgba(255, 255, 255, .1);
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 25px 16px 0 16px;
  }
}

@media screen and (max-width: 700px){
  .footer {
    flex-wrap: wrap;
  }
}
</style>

