<template>
  <div class="columns is-multiline">
    <div v-for="(recipe, i) in results" :key="i" class="column is-one-quarter is-3">
      <Card :item="recipe" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Home",
  computed: {
    results() {
      return this.$store.getters.getResults;
    }
  },
  components: {
    Card
  }
};
</script>