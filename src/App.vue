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
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
export default {
  name: "App",
  components: { Navbar, Footer }
};
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
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
