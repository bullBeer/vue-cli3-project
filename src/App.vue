<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/appHeader'
export default {
  name: 'app',
  components: {
    appHeader
  }
}
</script>

<style lang="less">
@import './assets/less/app.less';
</style>
