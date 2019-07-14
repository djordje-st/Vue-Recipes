<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-if="results.length === 0"
      class="home is-size-1-desktop is-size-3-mobile has-text-centered"
    >
      <h1>Search for a recipe to get started!</h1>
    </div>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false" />
    <div
      v-for="(recipe, i) in results"
      :key="i"
      class="column is-half-mobile is-one-quarter-desktop"
    >
      <Card :item="recipe" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Card
  },
  computed: {
    results() {
      return this.$store.getters.getResults;
    },
    isLoading() {
      return this.$store.getters.getLoadingState;
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
