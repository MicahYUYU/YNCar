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
              <hr style="width:50px;color:white;height:2px;background-color:#ffffff;border-width:0;" align="left"> 
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
              <hr style="width:50px;color:white;height:2px;background-color:#ffffff;border-width:0;">
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
            <hr style="width:50px;color:white;height:2px;background-color:#ffffff;border-width:0;" align="left">
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
            <hr style="width:50px;color:white;height:2px;background-color:black;border-width:0;" align="left">
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
            <hr style="width:50px;color:white;height:2px;background-color:#ffffff;border-width:0;" align="left">
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

    <div class="hr1">
      <hr style="background-color:#DEDEDE;height:3px;border-width:0;">
      
      <div class="hr1_char">
        SPECIAL
        <br>
        quality
        <br>
        detections
        <hr style="background-color:black;height:2px;border-width:0;width:50px">
        专业质量检测
      </div>

      <div style="position:relative;top:-140px">
        <span style="font-size:18px;color:#FFC000">229  </span>
        <span style="font-size:13px;">项检测排查四大类车况，全面检测车况，提供专业检测报告</span> 
      </div>
    </div>

    <div class="warn">
      <div class="warn1" @mouseover="fadeout1()" @mouseleave="fadein1()">
        <img src="@/assets/img_home/no.png" id="warn_img1">
      </div>
      <div class="warn2" @mouseover="fadeout2()" @mouseleave="fadein2()">
        <img src="@/assets/img_home/no.png" id="warn_img2">
      </div>
      <div class="warn3" @mouseover="fadeout3()" @mouseleave="fadein3()">
        <img src="@/assets/img_home/no.png" id="warn_img3">
      </div>
      <div class="warn4" @mouseover="fadeout4()" @mouseleave="fadein4()">
        <img src="@/assets/img_home/no.png" id="warn_img4">
      </div>
    </div>

    <div class="hr2">
      <hr style="background-color:#DEDEDE;height:3px;border-width:0;">
      
      <div class="hr2_char">
        innodetecting
        <br>
        仿站
        <hr style="background-color:black;height:2px;border-width:0;width:50px">
        制作团队
      </div>

      <div style="position:relative;top:-55px">
        <span style="font-size:18px;color:#FFC000">(伪)精英级  </span>
        <span style="font-size:13px;">开发工程师随时待命</span> 
      </div>
    </div>

    <div class="team">
      <el-card class="card">
        <div class="team_img" style="overflow:hidden">
          <img src="@/assets/img_team/cyy.jpg" width="140%" style="margin-left:-50px">
        </div>
        
        <div class="team_info">
          <span>陈 迎语</span>

          <!-- 取消浮动 -->
          <div class="quxiao"></div>

          <div style="margin-top:20px;position:relative;float:left;">
          爱 好:
          <br>
          生 日:
          <br>
          负责部分:
          </div>

          <div style="margin-top:20px;margin-left:20px;position:relative;float:left">
          音乐、游戏
          <br>
          1999-10-17
          <br>
          主页
          </div>
          
        </div>
      </el-card>

      <el-card class="card">
        <img src="@/assets/img_team/cxh.jpg" class="team_img">
        <div class="team_info">
          <span>陈 旭辉</span>

          <!-- 取消浮动 -->
          <div class="quxiao"></div>

          <div style="margin-top:20px;position:relative;float:left;">
          爱 好:
          <br>
          生 日:
          <br>
          负责部分:
          </div>

          <div style="margin-top:20px;margin-left:20px;position:relative;float:left">
          排球、看剧、写代码
          <br>
          1999-10-30
          <br>
          Header、Footer、
          <br>
          企业动态
          </div>
          
        </div>
      </el-card>

      <el-card class="card">
        <img src="@/assets/img_team/yp.jpg" class="team_img">
        <div class="team_info">
          <span>杨 璞</span>

          <!-- 取消浮动 -->
          <div class="quxiao"></div>

          <div style="margin-top:20px;position:relative;float:left;">
          爱 好:
          <br>
          生 日:
          <br>
          负责部分:
          </div>

          <div style="margin-top:20px;margin-left:20px;position:relative;float:left">
          
          <br>
          
          <br>
          关于一诺
          </div>
          
        </div>
      </el-card>

      <el-card class="card">
        <img src="@/assets/img_team/yp.jpg" class="team_img">
        <div class="team_info">
          <span>夏 铭</span>

          <!-- 取消浮动 -->
          <div class="quxiao"></div>

          <div style="margin-top:20px;position:relative;float:left;">
          爱 好:
          <br>
          生 日:
          <br>
          负责部分:
          </div>

          <div style="margin-top:20px;margin-left:20px;position:relative;float:left">
          
          <br>
          
          <br>
          预约检测
          </div>
          
        </div>
      </el-card>
    </div>

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
      timer: null, //定时器,
    };
  },

  methods: {
    switchTo (path) {
      console.log(this.$router);
      this.$router.replace(path);
    },
    fadeout1(){
      //console.log('yiru')
      this.$('#warn_img1').animate({
        width:"128px",
        height:"128px",
        opacity:"1",
        left:"0px",
        top:"0px"
      },200)
    },
    fadein1(){
      this.$('#warn_img1').animate({
        width:"0px",
        height:"0px",
        opacity:"1",
        left:"64px",
        top:"64px",
        display:"block"
      },200)
    },
    fadeout2(){
      //console.log('yiru')
      this.$('#warn_img2').animate({
        width:"128px",
        height:"128px",
        opacity:"1",
        left:"0px",
        top:"0px"
      },200)
    },
    fadein2(){
      this.$('#warn_img2').animate({
        width:"0px",
        height:"0px",
        opacity:"1",
        left:"64px",
        top:"64px",
        display:"block"
      },200)
    },
    fadeout3(){
      //console.log('yiru')
      this.$('#warn_img3').animate({
        width:"128px",
        height:"128px",
        opacity:"1",
        left:"0px",
        top:"0px"
      },200)
    },
    fadein3(){
      this.$('#warn_img3').animate({
        width:"0px",
        height:"0px",
        opacity:"1",
        left:"64px",
        top:"64px",
        display:"block"
      },200)
    },
    fadeout4(){
      //console.log('yiru')
      this.$('#warn_img4').animate({
        width:"128px",
        height:"128px",
        opacity:"1",
        left:"0px",
        top:"0px"
      },200)
    },
    fadein4(){
      this.$('#warn_img4').animate({
        width:"0px",
        height:"0px",
        opacity:"1",
        left:"64px",
        top:"64px",
        display:"block"
      },200)
    },
    
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
  
  margin-left: 120px;
  margin-left: 120px;
  margin-top: 0px;
  margin-bottom: 0px;
  position: relative;
  float: left;
  top: -100px;
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
  background-position: left;
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

.hr1{
  width: 1216px;
  height: 100px;
  margin:auto;
}

.hr1_char{
  position: relative;
  width: 200px;
  height: 200px;
  font-size: 18px;
  font-family: "微软雅黑";
  margin:auto;
  top: -70px;
  background-color: white;
}

.warn{
  width: 1216px;
  height: 200px;
  margin:auto;
  margin-top: 20px;
}

#warn_img1{
  position: relative;
  display: block;
  top:64px;
  left: 64px;
  width: 0px;
  height: 0px;
}
#warn_img2{
  position: relative;
  display: block;
  top:64px;
  left: 64px;
  width: 0px;
  height: 0px;
}
#warn_img3{
  position: relative;
  display: block;
  top:64px;
  left: 64px;
  width: 0px;
  height: 0px;
}
#warn_img4{
  position: relative;
  display: block;
  top:64px;
  left: 64px;
  width: 0px;
  height: 0px;
}

