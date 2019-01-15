<template>
  <div>
    <h3></h3>
    <p>ther are currently {{linkesLength}} Todos</p>
    <button @click="removeAllLinks">Removeall</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "status",
  computed: {
    ...mapGetters(["linkesLength"])
  },
  methods: {
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll();
    }
  }
};
</script>

<style>
button {
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  /* color: #ff0076; */
  cursor: pointer;
}
</style>
