<template>
  <div class="watch" v-show="isShow">
    <div class="animation"></div>
    <div class="appoint-form">
      <el-button class="detect-button" @click="ChangeAppointment">车辆检测</el-button>
      <el-button class="watch-button">陪同看车</el-button>
      <div class="yform">这是陪同看车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch',
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
.watch {
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
    .watch-button {
      background-color: #0f6bb0;
      color: white;
    }
    .detect-button {
      background-color: #f3f5f6;
      color: #aaaaaa;
      &:hover {
        color: #0f6bb0;
      }
    }
    .yform {
      height: 600px;
      border: solid 1px #dddddd;
    }
  }
}
</style>