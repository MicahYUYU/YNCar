<template>
  <div class="home" style="position:relative;">
    <y-header></y-header>
    <!-- banner -->
    <div class="banner">
      <el-carousel trigger="click" height="700px">
        <el-carousel-item v-for="(img,index) in bannerList" :key="index">
          <img src="@/assets/img_home/banner1.jpg" v-if="index==0" style="margin-left:-150px"/>
          <img src="@/assets/img_home/banner2.jpg" v-if="index==1" style="margin-left:-150px"/>
          <img src="@/assets/img_home/banner3.jpg" v-if="index==2" style="margin-left:-150px"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 信息 -->
    <div class="main_info">

      <div style="margin:0px;height:304px;width:1216px">
        <div class="block1">
          <img src="@/assets/img_home/img1.jpg" class="zoom" />
        </div>

        <!-- 2 3 4区块 -->
        <div class="block2and3and4">
          <div class="block2">

          </div>

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
      <!-- 取消浮动 -->
      <div class="quxiao"></div>

      <div style="margin:0px;height:608px;width:1216px">
        <div class="block6">检测套餐</div>

        <div class="block7">
          <img src="@/assets/img_home/img2.jpg" class="zoom">
        </div>
        
        <div class="block10">
          <img src="@/assets/img_home/img3.jpg" class="zoom" style="width:100%;height:100%">
        </div>
        

        <div class="quxiao"></div>
        <div class="block8">
          <div class="car_run">
            <img src="@/assets/img_home/car.png" style="margin-top:115px">
          </div>
        </div>   

        <div class="block9">
          fuwuliucheng
        </div>
        <div class="tri2">
          <img src="@/assets/img_home/triangle2.png">
        </div>
      </div>
      
    </div>

    <!-- 取消浮动 -->
    <div class="quxiao"></div>
    <y-footer class="foot"></y-footer>
  </div>
</template>

<script>
import YHeader from '../../components/Header';
import YFooter from '../../components/Footer';

export default {
  name: "Home",
  components: {
    //这里是用到等各种组件
    YHeader,
    YFooter
  },
  data () {
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


// 取消浮动（float：left）
.quxiao{
  clear: both;
  width: 0%;
  height: 0%;
}

.main_info {
  position: relative;
  left: 100px;
  right: 100px;
  top: -100px;
  float: left;
  z-index: 3;
  height: 1216px;
}

.block1 {
  width: 608px;
  height: 304px;
  position: relative;
  float: left;
  overflow: hidden;
}

.zoom {
  transition: all 1s;
}
.zoom:hover {
  transform: scale(1.3);
}

.block2and3and4 {
  position: relative;
  float: left;
  width: 304px;
  height: 304px;
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
  background-color: #3192D9;
}

.block4 {
  position: relative;
  float: left;
  height: 152px;
  width: 152px;
  background-color: #2D8ACF;
}

.block5 {
  position: relative;
  float: left;
  background-color: #2174C3;
  width: 304px;
  height: 304px;
}

.block6 {
  position: relative;
  float: left;
  width: 304px;
  height: 304px;
  background-color: #0f53AF;
  background-image: url("~@/assets/img_home/bg.png");   //~@不能少
  background-repeat: no-repeat;
  background-position: right;
}

.block7 {
  position: relative;
  float: left;
  width: 304px;
  height: 304px;
  overflow: hidden;
}

.block8{
  position: relative;
  float: left;
  width: 608px;
  height: 304px;
  top: -304px;
  background: url("~@/assets/img_home/inno.png");
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.car_run{
  position: relative;
  width: 608px;
  height: 304px;
  transition: all 1s;
  left: -400px;
}
.car_run:hover{
  transform: translate(800px, 0px);
}

.block9{
  position: relative;
  float: left;
  top:-304px;
  width: 304px;
  height: 304px;
  background-color: #FFC000;
  z-index: 3;
  background-image: url("~@/assets/img_home/bg1.png");
  background-repeat: no-repeat;
  background-position: right;
}

.block10{
  position: relative;
  float: left;
  width: 608px;
  height: 608px;
  overflow: hidden;
  z-index: 2;
}

.tri2{
  position: relative;
  left: -757px;
  top:-460px;
}

.foot{
  position: relative;
}
</style>