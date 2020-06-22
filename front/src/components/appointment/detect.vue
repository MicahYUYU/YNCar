<template>
  <div class="detect" v-show="isShow">
    <div class="animation">
      <div class="inno_title">
        <img src="@/assets/img_detect/title.png">
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
      <div class="yform" >
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item>
            <el-date-picker v-model="value" type="datetime" placeholder="预约时间（两周之内，9:00-18:00）" style="width: 100%;">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="品牌" style="width: 45%;" v-model="form.pingpai">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-20px">
              </div>
            </el-input>
            <el-input placeholder="车型" style="width: 50%;margin-left: 5%;" v-model="form.chexing"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="您的姓名" style="width: 60%;" v-model="form.name">
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
            <el-input placeholder="请输入预约检测地址" style="width: 100%;" v-model="form.address">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-60px">
              </div>
            </el-input>
          </el-form-item>
          <el-form-item  prop="phone">
            <el-input placeholder="请输入您的手机号" style="width: 100%;" v-model="form.phone">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-80px">
              </div>
            </el-input>
          </el-form-item>
          <el-form-item prop="ycode">
            <el-input placeholder="请输入验证码" style="width: 65%;" v-model="form.ycode">
              <div slot="prefix" class="prefix-icon"><img src="../../assets/img_detect/icon_appoint.png"
                  style="left:-100px">
              </div>
            </el-input>
            <div class="yzm"><img src="../../assets/img_detect/yzm.png">
            </div>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入短信验证码" style="width: 55%;margin-right:5%" v-model="form.dcode">
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
            <el-checkbox v-model="checked" class="protocol">我同意 <span class="protocol-word" @click="tiaokuan=true">“一诺检测”</span> 服务协议
            </el-checkbox>
          </el-form-item>
        </el-form>
        <div class="price">
          <span class="price-tag">420</span>元/次/车
        </div>
        <el-button class="commit" @click="submitForm('form')">
          提交预约
        </el-button>
      </div>

    </div>

    <el-dialog
      title="一诺条款"
      :visible.sync="tiaokuan"
      width="30%">
      <div style="width:100%;height:400px;overflow-y: auto;text-align:left">
        前言：请务必认真阅读和理解本《一诺检测服务协议》（以下简称“本协议”）中规定的所有权利和限制。您一旦接受上海振森汽车服务有限公司为您提供车辆检测服务的，即视为您作为甲方对本协议已完全理解，并表示您同意接受本《协议》各项条款的约束。
        鉴于：甲方（车主）需委托乙方（上海振森汽车服务有限公司）为甲方提供陪同看车以及对指定车辆（被检车辆）进行检测的服务，故确认如下协议以供遵守：
        <br>
        1.甲方委托乙方提供的服务类型及相关事项：<br>
        1)甲方可委托乙方指派人员陪同甲方进行看车、选车；<br>
        2)甲方可委托乙方对甲方指定的车辆进行常规检测，该常规检测主要包括本合同第3条中规定的三种事故车；<br>
        3)甲方应向乙方明确待检车辆，并在检测之前配合乙方填写有关车辆信息；<br>
        4)因乙方需确保检测时检测地的车辆情况，乙方可对送检时的车辆进行拍照或拍摄视频并保留照片或视频，以作为反映车辆送检时状况的凭证；<br>
        5)乙方人员在陪同甲方看车的过程中，仅依据车辆表面可见部分，以及试车试驾（如有）的体验口头对该车辆作出建议和判断，因此该等建议和判断只可作为参考。<br>
        <br>
        2.服务费用：<br>
        1)车辆检测费用为每车每次人民币 420 元，甲方应于乙方出具检测报告前支付检测费用，如甲方要求部分内容不予检测的，检测费用不变，已支付检测费的不予退还；<br>
        2)陪同看车服务费用为每人每3小时人民币 600元，不足3小时的按3小时计算，自乙方人员到达甲方指定地点时起算，如甲方要求乙方人员前往多处看车的，乙方人员的差旅费应由甲方承担；<br>
        3)如甲方委托乙方陪同看车的过程中要求进行车辆检测的，甲方仅需支付乙方陪同看车的费用，无需再支付车辆检测费；<br>
        <br>
        3.甲方委托乙方对甲方指定的车辆进行检测的，具体检测内容以实际检测时为准，其中将主要包括下列三种事故车的检测项目：<br>
        1)碰撞事故车：<br>
        以下部位是否发生变形、扭曲、烧焊、更换或褶皱:<br>
        a)左右 A、B、C柱；<br>
        b)左右前纵梁；<br>
        c)左右前減震器支架部位。<br>
        以下部位是否有破损(超过直径5厘米)、出现严重变形(凹陷直径大于20厘米)或有更换:<br>
        a)中底板；<br>
        b)后底板。<br>
        2)火烧事故车：<br>
        a)发动机线束和车身线束是否存在更换新件及局部区域是否有火烧痕迹；<br>
        b)发动机线束和车身线束是否存在火烧熔线及局部区域是否有火烧痕迹；<br>
        c)车身各夹层内是否存在火烧熏黑的痕迹；<br>
        d)发动机舱、车厢内或尾箱内是否存在烧黑痕迹 。<br>
        3)水泡车事故车：<br>
        被检测车辆是否存在以下任意两项或两项以上的情况：<br>
        a)安全带抽到底,存在水迹或霉斑；<br>
        b)驾驶舱内有积水,或驾驶舱内地毯有水迹、污渍；<br>
        c)发动机船隔音隔热垫存在水迹并超过车身2/3。<br>
        <br>
        4.除本条约定的下列情形外，如被检车辆在送检时存在第3条所列的三类事故，但因乙方的过错在检测中未发现的,乙方应双倍退回检测费用。<br>
        1)在检测后被检车辆发生损毁、维修、保养、转移等导致被检车辆的车况异于送检时车辆状况的；<br>
        2)被检车辆在检测完成后超过7个自然日（含本数）或在检测后行驶里程超过300公里（含本数）的，两者以先达到的为准；<br>
        3)检测时发生水、电、互联网等公共设施停止运作的；<br>
        检测时发生不可抗力事件的。<br>
        <br>
        5.甲方应当如实告知乙方被检车辆的基本信息，该信息包括但不限于车辆型号、品牌、车架号码以及行驶里程数等。如被检车辆的实际信息与甲方告知的信息不符或经篡改、涂改的，甲方应自行承担相关法律责任，与乙方无涉。<br>
        <br>
        6.乙方检测中包括对被检车辆进行路试的项目，甲方应当持驾驶证驾驶被检车辆，配合乙方完成被检车辆的路试项目，如乙方检测时甲方不能持证驾驶被检车辆的或是拒绝路试的，则视为甲方放弃该等路试项目，乙方仍可按照流程完成检测，甲方不得因此要求扣减乙方的检测费用。<br>
        <br>
        7.乙方的检测报告系由乙方专业人员利用专业设备所作出，该检测报告仅作为该车辆在检测时状况的参考，因此任何涉及该检测报告的诉讼、纠纷等，与乙方无涉。<br>
        <br>
        8.因本协议引起的或与本协议有关的任何争议，各方应友好协商解决；协商不成的，任何一方均可将有关争议提交至协议签订地人民法院管辖，本协议签订地为上海市普陀区。<br>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="tiaokuan = false">确 定</el-button> -->
      </span>
    </el-dialog>
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
      form: {
        pingpai:'',
        chexing:'',
        name:'',
        address:'',
        phone:'',
        ycode:'',
        dcode:'',
      },
      rules:{
        phone:[
          { required: true,message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '11位手机号', trigger: 'blur' }
        ],
        ycode:[
          { required: true,message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '4位验证码', trigger: 'blur' }
        ]
      },
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
      tiaokuan:false,
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
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
        left: "80px",
        top: "80px"      }, 300);

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
        width: "500px",
        height: "650px",
        opacity: "1",
        left: "50px",
        top: "0px"      }, 200);

      this.$('#person').animate({
        width: "300px",
        height: "400px",
        opacity: "1",
        left: "50px",
        top: "0px"      }, 200);
      this.$('#person').animate({
        width: "376px",
        height: "502px",
        opacity: "1",
        left: "50px",
        top: "0px"      }, 200);

    },
    // 反函数
    recover () {
      this.$('#pic_title').animate({
        width: "0px",
        height: "0px",
        opacity: "0",
        left: "0px",
        top: "0px"      }, 10);
      this.$('#zoom_char1').animate({
        width: "0px",
        height: "0px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 10);

      this.$('#zoom_char2').animate({
        width: "0px",
        height: "0px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 10);

      this.$('#zoom_char3').animate({
        width: "0px",
        height: "0px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 10);

      this.$('#person').animate({
        width: "0px",
        height: "0px",
        opacity: "1",
        left: "0px",
        top: "0px"      }, 10);
    },
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
    },
    executeAnimation () {
      this.fadeout1();
      this.fadeout2();
      this.fadeout3();
      console.log("detect 动画执行");
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
    },
    "isShow": {
      handler: function (newValue, oldValue) {
        if (newValue) {
          console.log("执行预约检测动画");
          this.executeAnimation();
        } else {
          this.recover();
        }
        console.log("this is older detectVisible:" + oldValue);
      },
      deep: true
    },

  },
  mounted () {
    this.executeAnimation();
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