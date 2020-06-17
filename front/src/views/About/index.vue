<template>
<!-- 关于一诺 -->
  <div class="About">
    <y-header></y-header>
    
    <!-- title of about INNO-->
    <div>
      <div class="banner">
        <img src="@/assets/img_about/banner.jpg" />
      </div>
      <div class="tit">
        <img src="@/assets/img_about/title.png" />
      </div>
      <div class="bg">
        <img src="@/assets/img_about/bg.png" />
      </div>
    </div>

    <div>
      <a href="/about" class="aboutUs">关于我们</a>
      <a href="/about" class="joinUs">加入我们</a>
      <a href="/about" class="contactUs">联系我们</a>
      <div class="img1">
        <img src="@/assets/img_about/img1.jpg" />
        <p class="img1_title">一诺检测成立于2016年，主要为个人用户和企业用户提供专业、公正、客观的第三方检测服务。</p>
      </div>
    </div>

    <div>
      <div>
        <img src="@/assets/img_about/img2.jpg" />
      </div>
    </div>

    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '../../components/Header';
import YFooter from '../../components/Footer';
export default {
  name: 'About',
  components: {
    //这里是用到等各种组件
    YHeader,
    YFooter
  },
  data () {

  },
  methods: {
     switchTo (path) {
      console.log(this.$router);
      this.$router.replace(path);
    }
  },
  mounted () {
    //这里是页面加载完毕以后要自动执行的函数
  }
}
</script>

<style scoped lang="scss">
.banner{
  position: relative;
  top: 0px;
  left: 0px;
  z-index: -2;

}

.tit{
  position: relative;
  top: -330px;
  left: 10px;
  z-index: -1;

}

.bg{
  position: relative;
  top: -320px;
}


.img1 {
  position: absolute;
  top: 350px;
  left: 400px;
  clip: rect(230px, 1190px, 500px, 0px);
}

.aboutUs {
  position: relative;
  top: -320px;
  left: -90px;
  color: #a2a2a2;
}

.joinUs{
  position: relative;
  top: -320px;
  left: 500px;
  color: #a2a2a2;
}

.contactUs{
  position: relative;
  top: -320px;
  left: 100px;
  color: #a2a2a2;
}

.img1_title{
  position: relative;
  top: -430px;
}
</style>