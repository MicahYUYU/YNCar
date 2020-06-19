<template>
  <div class="detect" v-show="isShow">
    <div class="animation">
      <div class="inno_title">
        <img src="@/assets/img_detect/title.png" id="pic_title">
      </div>
      
      <div class="donghua">
        <div class="xiaoren">
            <img src="@/assets/img_detect/img1.png" id="person">
        </div>

        <div class="d_char">
          <div style="margin-top:20px;margin-bottom:30px;" id="zoom_char1">
            <span style="font-size:45px;color:#FFC000">2</span>
            <br>
            <br>
            <span>检测系统</span>
            <br>
            <br>
            <hr style="width:80px;color:#DEDEDE;height:1px;background-color:grey;border-width:0;">
          </div>

          <div style="margin-top:20px;margin-bottom:30px;" id="zoom_char2">
            <span style="font-size:45px;color:#FFC000">6</span>
            <br>
            <br>
            <span>检测体系</span>
            <br>
            <br>
            <hr style="width:80px;color:#DEDEDE;height:1px;background-color:grey;border-width:0;">
            <hr style="width:80px;color:#DEDEDE;height:0.5px;background-color:grey;border-width:0;">
          </div>

          <div style="margin-top:20px;margin-bottom:30px;" id="zoom_char3">
            <span style="font-size:45px;color:#FFC000">229</span>
            <br>
            <br>
            <span>检测项目</span>
            <br>
            <br>
            <hr style="width:80px;color:#DEDEDE;height:1px;background-color:grey;border-width:0;">
          </div>
        </div>
      </div>
    </div>

    <div class="appoint-form">
      <el-button class="detect-button">车辆检测</el-button>
      <el-button class="watch-button" @click="ChangeAppointment">陪同看车</el-button>
      <div class="yform">这是车辆检测</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detect',
  props: {
    isShow: Boolean,
    change: Function,
  },
  methods: {
    ChangeAppointment () {
      this.$emit("change");
    },
    fadeout1(){
      this.$('#pic_title').animate({ 
        width:"211px",
        height:"77px",
        opacity:"1",
        left:"0px",
        top:"0px"}, 300);
    },
    fadeout2(){
      this.$('#zoom_char1').animate({ 
        width:"196px",
        height:"150px",
        opacity:"1",
        left:"0px",
        top:"0px"}, 300);
      
      this.$('#zoom_char2').animate({ 
        width:"196px",
        height:"150px",
        opacity:"1",
        left:"0px",
        top:"0px"}, 300);

      this.$('#zoom_char3').animate({ 
        width:"196px",
        height:"150px",
        opacity:"1",
        left:"0px",
        top:"0px"}, 300);
    },

    fadeout3(){
      this.$('#person').animate({ 
        width:"300px",
        height:"400px",
        opacity:"1",
        left:"0px",
        top:"100px"}, 100);

      this.$('#person').animate({ 
        width:"376px",
        height:"502px",
        opacity:"1",
        left:"50px",
        top:"0px"}, 200);
    }

  },
  mounted() {
    this.fadeout1();
    this.fadeout2();
    this.fadeout3();
  },
}
</script>

<style lang="scss" scoped>
.detect {
  width: 90%;
  height: 800px;
  margin-top: 90px;

  .animation {
    position: relative;
    float: left;
    width: 50%;
    height: 650px;
    left: 8%;
    margin-top: 10px;
    //background-color: aqua;

    .inno_title{
      width: 100%;
      height: 77px;
      margin-bottom: 45px;

      #pic_title{
        width: 0px;
        height: 0px;
      }
    }

    .donghua{
        width: 100%;
        height: 100%;

        .xiaoren{
          float: left;
          width: 70%;
          height: 528px;
          //background-color: bisque;

          #person{
            position: relative;
            float: left;
            width: 0px;
            height: 0px;
          }
        }

        .d_char{
          float: left;
          width: 30%;
          height: 528px;
          //background-color:cadetblue;

          #zoom_char1{
            width: 0px;
            height: 0px;
          }

          #zoom_char2{
            width: 0px;
            height: 0px;
          }

          #zoom_char3{
            width: 0px;
            height: 0px;
          }
        }

      }
  }
  .appoint-form {
    position: absolute;
    margin-top: 10px;
    left: 60%;
    width: 480px;
    height: 650px;

    /deep/ .el-button {
      margin: 0;
      width: 50%;
      font-size: 21px;
      height: 55px;
      font-weight: initial;
      border-radius: 0;
      border: 0;
    }
    .detect-button {
      background-color: #0f6bb0;
      color: white;
    }
    .watch-button {
      background-color: #f3f5f6;
      color: #aaaaaa;
      &:hover {
        color: #0f6bb0;
      }
    }
    .yform {
      //   width: 100%;
      height: 600px;
      border: solid 1px #dddddd;
    }
  }
}
</style>