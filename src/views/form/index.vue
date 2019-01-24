<template>
  <div class="container">
    <van-cell-group>
      <van-cell title="上传下载">
        <van-uploader>
          
        </van-uploader>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="name"
        label="商品名称"
        placeholder="不超过10个字"
        input-align="right"
      ></van-field>
      <van-field
        v-model="num"
        label="可砍数量"
        placeholder="参与砍价活动的库存数量"
      >
        <span class="right-unit">件</span>
      </van-field>
      <van-field
        label="商品原价"
        v-model="originalPrice"
        placeholder="单独售卖价格"
      >
        <span class="right-unit">元</span>
      </van-field>
      <van-field
        label="商品底价"
        v-model="originalPrice"
        placeholder="最低可砍至该价格"
      >
        <span class="right-unit">元</span>
      </van-field>
       <van-field
        label="活动时间"
        v-model="activityTime"
        @click="changeActive"
        readonly
      >
        <span class="right-unit">前可以发起砍价</span>
      </van-field>
      <van-field
        label="砍价有效期"
        v-model="durationTime"
        @click="changeDura"
        readonly
      >

      </van-field>
      <van-field
        label="砍价人数"
        v-model="person"    
      >
        <span class="right-unit">人</span>
      </van-field>
    </van-cell-group>
    <van-popup positon="bottom" v-model="showDuraTime" :overlay="false">
      <van-picker
        show-toolbar
        title="date"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup positon="bottom" v-model="showActivityTime" :overlay="false">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data(){
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),

      name: '',
      num:'',
      originalPrice:'',
      activityTime: '',
      durationTime: '',
      person:'',

      showActivityTime: false,
      showDurationTime: false,
    }
  },
  methods: {
    changeActive () {
      this.showActivityTime = true
    },
    changeDura () {
      this.showActivityTime = true
    }
  },
  beforeMount(){
   
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" scoped>
  .line{
    height: 0;
    font-size: rem(100);
    background-color: #dddddd;
    margin-top: rem(100);
    line-height: 0;

    span{
      display: inline-block;
      border-top: solid 1px red;
    }
    .base-line{
      vertical-align: baseline;
      border-color: green;
    }
    .middle-line{
      vertical-align: middle;
      border-color: yellow;
    }
    .bottom-line{
      vertical-align: bottom;
      border-color: blue;
    }
  }
  #input{
    border: solid 2px red;
  }
  .pic-content{
    display: -webkit-flex; /* Safari 7.0+ */
    display: flex;
    -webkit-align-items: cemter; /* Safari 7.0+ */
    align-items: center;
    margin-bottom: rem(30);

    img{
      width: rem(72);
      height: rem(32);
      margin-right: rem(20);
    }

    .content{
      font-size: rem(28);
      line-height: rem(32);
    }
  }
</style>
