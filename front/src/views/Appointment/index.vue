<template>
  <!-- 预约检测 -->
  <div class="Appointment">
    <y-header></y-header>
    <y-zixun></y-zixun>
    <y-detect :isShow="detectVisible" @change="ChangeComponent" ref="runDetectAnimation"></y-detect>
    <y-watch :isShow="watchVisible" @change="ChangeComponent" ref="runWatchAnimation"></y-watch>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '@components/Header';
import YFooter from '@components/Footer';
import YDetect from '@components/appointment/detect';
import YWatch from '@components/appointment/watch';
import YZixun from '../../components/zixun'
export default {
  name: 'Appointment',
  components: {
    //这里是用到等各种组件
    YHeader,
    YFooter,
    YDetect,
    YWatch,
    YZixun
  },
  data () {
    return {
      //这里返回变量
      detectVisible: true,
      watchVisible: false
    }
  },
  methods: {
    //这里写各种定义的函数等
    ChangeComponent () {
      if (this.detectVisible) {
        this.detectVisible = false;
        this.watchVisible = true;
        console.log("执行陪同看车动画");
        this.$refs.runDetectAnimation.executeAnimation();
        // this.$refs.runWatchAnimation.recover();
      }
      else {
        this.detectVisible = true;
        this.watchVisible = false;
        console.log("执行预约检测动画");
        this.$refs.runWatchAnimation.executeAnimation();
        // this.$refs.runDetectAnimation.recover();
      }
    }
  },
  // watch: {
  //   "detectVisible": {
  //     handler: function (newValue, oldValue) {
  //       if (newValue) {
  //         console.log("执行预约检测动画");
  //         this.$refs.runWatchAnimation.executeAnimation();
  //       }
  //       console.log("this is older detectVisible:" + oldValue);
  //     },
  //     deep: true
  //   },
  //   "watchVisible": {
  //     handler: function (newValue, oldValue) {
  //       if (newValue) {
  //         console.log("执行陪同看车动画");
  //         this.$refs.runDetectAnimation.executeAnimation();
  //       }
  //       console.log("this is older detectVisible:" + oldValue);
  //     },
  //     deep: true
  //   },
  // },
  mounted () {
    //这里是页面加载完毕以后要自动执行的函数
  }
}
</script>

<style scoped lang="scss">
</style>