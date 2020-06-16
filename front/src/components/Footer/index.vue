<template>
  <div class="footer">
    <div class="icon">
      <div class="icon-u icon-1">
        <div class="pic-u"><img src="../../assets/img_common/icon_foot.png"></div>
        <span>独立三方</span>
      </div>
      <div class="icon-u icon-2">
        <div class="pic-u"><img src="../../assets/img_common/icon_foot.png" class="pic2"></div>
        <span>国家标准</span>
      </div>
      <div class="icon-u icon-3">
        <div class="pic-u"><img src="../../assets/img_common/icon_foot.png" class="pic3"></div>
        <span>专业技师</span>
      </div>
      <div class="icon-u icon-4">
        <div class="pic-u"><img src="../../assets/img_common/icon_foot.png" class="pic4"></div>
        <span>上门检测</span>
      </div>
    </div>

    <div class="blackfooter">
      <div class="footerLink link1">
        <div class="linkTitle">服务保障</div>
        <div class="subLink">服务介绍</div>
        <div class="subLink">服务流程</div>
      </div>
      <div class="footerLink link2">
        <div class="linkTitle">检测套餐</div>
        <div class="subLink" @click="switchTo('/appointment')">预约检测</div>
      </div>
      <div class="footerLink link3">
        <div class="linkTitle">关于一诺</div>
        <div class="subLink" @click="switchTo('/about')">关于我们</div>
        <div class="subLink">加入我们</div>
        <div class="subLink">联系我们</div>
      </div>
      <div class="footerLink contact">
        <div class="linkTitle">联系我们</div>
        <div class="cont">
          <div class="cont-icon"><img src="../../assets/img_common/icon_contact.png" class="tel-pic"></div>
          <span class="cont-title">电话</span>
          <span class="cont-big">400 777 7777</span>
          <span class="cont-small">时间：9:30-18:00</span>
        </div>
        <div class="cont email">
          <div class="cont-icon"><img src="../../assets/img_common/icon_contact.png" class="email-pic"></div>
          <span class="cont-title">邮箱</span>
          <span class="cont-big" style="top: 5px;">inno@neusoft.com</span>
        </div>
      </div>
      <div class="footerLink about">
        <div class="linkTitle">关注我们</div>
        <div class="code"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  components: {
  },
  data () {
    return {
    }
  },

  methods: {
    switchTo (path) {
      console.log(this.$router);
      this.$router.replace(path);
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  position: relative;

  .icon {
    width: 100%;
    height: 70px;

    .icon-u {
      width: 180px;
      position: absolute;
      display: inline-block;
      .pic-u {
        width: 56px;
        height: 56px;
        display: inline-block;
        border: solid 2px #0f6bb0;
        border-radius: 30px;
        overflow: hidden;
      }
    }
    .icon-1 {
      top: 5px;
      left: 5%;
    }
    .icon-2 {
      top: 5px;
      left: 30%;
      .pic2 {
        position: relative;
        top: -56px;
      }
    }
    .icon-3 {
      top: 5px;
      left: 57%;
      .pic3 {
        position: relative;
        top: -112px;
      }
    }
    .icon-4 {
      top: 5px;
      left: 82%;
      .pic4 {
        position: relative;
        top: -168px;
      }
    }
    span {
      position: relative;
      top: -20px;
      left: 25px;
      font-size: 18px;
      color: #999999;
    }
  }
  .blackfooter {
    background-color: #151c21;
    width: 100%;
    height: 320px;
    color: #bbbbbb;
    font-weight: bold;

    .link1 {
      position: absolute;
      top: 120px;
      left: 70px;
    }
    .link2 {
      position: absolute;
      top: 120px;
      left: 235px;
    }
    .link3 {
      position: absolute;
      top: 120px;
      left: 400px;
    }
    .about {
      position: absolute;
      top: 120px;
      right: 0px;
    }
    .contact {
      position: absolute;
      top: 120px;
      right: 315px;
      width: 310px !important;
    }
    .code {
      background-image: url("../../assets/img_common/code.jpg");
      background-size: 100% 100%;
      width: 100px;
      height: 100px;
      margin: 15px 0;
    }
    .footerLink {
      width: 165px;
      height: 190px;
      text-align: left;

      .linkTitle {
        width: 60%;
        display: inline-block;
        position: relative;
        font-size: 18px;
        padding-bottom: 15px;
        text-align: left;
        // cursor: pointer;
        &::after {
          content: "";
          width: 30px;
          height: 1.2px;
          background-color: white;
          position: absolute;
          left: 0;
          bottom: -1px;
        }
        // &:hover {
        //   color: #66ccff;
        // }
      }
      .subLink {
        margin: 15px 0;
        font-size: 13px;
        cursor: pointer;
        &:hover {
          color: #66ccff;
        }
      }
      .cont {
        width: 100%;
        height: 35px;
        padding: 15px 0;
        border-bottom: solid 1px #333333;
        .cont-icon {
          position: relative;
          top: 7px;
          left: 3px;
          margin-right: 20px;
          width: 27px;
          height: 22.3px;
          display: inline-block;
          overflow: hidden;
        }
        .cont-title {
          color: #0f6bb0;
          font-size: 18px;
        }
        .cont-big {
          color: #fff;
          font-size: 18px;
          position: relative;
          left: 10px;
          top: -5px;
          vertical-align: top;
          font-weight: bolder;
        }
        .cont-small {
          color: #555555;
          font-size: 14px;
          position: relative;
          left: 95px;
          top: -13px;
          display: inline-block;
        }
        .tel-pic {
          height: 100%;
        }
        .email-pic {
          position: relative;
          height: 100%;
          left: -100%;
        }
      }
      .email {
        border-bottom: none !important;
      }
    }
  }
}
</style>