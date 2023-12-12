<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components:{
    Header
  }
}
</script>

<style scoped>
  .app{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
