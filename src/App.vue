<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components:{
    Header, Footer
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
