<!--排版-->

<template>
  <div>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './Header'
import AppMain from './Main'
import AppFooter from './Footer'
export default {
  data () {
    return {
    }
  },

  components: {
      AppHeader,
      AppMain,
      AppFooter
  },

  methods: {}
}
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 50px;
  background-color: #D9D9F3;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 10px;
}

.main {
  position: absolute;
  top: 70px;
  left: 0px;
  right: 0px;

  overflow-y: auto;
}
.footer {
  left: 0px;
  padding: 10px;
  overflow-y: auto;
  right: 0px;
  bottom: 0px;
  background-color: #D9D9F3;
}
</style>