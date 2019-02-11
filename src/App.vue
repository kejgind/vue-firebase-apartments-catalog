<template>
  <div id="app">
    <Navbar/>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Navbar, Footer },
  data() {
    return {
      //
    };
  },
  mounted: function() {},
  methods: {}
};
</script>

<style lang="scss">
</style>
