<template>
  <div class="container">
    <div class="content">
    <van-swipe @change="onChange" vertical :height="200" :show-indicators="true">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
   methods: {
    data () {
      return {
        height: 800,
      }
    },
    onChange () {
      console.log('当前 Swipe 索引：');
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;

  .content{
    flex: 1;
    height: rem(100);

    .van-swipe{
      height: 100%;
    }
  }
}
</style>
