<template>
  <div class="Enterprise">
    <y-header></y-header>
    <div class="banner">
      <div class="title left">
        <img src="../../assets/img_enterprise/title.png" id="picL" />
      </div>
      <div class="title right">
        <img src="../../assets/img_enterprise/title.png" id="picR" />
      </div>
      <div class="content">
        <img src="../../assets/img_enterprise/banner.jpg" class="content-img" />
      </div>
      <div class="foot">
        <img src="../../assets/img_enterprise/bg.png" class="footer-img" />
      </div>
    </div>
    <hr class="line" />
    <div class="tips-block">
      <div class="tips tL"><span class="word">所有咨讯</span></div>
      <div class="tips"><span class="word">企业活动</span></div>
      <div class="tips tR"><span class="word">企业新闻</span></div>
    </div>

    <div class="news">
      <new class="new" v-for="(value, index) in new_list" :key="index" :new_title="value.new_title"
        :new_year="value.new_year" :new_date="value.new_date" :new_url="value.new_url" :new_content="value.new_content">
      </new>
    </div>
    <!-- <y-footer></y-footer> -->
  </div>
</template>

<script>
import YHeader from '../../components/Header';
// import YFooter from '../../components/Footer';
import New from '../../components/New';
import NewImg1 from "@assets/img_enterprise/20170606,05,27,153.jpg";

export default {
  name: 'Enterprise',
  components: {
    //这里是用到等各种组件
    YHeader,
    // YFooter,
    New
  },
  data () {
    return {
      //这里返回变量
      new_list: [
        {
          new_title: '检测+新生态，开启二手车市场整合时代',
          new_year: '2017',
          new_date: '06-06',
          new_url: NewImg1,
          new_content: '经历快速猛涨的二手车市场，现已进入平稳发展拼实力的阶段，在二手车市场趋于规范化的进程中，涌现出很多形式的二手车检测，大致可以分为几个类别：一种是二手车商组织的检测，比较简单，只是对车况进行大体的判断；一种是二手车交易平台的检测，如人人车、优信二手车进行的检测，这类检测比较详细，但相对缺乏独立性；第三种就是完全独立的第三方检测机构，这种检测机构都有相关的标准，检测报告专业、客观、具备更高的权威性和...',
        },

      ],
    };
  },
  methods: {
    //这里写各种定义的函数等
    moveL () {
      this.$('#picL').animate({ left: 0 }, 500);
    },
    moveR () {
      this.$('#picR').animate({ right: '100%' }, 500);
    },
  },
  mounted () {
    //这里是页面加载完毕以后要自动执行的函数
    this.moveL();
    this.moveR();
  },
};
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
  .news {
    position: relative;
    top: 30px;
    margin: 0 auto;
    left: 0;
    width: 92%;
    height: 900px;
    // background-color: aqua;
  }
}
</style>
