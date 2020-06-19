<template>
  <!-- 预约检测 -->
  <div class="Appointment">
    <y-header></y-header>
    <y-detect :isShow="detectVisible" @change="ChangeComponent"></y-detect>
    <y-watch :isShow="watchVisible" @change="ChangeComponent"></y-watch>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '@components/Header';
import YFooter from '@components/Footer';
import YDetect from '@components/appointment/detect';
import YWatch from '@components/appointment/watch';
export default {
  name: 'Appointment',
  components: {
    //这里是用到等各种组件
    YHeader,
    YFooter,
    YDetect,
    YWatch
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
      }
      else {
        this.detectVisible = true;
        this.watchVisible = false;
      }
    }
  },
  mounted () {
    //这里是页面加载完毕以后要自动执行的函数
  }
}
</script>

<style scoped lang="scss">
</style>