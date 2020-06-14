<template>
  <div class="home">
    <y-header></y-header>
  </div>
</template>

<script>
import YHeader from '../components/header';

export default {
  name: 'Home',
  components: {
    //这里是用到等各种组件
    YHeader,
  },
  data() {
    return {
      //这里返回变量
    };
  },
  methods: {
    //这里写各种定义的函数等
  },
  mounted() {
    //这里是页面加载完毕以后要自动执行的函数
  },
};
</script>

<style lang="scss" scoped></style>
