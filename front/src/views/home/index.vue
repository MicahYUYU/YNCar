<template>
  <div class="home" style="position:relative;">
    <y-header></y-header>
    <!-- banner -->
    <div class="banner">
      <el-carousel trigger="click" height="700px">
        <el-carousel-item v-for="(img,index) in bannerList" :key="index">
          <img src="@/assets/img_home/banner1.jpg" v-if="index==0" />
          <img src="@/assets/img_home/banner2.jpg" v-if="index==1" />
          <img src="@/assets/img_home/banner3.jpg" v-if="index==2" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 信息 -->
    <div class="main_info">

      <div width="100px">
        <div class="block1">
          <img src="@/assets/img_home/img1.jpg" class="zoom"/>
        </div>
      
        <!-- 2 3 4区块 -->
        <div class="block2and3and4">
          <div class="block2">关于一诺</div>

          <div class="block3">访问手机</div>

          <div class="block4">联系我们</div>

          <!-- 小三角 -->
          <div class="tri1">
            <img src="@/assets/img_home/triangle1.png" />
          </div>
        </div>
        <!-- 2 3 4区块 -->

        <div class="block5">预约检测</div>
      </div>
      
      

      
      <div class="block6">检测套餐</div>

      <div class="block7">
        <img src="@/assets/img_home/img2.jpg" class="zoom">
      </div>

    </div>

  </div>
</template>

<script>
import YHeader from "../../components/Header";

export default {
  name: "Home",
  components: {
    //这里是用到等各种组件
    YHeader
  },
  data() {
    return {
      bannerList: [
        require("@/assets/img_home/banner1.jpg"),
        require("@/assets/img_home/banner2.jpg"),
        require("@/assets/img_home/banner3.jpg")
      ],
      currentIndex: 0,
      timer: null //定时器
    };
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.banner {
  position: relative;
}


.main_info {
  position: relative;
  left: 100px;
  right: 100px;
  top: -100px;
  float: left;
  z-index: 3;
}

.block1 {
  position: relative;
  float: left;
  overflow: hidden;
}

.zoom{
  transition: all 1s;
}
.zoom:hover{
  transform: scale(1.2);
  
}

.block2and3and4 {
  position: relative;
  float: left;
  width: 304px;
}

.block2 {
  height: 152px;
  background-color: #379ce5;
}

.tri1 {
  position: relative;
  left: -156px;
  top: -240px;
}

.block3 {
  position: relative;
  float: left;
  height: 152px;
  width: 152px;
  background-color: #33ccff;
}

.block4 {
  position: relative;
  float: left;
  height: 152px;
  width: 152px;
  background-color: #3399ff;
}

.block5 {
  position: relative;
  float: left;
  background-color: #3399cc;
  width: 304px;
  height: 304px;
}

.block6 {
  position: absolute;
  top:304px;
  background-color: #0f53B0;
  width: 304px;
  height: 304px;
}

.block7{
  position: relative;
  float: left;
  left: -608px;
  overflow: hidden;
}
</style>