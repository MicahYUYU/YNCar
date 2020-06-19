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
      <div class="yform">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-date-picker v-model="value" type="datetime" placeholder="预约时间（两周之内，9:00-18:00）" style="width: 100%;">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="品牌" style="width: 45%;">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-20px">
              </div>
            </el-input>
            <el-input placeholder="车型" style="width: 50%;margin-left: 5%;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="您的姓名" style="width: 60%;">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-40px">
              </div>
            </el-input>
            <el-select placeholder="性别" style="width: 35%;margin-left: 5%;" v-model="valueGender">
              <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option> -->
              <el-option label="男" key="1" value="1">
              </el-option>
              <el-option label="女" key="2" value="2">
              </el-option>
              <el-option label="不愿透露" key="3" value="3">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div>
              <el-select v-model="prov" style="width:30%;margin-right:5%;">
                <el-option v-for="(value, index) in arr" :value="value.name" :key="index">
                  {{ value.name }}
                </el-option>
              </el-select>
              <el-select v-model="city" style="width:30%;margin-right:5%;">
                <el-option v-for="(value, index) in cityArr" :value="value.name" :key="index">
                  {{ value.name }}
                </el-option>
              </el-select>
              <!-- <el-select v-model="district" v-if="district" style="width:30%;"> -->
              <el-select v-model="district" style="width:30%;">
                <el-option v-for="(value, index) in districtArr" :value="value.name" :key="index">
                  {{ value.name }}
                </el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入预约检测地址" style="width: 100%;">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-60px">
              </div>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入您的手机号" style="width: 100%;">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-80px">
              </div>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入验证码" style="width: 65%;">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-100px">
              </div>
            </el-input>
            <div class="yzm"><img src="../../assets/img_detect/yzm.png">
            </div>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入短信验证码" style="width: 55%;margin-right:5%">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-100px">
              </div>
            </el-input>
            <el-button class="get-yzm">
              获取短信验证码
            </el-button>
            <!-- <div class="get-yzm"><span style="position:relative; top:-1px">获取短信验证码</span>
            </div> -->
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked" class="protocol">我同意 <span class="protocol-word">“一诺检测”</span> 服务协议
            </el-checkbox>
          </el-form-item>
        </el-form>
        <div class="price">
          <span class="price-tag">420</span>元/次/车
        </div>
        <el-button class="commit">
          提交预约
        </el-button>
      </div>

    </div>
  </div>
</template>

<script>
import area from './area.js'
export default {
  name: 'detect',
  props: {
    isShow: Boolean,
    change: Function,
  },
  data () {
    return {
      form: {},
      value: [],
      options: [{
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }, {
        value: '3',
        label: '不愿透露'
      }],
      valueGender: [],
      arr: area.arrAll,
      prov: '省份',
      city: '城市',
      district: '区域',
      cityArr: [],
      districtArr: [],
      checked: false,
    };
  },
  methods: {
    ChangeAppointment () {
      this.$emit("change");
    },
    fadeout1 () {
      this.$('#pic_title').animate({
        width: "211px",
        height: "77px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 300);
    },
    fadeout2 () {
      this.$('#zoom_char1').animate({
        width: "196px",
        height: "150px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 300);

      this.$('#zoom_char2').animate({
        width: "196px",
        height: "150px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 300);

      this.$('#zoom_char3').animate({
        width: "196px",
        height: "150px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 300);
    },

    fadeout3 () {
      this.$('#person').animate({
        width: "300px",
        height: "400px",
        opacity: "1",
        left: "0px",
        top: "100px"      }, 100);

      this.$('#person').animate({
        width: "376px",
        height: "502px",
        opacity: "1",
        left: "50px",
        top: "0px"      }, 200)    },
    updateCity: function () {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name) {
          if (obj.name == this.prov) {
            this.cityArr = obj.sub;
            break;
          }
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = '';
      }
    }
  },
  beforeMount () {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function () {
      this.updateCity();
      this.updateDistrict();
    },
    city: function () {
      this.updateDistrict();
    }

  },
  mounted () {
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

    .inno_title {
      width: 100%;
      height: 77px;
      margin-bottom: 45px;

      #pic_title {
        width: 0px;
        height: 0px;
      }
    }

    .donghua {
      width: 100%;
      height: 100%;

      .xiaoren {
        float: left;
        width: 70%;
        height: 528px;
        //background-color: bisque;

        #person {
          position: relative;
          float: left;
          width: 0px;
          height: 0px;
        }
      }

      .d_char {
        float: left;
        width: 30%;
        height: 528px;
        //background-color:cadetblue;

        #zoom_char1 {
          width: 0px;
          height: 0px;
        }

        #zoom_char2 {
          width: 0px;
          height: 0px;
        }

        #zoom_char3 {
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
      padding: 15px 35px;
      //   height: 600px;
      text-align: left;
      border: solid 1px #dddddd;

      /deep/ .el-form-item {
        margin-bottom: 10px;
      }
      /deep/ .el-input__inner {
        border-radius: 0;
        height: 37px;
      }
      .prefix-icon {
        position: relative;
        top: 9px;
        left: 1px;
        overflow: hidden;
        width: 20px;
        height: 20px;
        img {
          position: relative;
          top: -3px;
        }
      }
      .yzm {
        position: absolute;
        right: 0px;
        overflow: hidden;
        width: 125px;
        height: 36px;
        border: solid 1px #dcdfe6;
        display: inline-block;
        img {
          position: relative;
          top: -1px;
        }
      }
      .get-yzm {
        position: absolute;
        right: 0px;
        top: 1px;
        width: 40%;
        height: 36px;
        display: inline-block;
        text-align: center;
        background-color: #febf2c;
        color: #fff;
        font-size: initial !important;
        &:hover {
          transform: scale(0.97);
          transition: all ease 0.1s;
        }
      }
      .protocol {
        color: #cccccc;
        margin-bottom: 20px;
        .protocol-word {
          color: #0f6bb0;
        }
      }
      .price {
        .price-tag {
          margin-right: 20px;
          font-size: 37px;
          color: #0f6bb0;
          font-weight: bold;
        }
      }
      .commit {
        margin-bottom: 15px;
        width: 100%;
        font-size: 21px;
        height: 55px;
        font-weight: initial;
        border-radius: 0;
        border: 0;
        background-color: #0f6bb0;
        color: white;
        &:hover {
          transform: scale(0.97);
          transition: all ease 0.1s;
        }
      }
    }
  }
}
</style>