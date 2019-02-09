<template>
  <div id="app">
    <Navbar/>
    <main>
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
  }
};
</script>

<style lang="scss">
// Spacing classes
@each $size, $value in (0: 0, 1: 0.25, 2: 0.5, 3: 1, 4: 1.5, 5: 3) {
  // margins
  .mt-#{$size} {
    margin-top: #{($value * 1rem)};
  }
  .mb-#{$size} {
    margin-bottom: #{($value * 1rem)};
  }
  .ml-#{$size} {
    margin-left: #{($value * 1rem)};
  }
  .mr-#{$size} {
    margin-right: #{($value * 1rem)};
  }
  .mx-#{$size} {
    margin-right: #{($value * 1rem)};
    margin-left: #{($value * 1rem)};
  }
  .my-#{$size} {
    margin-top: #{($value * 1rem)};
    margin-bottom: #{($value * 1rem)};
  }
  // paddings
  .pt-#{$size} {
    padding-top: #{($value * 1rem)};
  }
  .pb-#{$size} {
    padding-bottom: #{($value * 1rem)};
  }
  .pl-#{$size} {
    padding-left: #{($value * 1rem)};
  }
  .pr-#{$size} {
    padding-right: #{($value * 1rem)};
  }
  .px-#{$size} {
    padding-right: #{($value * 1rem)};
    padding-left: #{($value * 1rem)};
  }
  .py-#{$size} {
    padding-top: #{($value * 1rem)};
    padding-bottom: #{($value * 1rem)};
  }
}
</style>
