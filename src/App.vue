<template>
  <div id="app" class="is-flex">
    <Navbar/>
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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

<style lang="scss" scoped>
#app {
  min-height: calc(100vh - 1px);
  flex-direction: column;
  justify-content: space-between;
}
.main-content {
  flex: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
