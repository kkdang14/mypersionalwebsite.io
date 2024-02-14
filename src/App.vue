<template>
  <div class="app">
    <Header v-if="showHeader"></Header>
    <router-view></router-view>
    <Footer v-if="showFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components:{
    Header, Footer
  },

  computed: {
    showHeader() {
      const excludedRoutes = ['blog']
      return !excludedRoutes.includes(this.$route.name);
    },

    showFooter() {
      const excludedRoutes = ['blog'];
      return !excludedRoutes.includes(this.$route.name);
    },

    isHomePage() {
      return this.$route.name === 'home'; 
    },
  },
}
</script>

<style scoped>
  .app{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
</style>
