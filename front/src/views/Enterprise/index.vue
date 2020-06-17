<template>
  <div class="Enterprise">
    <y-header></y-header>
    <div class="banner">
      <div class="title left"><img src="../../assets/img_enterprise/title.png" id="picL"></div>
      <div class="title right"><img src="../../assets/img_enterprise/title.png" id="picR"></div>
      <div class="content"><img src="../../assets/img_enterprise/banner.jpg" class="content-img"></div>
      <div class="foot"><img src="../../assets/img_enterprise/bg.png" class="footer-img"></div>
    </div>
    <hr class="line">
    <div class="tips-block">
      <div class="tips tL"><span class="word">所有咨讯</span></div>
      <div class="tips"><span class="word">企业活动</span></div>
      <div class="tips tR"><span class="word">企业新闻</span></div>
    </div>
    <!-- <y-footer></y-footer> -->
  </div>
</template>

<script>
import YHeader from '../../components/Header';
// import YFooter from '../../components/Footer';
export default {
  name: 'Enterprise',
  components: {
    //这里是用到等各种组件
    YHeader,
    // YFooter
  },
  data () {
    return {
      //这里返回变量
    }
  },
  methods: {
    //这里写各种定义的函数等
    moveL () {
      this.$("#picL").animate({ left: 0 }, 500);
    },
    moveR () {
      this.$("#picR").animate({ right: "100%" }, 500);
    }
  },
  mounted () {
    //这里是页面加载完毕以后要自动执行的函数
    // console.log(this.$),
    // () => {
    //   console.log(this.$);
    //   console.log("this.$");
    //   this.$("#picL").animate({ left: 0 });
    // }
    this.moveL();
    this.moveR();
  }
}
</script>

<style scoped lang="scss">
.Enterprise {
  width: 100%;

  .banner {
    width: 100%;
    .content {
      height: 330px;
      overflow: hidden;
      width: 100%;
      .content-img {
        position: relative;
        left: -280px;
        height: 100%;
      }
    }
    .foot {
      overflow: hidden;
      height: 130px;
      .footer-img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      position: absolute;
      width: 79px;
      height: 316px;
      display: inline-block;
      z-index: 10;
    }
    .left {
      right: 50%;
      overflow: hidden;
      img {
        position: relative;
        left: 100%;
      }
    }
    .right {
      left: 50%;
      overflow: hidden;
      img {
        position: relative;
        right: 200%;
      }
    }
  }
  .line {
    position: relative;
    top: 10px;
    border: solid 0.3px #dddddd;
    width: 90%;
    height: 1px;
    background-color: #ffffff;
  }
  .tips-block {
    // text-align: center;
    position: relative;
    top: -18px;
    margin: 0 auto;
    background-color: #fff;
    // background-color: antiquewhite;
    width: 460px;
    height: 40px;
    .tips {
      margin: auto 0;
      width: 75px;
      height: 36px;
      color: #888888;
      font-size: 14px;
      font-weight: bold;
      display: inline-block;
      border: solid 1.2px #888888;
      .word {
        position: relative;
        top: 8px;
      }
    }
    .tL {
      position: relative;
      right: 70px;
    }
    .tR {
      position: relative;
      left: 70px;
    }
  }
}
</style>