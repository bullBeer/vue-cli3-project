<template>
  <div class="home">
    <h1>{{message}}, my name is {{data.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      data: {
        name: 'Home'
      },
      message: 'Hello'
    }
  },
  created() {
    // this.getHome()
  },
  methods: {
    async getHome() {
      const res = await this.$api.getHome({})
      if (res.code == 200) {
        console.log(res)
      }
      this.data = res
      console.log('res', res)
    }
  }
}
</script>


<style scoped>
  
</style>
