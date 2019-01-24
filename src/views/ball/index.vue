<template>
  <div class="container">
    <div class="ball">
      <div class="point" v-for="index in list" :key="index"></div>  
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "~@/assets/scss/rem";
  $n:100;
  @function randomNum($max, $min:0, $u:1) {
    @return ($min + random($max)) * $u;
  }
  @function randomColor() {
    @return rgba(randomNum(255),randomNum(255),randomNum(255),randomNum(100)/100);
  }
  .container{
    position: absolute;
    // overflow: hidden;
    background-color: #000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .ball{
    position: absolute;
    transform-style: preserve-3d;
    perspective: 1000;
    // left: 50%;
    // top: 50%;
    left: 50%;
    top: 50%;
    width: rem(200);
    height: rem(200);
    transform: translate(-50%,-50%,0) rotateY(0deg) rotateZ(360deg);
    background-color:transparent;
    animation: fullrotate 10s linear infinite;
  }
  .point{
    position: absolute;
    top: rem(90);
    left: 45%;
    background-color: #fff;
    border-radius: 50%;
    width: rem(20);
    height: rem(20);

    @for $i from 1 through $n {
      $rot-x: random(360) + deg;
      $rot-y: random(360) + deg;
      $radius: 1rem;
      $radius4: rem(400);

      &:nth-child(#{$i}) {
        transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius);
        background: randomColor();
        animation: scroll#{$i} 5s linear infinite;
        animation-delay: $i*2ms;
      }
       @keyframes scroll#{$i} {
        0%{
          transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius);
        }
        20%,40%{
          transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius*($i/10));

        }
        40%,60%{
          transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius4);
          width: rem(40);
          height: rem(40);
        }
        60%,80%{
          transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius*($i/20));
        }
        80%,100%{
          transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius);
        }    
      }
    }
  }
  @keyframes fullrotate {
    to {
      transform: translate3d(-50%,-50%,0) rotateY(360deg) rotateZ(360deg);
    }
  }
</style>
<script>
export default {
  name: 'ball',
  data(){
    return {
      list:[]
    }
  },
  methods:{
    listInit(){
      for(let i = 0; i < 100; i++){
        this.list.push(i)
      }
    }
  },
  beforeMount(){
    this.listInit()
  }
}
</script>
