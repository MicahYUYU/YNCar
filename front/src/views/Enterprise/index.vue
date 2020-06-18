<template>
  <div class="Enterprise">
    <y-header></y-header>
    <div class="banner">
      <div class="title left">
        <img src="@assets/img_enterprise/title.png" id="picL" />
      </div>
      <div class="title right">
        <img src="@assets/img_enterprise/title.png" id="picR" />
      </div>
      <div class="content">
        <img src="@assets/img_enterprise/banner.jpg" class="content-img" />
      </div>
      <div class="foot">
        <img src="@assets/img_enterprise/bg.png" class="footer-img" />
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
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="currentPage3" :page-size="1" layout="prev, pager, next, jumper"
        :total="this.new_list.length">
      </el-pagination>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '@components/Header';
import YFooter from '@components/Footer';
import New from '@components/New';
import NewImg1 from "@assets/img_enterprise/20170606,05,27,153.jpg";
import NewImg2 from "@assets/img_enterprise/20170531,09,47,182.jpg";
import NewImg3 from "@assets/img_enterprise/20170524,10,09,392.jpg";
import NewImg4 from "@assets/img_enterprise/20170511,10,00,261.jpg";
import NewImg5 from "@assets/img_enterprise/20170505,10,08,354.jpg";
import NewImg6 from "@assets/img_enterprise/20170502,10,28,334.jpg";

export default {
  name: 'Enterprise',
  components: {
    //这里是用到等各种组件
    YHeader,
    YFooter,
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
        {
          new_title: '【一诺相伴】端午佳节，超值礼品免费送！！',
          new_year: '2017',
          new_date: '05-31',
          new_url: NewImg2,
          new_content: '恰逢端午佳节小诺邀你赢取免费礼品准备好了吗？来来来，先看看，爱车的人知道对，没有看错，是车载吸尘器。一切纸屑尘埃在它的“关注”下无处遁形。分分钟让你的车内洁净如新，它可不仅仅是一件简单的清洁工具，更是一种爱车态度的体现。说了这么多，其实小诺只想送礼品。而你只用吃吃粽子，吹吹空调，动动手指就可以获得车载吸尘器。话不多说，小诺告诉你如何领取扫码进入集5粽活动...',
        },
        {
          new_title: '一诺检测：厚植二手车信息共享优势！',
          new_year: '2017',
          new_date: '05-24',
          new_url: NewImg3,
          new_content: '随着“互联网+”的普及， 共享经济时代俨然已经来临。在二手车领域，实现车况信息共享是构建二手车行业诚信的基础，同时也是共享经济的新价值体现。在二手车“限迁”政策取消后，全国各地的车源已经开始积极流通，在此基础上，实现车况信息共享及第三方平台的软服务配套升级，将会使二手车行业实现质的突破。一诺检测认为，互联网+的迅速发展为车况信息提供了良好的条件，以共享树立诚信，构建共享信用价值体系，是当前二手...',
        },
        {
          new_title: '第三方检测或助二手车C2C平台破局',
          new_year: '2017',
          new_date: '05-11',
          new_url: NewImg4,
          new_content: '在欧美国家，二手车交易是汽车行业很重要的一个方面，一般消费者买首辆车大多会选择二手车，车辆更换的频率也很高。欧美二手车为什么流行，一是价格便宜，二是买卖方便，三是车况透明，国内二手车的瓶颈就卡在第三点“车况透明”，现在无论是线上还是线下，2B还是2C，车况不透明就是最大的弊病。比如你在号称省略中间商的二手车信息平台，这其实是一个很不错的模式，美国的Auto Trader就是一个成功的案例，而在国内无论...',
        },
        {
          new_title: '一诺检测构建“检测+”二手车新业态',
          new_year: '2017',
          new_date: '05-05',
          new_url: NewImg5,
          new_content: '在国家政策的推动下，2017年将迎来中国汽车产业新的爆发点，二手车产业对整体汽车行业发展至关重要，国务院办公厅颁布《关于促进二手车便利交易的若干意见》的“国八条”，可以看出国家对于二手车发展的重视程度。未来的汽车市场要形成一个内生动力可持续发展的循环，首先就要大力推动二手车的交易，因为它是保证汽车市场可持续发展的重要环节。就目前来看，欧美发达国家的二手车交易量为新车交易量的1.5～3倍...',
        },
        {
          new_title: '【一诺相伴】没去丹麦吃生蚝，那来一诺刷礼包！',
          new_year: '2017',
          new_date: '05-02',
          new_url: NewImg6,
          new_content: '五一劳动节，小诺又给大家带来神秘礼物啦。请拿出手机，动动手指，狂刷红宝书积分抽礼品。书籍是人类进步的阶梯，让我们远离懒惰，共集书籍。只要集够260分，就可以抽摇奖品。点我玩游戏、手机扫一扫，开始游戏。爱劳动，爱一诺，让我们动起来，高举客观公正抓紧收集红宝书哦...',
        }

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
    // handleCurrentChange (value) {
    //   this.currentpage = value - 1;
    //   //   this.findGoodsList(this.goodType);
    // },
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
    // height: 900px;
    // background-color: aqua;
  }
}
</style>
