<template>
  <div class="detect" v-show="isShow">
    <div class="animation"></div>
    <div class="appoint-form">
      <el-button class="detect-button">车辆检测</el-button>
      <el-button class="watch-button" @click="ChangeAppointment">陪同看车</el-button>
      <div class="yform">这是车辆检测</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detect',
  props: {
    isShow: Boolean,
    change: Function,
  },
  methods: {
    ChangeAppointment () {
      this.$emit("change");
    }
  }
}
</script>

<style lang="scss" scoped>
.detect {
  width: 90%;
  height: 800px;
  margin-top: 90px;

  .animation {
  }
  .appoint-form {
    position: absolute;
    margin-top: 10px;
    left: 60%;
    width: 480px;
    height: 650px;

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
      //   width: 100%;
      height: 600px;
      border: solid 1px #dddddd;
    }
  }
}
</style>