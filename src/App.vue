<template>
  <div id="app">
    <Header />
    <div class="container">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Home,
    Header
  }
};
</script>