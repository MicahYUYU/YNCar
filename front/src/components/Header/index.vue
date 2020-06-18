<template>
  <div class="header">
    <div class="home" @click="switchTo('/')">
      <img src="@/assets/img_common/logo.png" />
    </div>

    <div class="router-link">
      <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
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
  name: 'header',
  components: {},
  data() {
    return {
      navList: [
        { name: '/', navItem: '首页' },
        { name: '/appointment', navItem: '预约检测' },
        { name: '/enterprise', navItem: '企业动态' },
        { name: '/about', navItem: '关于一诺' },
      ],
    };
  },
  methods: {
    switchTo(path) {
      console.log(this.$router);
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 100;
  background-color: #fff;

  .home {
    position: absolute;
    left: 50px;
    width: 150px;
    height: 90px;
    cursor: pointer;
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
    // background-color: aqua;
    position: absolute;
    right: 340px;
    margin: 35px;
    width: 25px;
    height: 20px;
    cursor: pointer;
    &:hover {
      .wechat0 {
        opacity: 0;
      }
      .wechat1 {
        opacity: 1;
      }
      .qrcode {
        // opacity: 1;
        display: inline;
        // transition: 0.5s;
      }
    }
    .wechat0 {
      position: absolute;
      right: 0;
      transition: 0.5s;
      opacity: 1;
    }
    .wechat1 {
      position: absolute;
      right: 0;
      transition: 0.5s;
      opacity: 0;
    }
    .qrcode {
      width: 185px;
      height: 185px;
      background-color: #fff;
      border-radius: 7px;
      border: 2px solid #0f6bb0;
      position: absolute;
      top: 50px;
      right: -30px;
      //   transition: all 0.5s linear;
      //   opacity: 0;
      display: none;
      &::before {
        content: '';
        width: 0;
        height: 0;
        border: 20px solid;
        position: absolute;
        top: -40px;
        left: 125px;
        border-color: transparent transparent #0f6bb0;
      }
      .tansparent {
        content: '';
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
