<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

#app {
  font-family: "Ubuntu", sans-serif;

  font-size: 1.5rem;
}
</style>
