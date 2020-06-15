 <template>
  <div class="header">
    <div class="home">
      <img src="@/assets/img_common/logo.png" />
    </div>

    <div class='link'></div>

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
export default {};
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
  .link {
    position: absolute;
    background-color: aqua;
    left: 300px;
    width: 500px;
    height: 90px;
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
