<template>
  <div id="app" class="is-flex">
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
#app {
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
.main-content {
  flex: 1;
}
</style>
