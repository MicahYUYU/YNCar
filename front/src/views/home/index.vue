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
          <div class="block2" @click="switchTo('/about')">
            <div class="detecting_img">
              <img src="@/assets/img_home/circle.png" class="xuanzhuan" style="margin-top:46px">
            </div>

            <div class="detecting_char">
              INNO
              <br>
              Detecting
              <hr style="width:50px;color:white;height:1px;background-color:#ffffff" align="left"> 
              <span style="font-size:15px">关于一诺</span>
            </div>
          </div>
          <!-- 取消浮动 -->
          <div class="quxiao"></div>

          <div class="block3">
            <div class="tel_img"></div>
            <div class="tel_char">
              Access phone
              <br>
              访问手机
            </div>
          </div>

          <div class="block4">
            <div class="con_img"></div>
            <div class="tel_char">
              Contact us
              <br>
              联系我们
            </div>

            <div class="contact">
              <img src="@/assets/img_common/code.jpg" class="img_con">
            </div>
          </div>

          <!-- 小三角 -->
          <div class="tri1">
            <img src="@/assets/img_home/triangle1.png" />
          </div>
        </div>
        <!-- 2 3 4区块 -->

        <div class="block5" @click="switchTo('/appointment')">
          <div class="borderline">
            <div class="order_img">
              <img src="@/assets/img_home/circle.png" class="xuanzhuan" style="margin-top:31px">
            </div>

            <div class="order_char">
              DETECTION
              <br>
              order
              <hr style="width:50px;color:white;height:1px;background-color:#ffffff">
              预约检测
            </div>
          </div>
        </div>
      </div>
      <!-- 取消浮动 -->
      <div class="quxiao"></div>

      <div style="margin:0px;height:608px;width:1216px">
        <div class="block6">
          <div class="package_char">
            DETECTION OF
            <br>
            package
            <hr style="width:50px;color:white;height:1px;background-color:#ffffff" align="left">
            检测套餐
          </div>

          <div class="package_img">
            <img src="@/assets/img_home/circle.png" class="xuanzhuan2">
          </div>
        </div>

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

          <div class="car_char">
            <hr style="width:50px;color:white;height:1px;background-color:black" align="left">
            值得信赖的二手车检测专家
            <br><br>
            <span style="color:grey;font-size:15px;line-height:25px">TRUSTWORTHY USED CAR</span>
            <br>
            <span style="color:grey;font-size:15px;line-height:25px">DETECTION EXPERTS</span>     
          </div>
        </div>   

        <div class="block9">
          <div class="service_char">
            DETECTION SERVICE
            <br>
            process
            <hr style="width:50px;color:white;height:1px;background-color:#ffffff" align="left">
            服务流程
          </div>

          <div class="package_img">
            <img src="@/assets/img_home/circle.png" class="xuanzhuan2">
          </div>
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

  methods: {
    switchTo (path) {
      console.log(this.$router);
      this.$router.replace(path);
    }
  }
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
  height: 912px;
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
  overflow: hidden;
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
  left: -525px;
}
.block8:hover .car_run{
  transform: translate(1000px, 0px);
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

.detecting_img{
  position: relative;
  float: left;
  width: 144px;
  height: 152px;
  background-image: url("~@/assets/img_home/icon_horse.png");
  background-repeat: no-repeat;
  background-position: center;
}

.detecting_char{
  position: relative;
  float: left;
  margin-top: 30px;
  width: 160px;
  height: 152px;
  font-family: '微软雅黑';
  text-align: left;
  color: white;
  font-size: 20px;
}

.xuanzhuan{
  transition: all 1s;
}

.block2:hover .xuanzhuan{
  transform: rotate(270deg);
}

.tel_img{
  width: 152px;
  height: 70px;
  margin-top: 10px;
  background-image: url("~@/assets/img_home/icon_tel.png");
  background-repeat: no-repeat;
  background-position: center;
}

.tel_char{
  width: 152px;
  height: 72px;
  color: white;
  font-family: '微软雅黑';
  font-size: 15px;
}

.con_img{
  width: 152px;
  height: 70px;
  margin-top: 10px;
  background-image: url("~@/assets/img_home/icon_contact.png");
  background-repeat: no-repeat;
  background-position: center;
}

.contact{
  position: relative;
  top: -152px;
  width: 152px;
  height: 152px;
}

.contact .img_con{
  display: none;
  width:152px;
  height:152px;
}

.block4:hover .img_con{
  display: block;
}

.borderline{
  margin:18px;
  position: relative;
  width: 265px;
  height: 265px;
  border-width: 2px;
  border-color: #2D8ACF;
  border-style: solid;
}

.order_img{
  width: 265px;
  height: 120px;
  background-image: url("~@/assets/img_home/icon_file.png");
  background-repeat: no-repeat;
  background-position: center;
}

.order_char{
  width: 265px;
  height: 145px;
  color: white;
  font-family: '微软雅黑';
  font-size: 20px;
}

.block5:hover .xuanzhuan{
  transform: rotate(270deg);
}

.package_char{
  position: relative;
  margin-top: 70px;
  margin-left: 40px;
  width: 174px;
  height: 100px;
  font-family: '微软雅黑';
  text-align: left;
  color: white;
  font-size: 20px;
}

.package_img{
  position: relative;
  float: left;
  background-image: url("~@/assets/img_home/arrow.png");
  width: 244px;
  height: 84px;
  margin-left: 52px;
  margin-top: 50px;
  background-repeat: no-repeat;
}

.xuanzhuan2{
  position: relative;
  float: left;
  margin-left: -12px;
  margin-top: -9px;
  width: 30px;
  transition: all 1s;
}

.block6:hover .xuanzhuan2{
  transform:rotate(270deg)
}
.block9:hover .xuanzhuan2{
  transform:rotate(270deg)
}

.service_char{
  position: relative;
  margin-top: 70px;
  margin-left: 40px;
  width: 300px;
  height: 100px;
  font-family: '微软雅黑';
  text-align: left;
  color: white;
  font-size: 20px;
}

.car_char{
  position: relative;
  font-family: '微软雅黑';
  color: black;
  font-size: 18px;
  width: 608px;
  height: 304px;
  top: -210px;
  left: 80px;
  text-align: left;
}
</style>