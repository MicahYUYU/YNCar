<template>
  <div class="Enterprise">
    <y-header></y-header>
    <h1>This is Enterprise Enterprise dynamic</h1>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '../../components/Header';
import YFooter from '../../components/Footer';
export default {
  name: 'Enterprise',
  components: {
    //这里是用到等各种组件
    YHeader,
    YFooter
  },
  data () {
    return {
      //这里返回变量
    }
  },
  methods: {
    //这里写各种定义的函数等
  },
  mounted () {
    //这里是页面加载完毕以后要自动执行的函数
  }
}
</script>

<style scoped lang="scss">
</style>