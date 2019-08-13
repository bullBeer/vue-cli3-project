<template>
  <header class="header">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">资讯</router-link>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .header{
    line-height: 40px;
    color: #fff;
    background-color: #000;
    font-size: 14px;
    a{
      color: #fff;
      margin: 0 10px;
    }
  }
</style>
