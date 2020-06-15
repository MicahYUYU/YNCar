<template>
  <div class="home" style="position:relative;">
    <y-header></y-header>
    <!-- banner -->
    <div class="banner">
      <el-carousel trigger="click" height="700px">
        <el-carousel-item v-for="(img,index) in bannerList" :key="index">
          <img src="@/assets/img_home/banner1.jpg" v-if="index==0">
          <img src="@/assets/img_home/banner2.jpg" v-if="index==1">
          <img src="@/assets/img_home/banner3.jpg" v-if="index==2">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 信息 -->
    <div class="main_info">
      <div class="img1">
        <img src="@/assets/img_home/img1.jpg">
      </div>
    </div>

  </div>
</template>

<script>
import YHeader from '../../components/Header';

export default {
  name: 'Home',
  components: {
    //这里是用到等各种组件
    YHeader,
  },
  data () {
    return {
      bannerList: [
        require("@/assets/img_home/banner1.jpg"),
        require("@/assets/img_home/banner2.jpg"),
        require("@/assets/img_home/banner3.jpg"),
      ],
      currentIndex: 0,
      timer: null   //定时器
    }
  },

  methods: {

  },

}
</script>

<style lang='scss' scoped>
.banner {
  position: relative;
}

.main_info {
  position: absolute;
  left: 100px;
  right: 100px;
  top: 500px;
  float: left;
  z-index: 3;
}
</style>