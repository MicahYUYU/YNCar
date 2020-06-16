 <template>
  <div class="header">
    <div class="home">
      <img src="@/assets/img_common/logo.png" />
    </div>

    <div class='router-link'>
      <!-- <router-link to="/" class="linkItem">首页</router-link>
      <router-link to="/appointment" class="linkItem">预约检测</router-link>
      <router-link to="/enterprise" class="linkItem">企业动态</router-link>
      <router-link to="/about" class="linkItem">关于一诺</router-link> -->
      <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">预约检测</template>
          <el-menu-item index="2-1">预约检测</el-menu-item>
          <el-menu-item index="2-2">陪同看车</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">企业动态</el-menu-item>
        <el-menu-item index="3">关于一诺</el-menu-item>
      </el-menu> -->
      <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
    </div>

    <div class="wechat">
      <img src="@/assets/img_common/icon_wechat.png" class="wechat0" />
      <img src="@/assets/img_common/icon_wechat1.png" class="wechat1" />
      <div class="qrcode">
        <div class="tansparent"></div>
        <img src="@/assets/img_common/code.jpg" />
      </div>
    </div>

    <div class="telNumber">
      <img src="@/assets/img_common/tel.png" />
    </div>

    <div class="login">
      <img src="@/assets/img_common/icon_login.png" class="loginIcon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  components: {},
  data () {
    return {
      navList: [
        { name: '/', navItem: '首页' },
        { name: '/appointment', navItem: '预约检测' },
        { name: '/enterprise', navItem: '企业动态' },
        { name: '/about', navItem: '关于一诺' },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 90px;

  .home {
    position: absolute;
    left: 50px;
    width: 150px;
    height: 90px;
    img {
      position: relative;
      top: 20px;
    }
  }
  .router-link {
    position: absolute;
    left: 270px;
    width: 500px;
    height: 90px;
    /deep/ .el-menu {
      position: relative;
      top: 15px;
    }
    /deep/.el-menu-item {
      font-size: 18px;
      padding: 0 25px;
    }
    /deep/.el-submenu__title {
      font-size: 18px;
    }
    /deep/ .el-menu--horizontal {
      border-bottom: none;
    }
  }
  .wechat {
    position: absolute;
    right: 340px;
    width: 90px;
    height: 90px;
    &:hover {
      .wechat0 {
        display: none;
      }
      .wechat1 {
        display: inline;
      }
      .qrcode {
        display: inline;
      }
    }
    .wechat0 {
      position: relative;
      top: 35px;
    }
    .wechat1 {
      position: relative;
      top: 35px;
      z-index: -1;
      display: none;
    }
    .qrcode {
      width: 185px;
      height: 185px;
      background-color: #fff;
      z-index: 10;
      border-radius: 7px;
      border: 2px solid #66ccff;
      position: absolute;
      top: 85px;
      right: 0px;
      display: none;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border: 20px solid;
        position: absolute;
        top: -40px;
        left: 125px;
        border-color: transparent transparent #66ccff;
      }
      .tansparent {
        content: "";
        width: 0;
        height: 0;
        border: 20px solid;
        position: absolute;
        top: -37px;
        left: 125px;
        border-color: transparent transparent #fff;
      }
      img {
        position: relative;
        top: 3px;
      }
    }
  }
  .telNumber {
    position: absolute;
    right: 90px;
    width: 250px;
    height: 90px;
    border-left: solid #dddddd 2px;
    img {
      position: relative;
      top: 5px;
    }
  }

  .login {
    width: 90px;
    height: 90px;
    background-color: #0f6bb0;
    position: absolute;
    right: 0px;
    .loginIcon {
      position: relative;
      top: 30px;
    }
  }
}
</style>
