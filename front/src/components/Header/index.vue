<template>
  <div class="header">

      <a href="/">
        <img class="logo" src="@/assets/img_common/logo.png" align="left">
      </a>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  methods: {}
}
</script>

<style scoped>
.header {
  line-height: 40px;
  background-color: #D9D9F3;
  top: 0px;
  left: 0px;
  right: 0px;
}

.logo{
  vertical-align: left;
  padding: 0px 0px 0px 20px; /*上 右 下 左 */
}

</style>