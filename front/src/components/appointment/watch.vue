<template>
  <div class="watch" v-show="isShow">
    <div class="animation">
      <div class="inno_title">
        <img src="@/assets/img_detect/title1.png">
      </div>

      <div class="donghua">
        <div class="icon3">
          <div>
            <div class="icon">
              <img src="@/assets/img_detect/icon.png">
            </div>
          </div>
          <div style="display:block;margin-left:42%">
            <div class="icon">
              <img src="@/assets/img_detect/icon.png" style="margin-left:-88px;">
            </div>
          </div>
          
          <div style="display:inline;float:right">
            <div class="icon">
              <img src="@/assets/img_detect/icon.png" style="margin-left:-176px">
            </div>
          </div>
        </div>

        <div class="icon_char">
          <div style="float:left;margin-left:-20px">
            <span class="char">专业技师陪同看车</span>   
          </div>

          <div style="display:block;margin-left:39%">
            <span class="char">排查三大类事故车</span> 
          </div>

          <div style="display:inline;float:right;margin-right:-10px">
            <span class="char">交易买卖更放心</span>
          </div>
        </div>


        <div class="car">
            <img src="@/assets/img_detect/car.png" id="zoom_car">
        </div>
      </div>

    </div>

    <div class="appoint-form">
      <el-button class="detect-button" @click="ChangeAppointment">车辆检测</el-button>
      <el-button class="watch-button">陪同看车</el-button>
      <div class="yform">这是陪同看车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch',
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
      this.$('#zoom_car').animate({ 
        width:"387px",
        height:"309px",
        opacity:"1",
        left:"0px",
        top:"0px"}, 300);
    },
  },
  mounted() {
    this.fadeout1();
    this.fadeout2();
  },
}
</script>

<style lang="scss" scoped>
.watch {
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

        .icon3{
          width: 100%;
          height: 100px;
          padding-top: 6px;
          padding-bottom: 6px;
          //background-color: darkslateblue;


          .icon{
            position: relative;
            float: left;
            margin-top: 5px;
            width: 88px;
            height: 88px;
            overflow: hidden;
            transition: all 1000ms;
          }

          .icon:hover{
            transform: rotateY(720deg);
            //transform-origin: left top;
          }
        }

        .icon_char{
          width: 100%;
          height: 30px;
          //background-color: darkviolet;

          .char{
            position: relative;
            float: left;
          }
        }

        .car{
          width: 100%;
          height: 400px;
          //background-color: bisque;
          margin-top: 20px;
          padding-top: 20px;

          #zoom_car{
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
    .watch-button {
      background-color: #0f6bb0;
      color: white;
    }
    .detect-button {
      background-color: #f3f5f6;
      color: #aaaaaa;
      &:hover {
        color: #0f6bb0;
      }
    }
    .yform {
      height: 600px;
      border: solid 1px #dddddd;
    }
  }
}
</style>