.warn1{
  position: relative;
  float: left;
  margin-left: 80px;
  margin-right: 80px;
  width: 128px;
  height: 128px;
  background-image: url("~@/assets/img_home/test.png");
}
.warn2{
  position: relative;
  float: left;
  margin-left: 80px;
  margin-right: 80px;
  width: 128px;
  height: 128px;
  background-image: url("~@/assets/img_home/test.png");
  background-position: 128px 128px;
}
.warn3{
  position: relative;
  float: left;
  margin-left: 80px;
  margin-right: 80px;
  width: 128px;
  height: 128px;
  background-image: url("~@/assets/img_home/test.png");
  background-position: 256px 256px;
}
.warn4{
  position: relative;
  float: left;
  margin-left: 80px;
  margin-right: 80px;
  width: 128px;
  height: 128px;
  background-image: url("~@/assets/img_home/test.png");
  background-position: 384px 384px;
}

.hr2{
  width: 1216px;
  height: 100px;
  margin:auto;
}

.hr2_char{
  position: relative;
  width: 200px;
  height: 100px;
  font-size: 18px;
  font-family: "微软雅黑";
  margin:auto;
  top: -60px;
  background-color: white;
}

.team{
  width: 1216px;
  height: 500px;
  margin:auto;
  margin-top:30px;
  margin-bottom: 50px;
}

.card{
  position: relative;
  float: left;
  width: 280px;
  height: 480px;
  margin:5px;
}

.team_img{
  width: 250px;
  height: 250px;
  margin: auto;
  border: grey;
  border-style: solid;
}

.team_info{
  font-family: '微软雅黑';
  font-size: 15px;
  text-align: left;
  margin-left: 5px;
  margin-top: 20px;
  line-height: 30px;
}
</style>