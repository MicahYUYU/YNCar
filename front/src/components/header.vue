<template>
  <div class="header">
    <div class="wechat">
      <img src="../assets/img_common/icon_wechat.png" class="wechat0" />
      <img src="../assets/img_common/icon_wechat1.png" class="wechat1" />
    </div>
    <div class="telNumber"></div>
    <div class="login">
      <img src="../assets/img_common/icon_login.png" class="loginIcon" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 75px;
  padding-top: 5px;

  .wechat {
    position: absolute;
    right: 300px;
    width: 75px;
    height: 75px;
    &:hover {
      .wechat0 {
        display: none;
      }
      .wechat1 {
        display: inline;
      }
    }
    .wechat0 {
      position: absolute;
      left: 25px;
      top: 27px;
    }
    .wechat1 {
      position: absolute;
      left: 25px;
      top: 27px;
      z-index: -1;
      display: none;
    }
  }
  .telNumber {
    background-image: url('../assets/img_common/tel.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 100px;
    width: 180px;
    height: 75px;
    // border-left: solid #aaaaaa 1px;
  }

  .login {
    width: 75px;
    height: 75px;
    background-color: #0f6bb0;
    position: absolute;
    right: 5px;
    .loginIcon {
      position: relative;
      top: 22px;
    }
  }
}
</style>
