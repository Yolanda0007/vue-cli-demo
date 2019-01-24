<template>
  <div class="container">
    <!-- <p class="transform">cjshgsidnbssksksjjsgdueufototglhojjkialrjkgaheoslndhihxjaoenfkfiofjslopalowhvn</p>
    <icons></icons>
    qqq
    <div class="main-content">
      <p>
        Ask a yes/no question:
        <input type="text" v-model="question"/>
      </p>
      <p>{{ answer }}</p>
    </div> -->
    <ul class="click-ul">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <div class="tapdemo" @click="parent">
      这是父元素
      <div class="inner" @tap="child">
        这是子元素
      </div>
    </div>

    <!-- <div class="bottom"></div>
    <div class="test">测试段落测试段落测试段落测试段落测试段落测试段落测试段落</div>
    <div class="test">测试段落测试段落测试段落测试段落测试段落测试段落测试段落</div>
    <div class="test">测试段落测试段落测试段落测试段落测试段落测试段落测试段落</div>
    <div class="test">测试段落测试段落测试段落测试段落测试段落测试段落测试段落</div>
    <div class="test">测试段落测试段落测试段落测试段落测试段落测试段落测试段落</div>
    <div class="bottom"></div> -->
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script>
import icons from "../home/components/icons.vue";
export default {
  name: "home",
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  components: {
    icons
  },
  methods: {
    parent(){
      console.log('parent');
    },
    child(){
      console.log('child');
    },
    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark.";
        return;
      }
      this.answer = "Thinking...";
    },
    quickSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      let pivotIndex = Math.floor(arr.length / 2);
      let pivot = arr.splice(pivotIndex, 1)[0];
      let left = [];
      let right = [];
      arr.forEach(item => {
        if (item < pivot) {
          left.push(item);
        } else {
          right.push(item);
        }
      });
      return this.quickSort(left).concat([pivot], this.quickSort(right));
    },
    change(arr1, arr2) {
      let sum1 = 0,
        sum2 = 0;
      arr1.forEach(item => {
        sum1 += item;
      });
      arr2.forEach(item => {
        sum2 += item;
      });
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          let x = a[i] - b[j];
          if (
            (sumDiffab > 0 && x > 0 && x < sumDiffab) ||
            (sumDiffab < 0 && x < 0 && x > sumDiffab)
          ) {
            //if(x*sumDiffab>0&&abs(x)<abs(sumDiffab))
            //只有满足|A-2x|<|A|，调换才有意义：即A>0时，0<x<A；当A<0时，A<x<0
            unfinish = true;
            let t = abs(x - halfSum); //计算x与A/2的距离
            if (t < mindis) {
              //存储离A/2最近的x的距离值以及对应的调换。
              mindis = t;
              posa = i;
              posb = j;
            }
          }
        }
      }
    }
  },
  created: function() {
    let arr = [12, 33, 4, 5, 67, 3, 35, 78];
    this.quickSort(arr);
    console.log(arr);
    let str =
      "尊敬的用户您好，在圣诞前夕，我们特别推出了[认识瑶瑶我很高兴]活动，您已经被抽中为幸运用户，领取请回复：1.我要请瑶瑶喝奶茶2.我要送瑶瑶一个红包3.我要给瑶瑶一个圣诞礼物。机不可失，时不再来，心动不如行动。退订请回复：cjshgsidnbssksksjjsgdueufototglhojjkialrjkgaheoslndhihxjaoenfkfiofjslopalowhvn为防止恶意复制退订，退订时需要将字母反过来回复，感谢你的支持，么么哒！";
    let newstr = str.replace(/瑶瑶/g, "**");
    console.log(newstr);
    let s =
      "cjshgsidnbssksksjjsgdueufototglhojjkialrjkgaheoslndhihxjaoenfkfiofjslopalowhvn";
    console.log(
      Array.from(s)
        .reverse()
        .join("")
    );
    let sets = new Set(s);
    console.log(sets);
    console.log(
      Array.from(s)
        .sort()
        .join("")
    );
    let a = 22336245.11111;
    let b = a
      .toFixed(2)
      .toString()
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");

    function commafy(num) {
      return (
        num &&
        num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
          return $1 + ",";
        })
      );
    }
    console.log(commafy(a));
    console.log(b);

    let str1 = 10 + 20 + "30";
    let str2 = "10" + 20 + 30;
    console.log(str1);
    console.log(str2);
    var qwe;
    console.log(qwe);

    this.debouncedGetAnswer = this.$_.debounce(this.getAnswer, 500);
  },
  mounted() {
    let lis = document.querySelector(".click-ul").children;
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
      (function(i) {
        lis[i].onclick = function() {
          console.log(i);
        };
      })(i);
    }

    function sum(a) {
      return function(b) {
        return a + b;
      };
    }

    let fun = sum(1);
    let s = fun(2);
    console.log(s);

    function add(a) {
      return b => {
        return a + b;
      };
    }

    let a = add(1)(2);
    console.log(a);
    // let c = add(1)(2)(3);
    // console.log(c); //add(1)只是一个普通相加函数的函数名，没有返回函数

    let arr = Array(3);
    arr[2] = "3";
    let arrs = arr.map(item => (item = "1"));
    console.log(arrs);

    for (var i = 1; i <= 4; i++) {
      var tc = setTimeout((i) => {
        console.log(i);
        clearTimeout(tc)
      }, 10,i);
    }

    // for (var i = 1; i <= 4; i++) {
    //   var tc = setTimeout(
    //     function(i) {
    //       console.log(i);
    //       clearTimeout(tc);
    //     },10,i
    //   );
    // }
    var name = 1;
    var fn1 = function(){
      console.log('name',name);
    }
    var fn2 = function(name){
      console.log('name',name);
    }
    var fn3 = function(){
      var name = 2;
      fn1()
      fn2()
      console.log('name',name);
    }
    fn3()

    var x=10;
    function aa(){
        console.log(x);
    }
    function bb(){
        var x=20;
        aa();
    }
    bb();
    aa();
    var color = 'blue';
    function changeColor(){
      var anotherColor = 'red';
      function swapColor(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = anotherColor;
      }
      swapColor();
    }
    changeColor();
    
    
    
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/rem";
.tapdemo{
  width: rem(500);
  height: rem(500);
  background-color: cadetblue;
  position: relative;

  .inner{
    position: absolute;
    top: rem(50);
    left: 0;
    display: block;
    z-index: 20;
  }
}
.transform {
  transform: rotate(180deg);
  font-size: 20px;
  padding: 10px;
}
.click-ul {
  li {
    width: rem(200);
    height: rem(40);
    background-color: cadetblue;
    margin-bottom: rem(20);
  }
}
* {
  line-height: normal;
}
.test {
  font-size: rem(30);
  line-height: rem(5);
}
.bottom {
  width: rem(100);
  height: rem(20);
  background-color: cadetblue;
}
</style>
