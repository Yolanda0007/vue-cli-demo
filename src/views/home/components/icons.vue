<template>
  <div class="icons">
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  name: 'icons',
  data () {
    return {
         
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/rem";
  .icons{
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    background-color: red;

    .icon{
      height: 0;
      float: left;
      width: 25%;
      padding-bottom: 25%;
      background-color: green;
    }
  }
</style>
