<template>
  <div class="home">
    <h1>{{message}}, my name is Home</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      message: 'Hello'
    }
  },
  created() {
    console.log('xxxx')
  },
  methods: {

  }
}
</script>


<style scoped>
  
</style>
